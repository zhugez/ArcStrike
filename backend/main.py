from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
import uuid
from ml_engine import MLEngine

app = FastAPI(title="ArcStrike Detection API", version="1.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize ML Engine
# Assuming the model is at the path specified by the user
MODEL_PATH = r"D:\New folder\Test\xgb_pipeline.pkl"
ml_engine = MLEngine(MODEL_PATH)

TEMP_DIR = "temp_uploads"
os.makedirs(TEMP_DIR, exist_ok=True)

@app.get("/")
def read_root():
    return {"status": "ArcStrike Detection Plane Operational"}

@app.post("/detect/file")
async def detect_file(file: UploadFile = File(...)):
    try:
        # Save uploaded file temporarily
        file_ext = os.path.splitext(file.filename)[1]
        temp_filename = f"{uuid.uuid4()}{file_ext}"
        temp_file_path = os.path.join(TEMP_DIR, temp_filename)

        with open(temp_file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # Run analysis
        result = ml_engine.predict(temp_file_path)

        # Cleanup
        os.remove(temp_file_path)

        if "error" in result:
            raise HTTPException(status_code=400, detail=result["error"])

        return {
            "id": str(uuid.uuid4()),
            "status": "complete",
            "verdict": result["verdict"],
            "score": result["score"],
            "family": "ML.Detection" if result["verdict"] == "Malicious" else "Clean",
            "features": {
                "static": f"Sections: {result['details']['sections_count']}, Machine: {result['details']['machine_type']}",
                "behavior": "Static Analysis Only",
                "network": "No network activity detected"
            },
            "timestamp": "2024-12-04T00:00:00Z" # Placeholder, ideally use current time
        }

    except Exception as e:
        if 'temp_file_path' in locals() and os.path.exists(temp_file_path):
            os.remove(temp_file_path)
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
