# config.py
# This file loads secret keys from the .env file.
# Other files can import GEMINI_API_KEY from here.

# 'os' lets us talk to the operating system (read environment variables).
import os

# 'load_dotenv' reads the .env file and puts its values into the environment.
from dotenv import load_dotenv

# This line actually reads the .env file.
# It must run BEFORE we try to read the keys.
load_dotenv()

# Read the GEMINI_API_KEY from the environment.
# os.getenv() returns the value, or None if it is missing.
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Safety check: if the key is missing, stop the server immediately.
# This is better than failing later in a weird way.
if not GEMINI_API_KEY:
    raise ValueError(
        "GEMINI_API_KEY is not set. "
        "Please open your .env file and add your key."
    )