// App.jsx
// Main file. Shows different sections based on status.
// It also handles talking to the Python backend.

import { useState } from 'react'

// Import all our UI pieces.
import Header from './components/Header'
import Hero from './components/Hero'
import InputCard from './components/InputCard'
import LoadingCard from './components/LoadingCard'
import SummaryCard from './components/SummaryCard'
import ActionItemsCard from './components/ActionItemsCard'
import ErrorBanner from './components/ErrorBanner'
import Footer from './components/Footer'

function App() {
  // ==========================================
  // STATE: Variables that remember things.
  // ==========================================

  // Status can be: 'idle', 'loading', 'success', 'error'
  const [status, setStatus] = useState('idle')

  // Stores the summary text we get from the AI.
  const [summary, setSummary] = useState('')

  // Stores the list of action items we get from the AI.
  const [items, setItems] = useState([])

  // Stores the error message if something breaks.
  const [errorMessage, setErrorMessage] = useState('')

  // ==========================================
  // DATA FLOW: Sending data to the backend
  // ==========================================
  // This function runs when the user clicks "Process Meeting".
  // 'async' means it can wait for the internet without freezing the screen.
  const handleProcess = async (text) => {
    // 1. Change status to loading to show the spinner.
    setStatus('loading')

    try {
      // 2. Figure out where to send the data.
      // If we are on Vercel, VITE_API_URL is empty, so it uses just '/api/process'.
      // If we are on localhost, it uses 'http://localhost:8000/api/process'.
      const baseUrl = import.meta.env.VITE_API_URL || ''

      // 3. Send the text to our Python backend using 'fetch'.
      // 'await' pauses this function until the backend replies.
      const response = await fetch(`${baseUrl}/api/process`, {
        method: 'POST', // POST means we are sending data.
        headers: {
          'Content-Type': 'application/json', // Tell the server we are sending JSON.
        },
        // Convert our text string into a JSON object.
        body: JSON.stringify({ transcript: text }),
      })

      // 4. Check if the server replied with an error (like 500 or 404).
      if (!response.ok) {
        throw new Error('Server returned an error')
      }

      // 5. Read the JSON data the backend sent back.
      const data = await response.json()

      // 6. Save the AI data into our React state.
      // This will automatically update the screen.
      setSummary(data.summary)
      setItems(data.action_items)
      
      // 7. Change status to success to show the Result Cards.
      setStatus('success')

    } catch (error) {
      // 8. If the internet drops or the server crashes, catch the error.
      console.error(error)
      setErrorMessage('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  // ==========================================
  // DATA FLOW: Closing the error banner
  // ==========================================
  // Runs when the user clicks the "✕" on the ErrorBanner.
  const handleCloseError = () => {
    setErrorMessage('') // Clear the error text.
    setStatus('idle')   // Go back to the input screen.
  }

  // ==========================================
  // UI RENDERING
  // ==========================================
  return (
    // "min-h-screen" makes the background fill the whole screen.
    // "flex flex-col" helps push the footer to the bottom.
    <div className="min-h-screen bg-bg-base flex flex-col">
      
      {/* Top navigation bar */}
      <Header />
      
      {/* Big title and subtitle */}
      <Hero />

      {/* Main content area. "flex-1" makes it grow to fill empty space. */}
      <main className="flex-1">
        
        {/* Show Error Banner ONLY if status is 'error' */}
        {status === 'error' && (
          <ErrorBanner message={errorMessage} onClose={handleCloseError} />
        )}

        {/* Show Input Card if status is 'idle' OR 'error' (so they can retry) */}
        {(status === 'idle' || status === 'error') && (
          <InputCard onProcess={handleProcess} />
        )}

        {/* Show Loading Spinner ONLY if status is 'loading' */}
        {status === 'loading' && <LoadingCard />}

        {/* Show Results ONLY if status is 'success' */}
        {status === 'success' && (
          <>
            <SummaryCard summary={summary} />
            <ActionItemsCard items={items} />
          </>
        )}

      </main>

      {/* Bottom footer */}
      <Footer />
      
    </div>
  )
}

export default App