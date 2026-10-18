// InputCard.jsx
// The main input area. Has tabs, a textarea, an upload zone, and buttons.

import { useState } from 'react'

function InputCard({ onProcess }) {
  // State: which tab is active. Default is 'paste'.
  const [activeTab, setActiveTab] = useState('paste')

  // State: the text user typed in the textarea.
  const [text, setText] = useState('')

  // NEW: This is the sample transcript.
  // We use backticks (`) so we can write multiple lines easily.
  const sampleTranscript = `John: Let's start the Q3 launch sync. Sarah, where are we with the new authentication system?
Sarah: The backend logic is 80% done. I fixed a bug this morning. I just need to finish the API endpoints by Wednesday.
John: Perfect. Mike, once Sarah hands that over, how long will QA take?
Mike: If the API is clean, testing the login flow takes a day or two. I'll run the full test suite on Thursday and have a bug report by Friday morning.
John: Great. Priya, how are the dashboard mockups looking?
Priya: They look really good. I haven't finished the dark mode yet, but I'll finalize the light mode designs by the end of today.
David: I'm working on the launch email. I need the final screenshots from Priya. I plan to send the draft email to John for review by next Monday.
John: Sounds good. Sarah, can you jump on a quick call with the client on Friday to show the new auth flow?
Sarah: I can do that.
John: Okay, let's sync again next Tuesday.`

  // This runs when user clicks "Process Meeting".
  const handleProcessClick = () => {
    // Check if text is too short (less than 10 characters).
    if (text.trim().length < 10) {
      alert('Please paste a longer transcript first.')
      return
    }
    // Call the function passed from App. Send the text.
    onProcess(text)
  }

  // NEW: This runs when user clicks "Load Sample".
  const handleLoadSample = () => {
    // 1. Change the active tab to 'paste' (just in case they are on 'upload').
    setActiveTab('paste')
    // 2. Update the text state with our sample transcript.
    // React will automatically put this text into the <textarea>.
    setText(sampleTranscript)
  }

  return (
    <section className="pb-16 md:pb-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-[900px] mx-auto bg-bg-surface rounded-lg shadow-large border border-border-default p-5 sm:p-6 md:p-8">

          {/* CARD HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
            <div>
              <h2 className="text-lg font-semibold text-text-primary">
                Meeting Transcript
              </h2>
              <p className="text-sm text-text-secondary mt-1">
                Paste text or upload a file
              </p>
            </div>
            <button
              onClick={() => setText('')}
              className="text-sm font-medium text-text-secondary hover:text-error transition self-start sm:self-auto"
            >
              Clear
            </button>
          </div>

          {/* TABS */}
          <div className="inline-flex p-1 bg-bg-subtle rounded-full mb-6">
            <button
              onClick={() => setActiveTab('paste')}
              className={
                activeTab === 'paste'
                  ? 'px-4 py-2 text-sm font-semibold text-text-primary bg-bg-surface rounded-full shadow-soft transition'
                  : 'px-4 py-2 text-sm font-medium text-text-secondary rounded-full transition'
              }
            >
              Paste Text
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={
                activeTab === 'upload'
                  ? 'px-4 py-2 text-sm font-semibold text-text-primary bg-bg-surface rounded-full shadow-soft transition'
                  : 'px-4 py-2 text-sm font-medium text-text-secondary rounded-full transition'
              }
            >
              Upload File
            </button>
          </div>

          {/* TEXTAREA */}
          {activeTab === 'paste' && (
            <div>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="John: Let's start the sprint review. Sarah will prepare the report by Friday..."
                className="w-full h-48 md:h-60 p-4 bg-bg-subtle border border-border-default rounded-md text-text-primary placeholder:text-text-muted text-sm md:text-base focus:outline-none focus:border-brand transition resize-none"
              />
              <div className="flex items-center justify-end mt-2">
                <span className="text-xs text-text-muted">
                  {text.length.toLocaleString()} characters
                </span>
              </div>
            </div>
          )}

          {/* UPLOAD ZONE */}
          {activeTab === 'upload' && (
            <div>
              <label className="w-full h-48 md:h-60 border-2 border-dashed border-border-strong rounded-md bg-bg-subtle flex flex-col items-center justify-center cursor-pointer hover:border-brand hover:bg-brand-light transition">
                <div className="text-4xl mb-3">☁️</div>
                <p className="text-sm font-semibold text-text-primary">
                  Click to upload or drag & drop
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  TXT, VTT, SRT up to 5MB
                </p>
                <input type="file" className="hidden" accept=".txt,.vtt,.srt" />
              </label>
            </div>
          )}

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row sm:justify-end gap-3 mt-6">
            {/* NEW: Added onClick={handleLoadSample} to this button */}
            <button 
              onClick={handleLoadSample}
              className="w-full sm:w-auto min-h-[44px] px-5 py-3 rounded-sm border border-border-default bg-bg-surface text-text-primary text-sm font-semibold hover:bg-bg-subtle transition"
            >
              Load Sample
            </button>

            <button
              onClick={handleProcessClick}
              className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-sm bg-gradient-to-r from-brand to-brand-violet text-white text-sm font-semibold shadow-soft hover:shadow-medium hover:scale-[1.02] transition"
            >
              ✨ Process Meeting
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default InputCard