import os
import joblib
import pandas as pd
import pefile
import warnings

# Suppress warnings
warnings.filterwarnings("ignore")

class MLEngine:
    def __init__(self, model_path: str):
        self.model_path = model_path
        self.model = None
        self._load_model()

    def _load_model(self):
        if os.path.exists(self.model_path):
            try:
                self.model = joblib.load(self.model_path)
                print(f"Model loaded from {self.model_path}")
            except Exception as e:
                print(f"Failed to load model: {e}")
        else:
            print(f"Model file not found at {self.model_path}")

    def extract_features(self, file_path: str):
        try:
            pe = pefile.PE(file_path)
        except pefile.PEFormatError:
            return None

        features = {
            "file_size": pe.OPTIONAL_HEADER.SizeOfImage,
            "file_format": pe.FILE_HEADER.Machine,
            "num_sections": len(pe.sections),
            "dos_header_magic": pe.DOS_HEADER.e_magic,
            "dos_header_lfanew": pe.DOS_HEADER.e_lfanew,
            "pe_header_signature": pe.NT_HEADERS.Signature,
            "pe_header_machine": pe.NT_HEADERS.FILE_HEADER.Machine,
            "pe_header_number_of_sections": pe.NT_HEADERS.FILE_HEADER.NumberOfSections,
        }
        
        section_features = {}
        for i, section in enumerate(pe.sections):
            try:
                section_name = section.Name.decode().rstrip("\x00")
            except UnicodeDecodeError:
                section_name = "unknown"
                
            section_features[f"section_{i+1}_name"] = section_name
            section_features[f"section_{i+1}_size"] = section.SizeOfRawData
            section_features[f"section_{i+1}_characteristics"] = section.Characteristics

        try:
            # Flatten section features into main dictionary
            features.update(section_features)
            
            # Keep original nested structure but as strings to avoid "unhashable type: dict" error
            features["sections"] = str(section_features)

            import_table = {}
            if hasattr(pe, "DIRECTORY_ENTRY_IMPORT"):
                for entry in pe.DIRECTORY_ENTRY_IMPORT:
                    try:
                        dll_name = entry.dll.decode()
                        import_table[dll_name] = [
                            imp.name.decode() if imp.name is not None else ""
                            for imp in entry.imports
                        ]
                    except Exception:
                        continue
                        
            features["import_table"] = str(import_table)
            
            export_table = {}
            if hasattr(pe, "DIRECTORY_ENTRY_EXPORT"):
                try:
                    export_table["name"] = (
                        pe.DIRECTORY_ENTRY_EXPORT.name.decode()
                        if pe.DIRECTORY_ENTRY_EXPORT.name is not None
                        else ""
                    )
                except Exception:
                    export_table["name"] = ""
                    
            features["export_table"] = str(export_table)
            return features
        finally:
            pe.close()

    def predict(self, file_path: str):
        if not self.model:
            return {"error": "Model not loaded"}

        features = self.extract_features(file_path)
        if features is None:
            return {"error": "Invalid PE file"}

        # Prepare DataFrame
        df = pd.DataFrame([features])
        df = df.rename(columns=lambda x: x.replace("_", " ").title())

        # Add missing columns
        if "Export Table" not in df.columns:
            df["Export Table"] = "Nothing"
        if "Import Table" not in df.columns or df["Import Table"].isnull().all():
            df["Import Table"] = "Nothing"

        try:
            prediction = self.model.predict(df)
            # Check if predict_proba exists
            if hasattr(self.model, "predict_proba"):
                probability = self.model.predict_proba(df)[0][1]
            else:
                probability = float(prediction[0])

            return {
                "verdict": "Malicious" if prediction[0] == 1 else "Benign",
                "score": float(probability * 100),
                "details": {
                    "file_size": features["file_size"],
                    "machine_type": features["file_format"],
                    "sections_count": features["num_sections"]
                }
            }
        except Exception as e:
            return {"error": f"Prediction failed: {str(e)}"}
