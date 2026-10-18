# ai_service.py
# This file talks to Google Gemini (the AI).
# It takes a transcript and returns a summary + action items.

# Import the Google Gen AI library.
from google import genai

# 'types' gives us access to special config classes.
from google.genai import types

# Import our API key (from config.py).
from app.config import GEMINI_API_KEY

# Import our data shape (from models.py).
# This is what we promise to return.
from app.models import MeetingAnalysisResponse


# ============================================================
# Create a "client". This is our connection to Gemini.
# We give it the API key once. It stays open.
# ============================================================
client = genai.Client(api_key=GEMINI_API_KEY)


# ============================================================
# The main function. Takes a transcript, returns structured data.
# ============================================================
async def analyze_transcript(transcript: str) -> MeetingAnalysisResponse:
    # 'async' means this function can wait without blocking the server.
    # 'transcript: str' means the input must be a text.
    # '-> MeetingAnalysisResponse' means it will return our data shape.

    # Build the prompt. This is the instruction we give to Gemini.
    # A good prompt = a good answer. Be clear and specific.
    prompt = f"""
    You are an expert meeting assistant.

    Read the transcript below carefully.
    Then do TWO things:

    1. Write a SHORT summary (3 to 6 sentences).
       Focus on the main decisions and topics.

    2. Find every ACTION ITEM.
       For each one, extract:
       - owner: the person responsible (their name)
       - task: what needs to be done
       - deadline: when it is due (or null if not mentioned)

    Rules:
    - Do not invent information.
    - If no deadline is mentioned, use null.
    - If no action items exist, return an empty list.

    Transcript:
    ---
    {transcript}
    ---
    """

    # Ask Gemini for the schema (shape) of our response model.
    # This tells the AI exactly what format to use.
    response_schema = MeetingAnalysisResponse.model_json_schema()

    # Send the request to Gemini.
    # - model: which AI model to use. 'gemini-2.0-flash' is fast and free.
    # - contents: the prompt we built.
    # - config: extra settings, like "reply in JSON".
    response = await client.aio.models.generate_content(
        model="gemini-3.8-flash",
        contents=prompt,
        config=types.GenerateContentConfig(
            # Force the reply to be JSON, not plain text.
            response_mime_type="application/json",
            # Give the AI our schema so it knows the exact shape.
            response_schema=response_schema,
        ),
    )

    # The AI's reply is a JSON string. Convert it to our Pydantic model.
    # 'model_validate_json' does two jobs:
    #   1. Parses the JSON.
    #   2. Checks that the fields match our shape.
    result = MeetingAnalysisResponse.model_validate_json(response.text)

    # Return the clean, validated object.
    return result