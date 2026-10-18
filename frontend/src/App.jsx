// App.jsx
// Main file. Shows different sections based on status.

import { useState } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import InputCard from './components/InputCard'
import LoadingCard from './components/LoadingCard'
import SummaryCard from './components/SummaryCard'
import ActionItemsCard from './components/ActionItemsCard'
import ErrorBanner from './components/ErrorBanner'
import Footer from './components/Footer'

function App() {
  // Status can be: 'idle', 'loading', 'success', 'error'
  const [status, setStatus] = useState('idle')

  // Summary text from AI.
  const [summary, setSummary] = useState('')

  // Action items array from AI.
  const [items, setItems] = useState([])

  // Error message text.
  const [errorMessage, setErrorMessage] = useState('')

  // This runs when user clicks "Process Meeting".
  // It is now an 'async' function because it waits for the network.
  const handleProcess = async (text) => {
    setStatus('loading')

    try {
      // 1. Send the text to our Python backend using 'fetch'.
      // Note: We use port 8000 because that is where FastAPI is running.
      const response = await fetch('http://localhost:8000/api/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // The backend expects a JSON object with the key "transcript".
        body: JSON.stringify({ transcript: text }),
      })

      // 2. Check if the response is OK (status 200).
      if (!response.ok) {
        throw new Error('Server returned an error')
      }

      // 3. Read the JSON data from the response.
      const data = await response.json()

      // 4. Update the UI with the real AI data.
      setSummary(data.summary)
      setItems(data.action_items)
      setStatus('success')

    } catch (error) {
      // If the network fails or the server breaks, show the error banner.
      console.error(error)
      setErrorMessage('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  // Runs when user clicks the ✕ on ErrorBanner.
  const handleCloseError = () => {
    setErrorMessage('')
    setStatus('idle')
  }

  return (
    <div className="min-h-screen bg-bg-base flex flex-col">
      <Header />
      <Hero />

      <main className="flex-1">
        {/* Show ErrorBanner when status is 'error' */}
        {status === 'error' && (
          <ErrorBanner message={errorMessage} onClose={handleCloseError} />
        )}

        {/* InputCard when idle or error (so they can retry) */}
        {(status === 'idle' || status === 'error') && (
          <InputCard onProcess={handleProcess} />
        )}

        {/* LoadingCard when loading */}
        {status === 'loading' && <LoadingCard />}

        {/* Summary + Action Items when success */}
        {status === 'success' && (
          <>
            <SummaryCard summary={summary} />
            <ActionItemsCard items={items} />
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App