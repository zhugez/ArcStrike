import sys
import os
import json
import warnings
import joblib
import pandas as pd
import pefile
import numpy as np

# Suppress warnings
warnings.filterwarnings("ignore")

def extract_structure_features(file_path):
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

    features["sections"] = section_features

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
                
    features["import_table"] = import_table
    
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
            
    features["export_table"] = export_table
    return features

def load_model(model_path):
    return joblib.load(model_path)

def main():
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No file path provided"}))
        sys.exit(1)

    file_path = sys.argv[1]
    model_path = r"D:\New folder\Test\xgb_pipeline.pkl"

    if not os.path.exists(file_path):
        print(json.dumps({"error": "File not found"}))
        sys.exit(1)

    if not os.path.exists(model_path):
        print(json.dumps({"error": "Model file not found"}))
        sys.exit(1)

    try:
        # Extract features
        features = extract_structure_features(file_path)
        if features is None:
             print(json.dumps({"error": "Invalid PE file"}))
             sys.exit(1)

        # Prepare DataFrame for model
        # The model expects specific column names. We need to match the training data structure.
        # Based on the user's snippet: 
        # df = pd.DataFrame(df, index=[0]).rename(columns=lambda x: x.replace("_", " ").title())
        
        # Flatten the features dictionary for the DataFrame
        # Note: The user's code implies the 'features' dict is flat or flattened before creating DF?
        # Actually, looking at the user's code:
        # df = extract_structure_features(...) -> returns dict
        # df = pd.DataFrame(df, index=[0]) -> this creates columns from keys
        # The keys in extract_structure_features are: "file_size", "file_format", "sections", "import_table", etc.
        # But the model likely needs flattened features or specific columns.
        # However, the user's code does: df = pd.DataFrame(df, index=[0]).rename(columns=lambda x: x.replace("_", " ").title())
        # This implies the model was trained on columns like "File Size", "File Format", etc.
        # BUT, "sections", "import_table" are nested dicts. DataFrame(dict) will put the whole dict in one cell if it's nested?
        # No, pd.DataFrame([dict]) handles simple keys. Nested dicts like 'sections' might cause issues if the model expects them flattened.
        # Let's look closely at the user's snippet:
        # features["sections"] = section_features
        # features["import_table"] = import_table
        # If the model uses these columns, it might be using a custom preprocessor in the pipeline that handles object columns?
        # The user says "xgb_pipeline.pkl". Pipelines can have preprocessors.
        # I will follow the user's exact transformation logic.
        
        df = pd.DataFrame([features])
        df = df.rename(columns=lambda x: x.replace("_", " ").title())

        # Add missing columns if necessary (from user's snippet)
        if "Export Table" not in df.columns:
            df["Export Table"] = "Nothing"
        if "Import Table" not in df.columns or df["Import Table"].isnull().all():
            df["Import Table"] = "Nothing"

        # Load model and predict
        model = load_model(model_path)
        
        # The model pipeline likely handles the rest (encoding, etc.)
        prediction = model.predict(df)
        probability = model.predict_proba(df)[0][1] if hasattr(model, "predict_proba") else 0.0
        
        result = {
            "status": "complete",
            "verdict": "Malicious" if prediction[0] == 1 else "Benign",
            "score": float(probability * 100),
            "details": {
                "file_size": features["file_size"],
                "machine_type": features["file_format"],
                "sections_count": features["num_sections"],
                "is_pe": True
            }
        }
        
        print(json.dumps(result))

    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)

if __name__ == "__main__":
    main()
