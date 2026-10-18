# routes.py
# This file defines the API endpoints (URLs) for our backend.
# The frontend calls these URLs to send and receive data.

# Import APIRouter — it groups related endpoints together.
# Import HTTPException — we use this to send error responses.
from fastapi import APIRouter, HTTPException

# Import our data shapes from models.py.
from app.models import TranscriptRequest, MeetingAnalysisResponse

# Import our AI function from ai_service.py.
from app.services.ai_service import analyze_transcript


# ============================================================
# Create a "router". Think of it like a mini-app for routes.
# We will connect this to the main app in main.py.
# ============================================================
router = APIRouter()


# ============================================================
# Define a POST endpoint at the path "/process".
# Full URL will be: http://localhost:8000/api/process
# (The "/api" part comes from main.py.)
# ============================================================
@router.post("/process", response_model=MeetingAnalysisResponse)
async def process_transcript(request: TranscriptRequest) -> MeetingAnalysisResponse:
    # 'request' contains the data sent by the frontend.
    # Because of the type hint 'TranscriptRequest', FastAPI
    # automatically checks the shape and fills the object.
    # So request.transcript is a string we can use.

    # Use a try/except block to handle errors gracefully.
    # If anything goes wrong, we return a friendly error.
    try:
        # Call our AI function with the transcript.
        # 'await' means "wait for the AI to reply, but do not freeze the server".
        analysis = await analyze_transcript(request.transcript)

        # Return the analysis. FastAPI sends it back to the frontend as JSON.
        return analysis

    except Exception as e:
        # If something breaks, log the error and send a 500 response.
        # 'str(e)' converts the error to readable text.
        raise HTTPException(
            status_code=500,
            detail=f"An error occurred: {str(e)}"
        )