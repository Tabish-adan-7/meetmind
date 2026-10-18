# models.py
# This file defines the SHAPES of our data.
# Think of it like a form. It says what fields must exist.
# We use a library called Pydantic. It checks the data for us.

# Import BaseModel. It is the parent class for our shapes.
from pydantic import BaseModel, Field

# Import List and Optional for typing.
# List means "a group of items".
# Optional means "this field can be empty or missing".
from typing import List, Optional


# ============================================================
# SHAPE 1: What the frontend SENDS to us.
# ============================================================
class TranscriptRequest(BaseModel):
    # 'transcript' must be a string (text).
    # Field(...) with three dots means "required".
    # description is a note that shows up in API docs.
    transcript: str = Field(
        ...,
        description="The full text of the meeting transcript."
    )


# ============================================================
# SHAPE 2: One action item.
# ============================================================
class ActionItem(BaseModel):
    # 'owner' is the person who does the task.
    # Must be a string. Required.
    owner: str = Field(
        ...,
        description="The person responsible for the task."
    )

    # 'task' is what needs to be done.
    # Must be a string. Required.
    task: str = Field(
        ...,
        description="The task description."
    )

    # 'deadline' is when it is due.
    # Optional[str] means: either a string OR None (missing).
    # Field(None) means: default value is None.
    deadline: Optional[str] = Field(
        None,
        description="The deadline for the task, if mentioned."
    )


# ============================================================
# SHAPE 3: What WE SEND BACK to the frontend.
# ============================================================
class MeetingAnalysisResponse(BaseModel):
    # 'summary' is a short text about the meeting.
    # Must be a string. Required.
    summary: str = Field(
        ...,
        description="A short summary of the meeting."
    )

    # 'action_items' is a LIST of ActionItem objects.
    # List[ActionItem] means: a group of ActionItem items.
    action_items: List[ActionItem] = Field(
        ...,
        description="A list of action items."
    )