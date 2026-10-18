# main.py
# This is the entry point of the backend.
# It creates the FastAPI app, adds routes, and allows CORS.

# Import FastAPI — the main class.
from fastapi import FastAPI

# Import CORSMiddleware — it controls who can talk to our backend.
# This is needed because our frontend runs on a different port.
from fastapi.middleware.cors import CORSMiddleware

# Import our router from routes.py.
# We renamed it to 'api_router' to be clear.
from app.routes import router as api_router


# ============================================================
# Create the main FastAPI app.
# 'title' is just a name shown in the API docs.
# ============================================================
app = FastAPI(title="MeetMind API")


# ============================================================
# CORS (Cross-Origin Resource Sharing) setup.
# This tells the server: "It is OK for these URLs to call me."
# Without this, the browser will block requests from React.
# ============================================================
origins = [
    "http://localhost:5173",   # React default port
    "http://localhost:5174",   # Fallback (if 5173 is busy)
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5174",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,       # which origins can call us
    allow_credentials=True,      # allow cookies/auth later
    allow_methods=["*"],         # allow GET, POST, PUT, DELETE
    allow_headers=["*"],         # allow any header
)


# ============================================================
# Add our API routes.
# All routes in routes.py get the prefix '/api'.
# So '/process' becomes '/api/process'.
# ============================================================
app.include_router(api_router, prefix="/api")


# ============================================================
# A simple root endpoint.
# Open http://localhost:8000/ in a browser to check the server.
# If you see this message, the server is alive.
# ============================================================
@app.get("/")
def read_root():
    return {"message": "MeetMind API is running!"}