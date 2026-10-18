// ErrorBanner.jsx
// Shows an error message. Has a red background and a close button.
// Props:
//   message — the error text to show.
//   onClose — a function that runs when user clicks the close button.

function ErrorBanner({ message, onClose }) {
  return (
    // Outer wrapper: caps width and centers the banner.
    // "max-w-[900px] mx-auto" → same width as other cards.
    // "px-4 sm:px-6 md:px-10 lg:px-20" → side padding at each size.
    // "pt-6" → some space at the top.
    <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 pt-6">

      {/* The banner itself */}
      {/* "bg-error-light" → very light red background */}
      {/* "border-l-4 border-l-error" → thick red border on the left side */}
      {/* "rounded-md" → 12px rounded corners */}
      {/* "p-4" → 16px padding inside */}
      {/* "flex items-start justify-between gap-3" → row with icon/text on left, close on right */}
      <div className="bg-error-light border-l-4 border-l-error rounded-md p-4 flex items-start justify-between gap-3">

        {/* Left side: icon + message in a row */}
        <div className="flex items-start gap-3">

          {/* Warning icon */}
          {/* "text-lg" → slightly bigger */}
          {/* "leading-none" → no extra line height */}
          <span className="text-lg leading-none">⚠️</span>

          {/* Error message */}
          {/* "text-sm" → 14px */}
          {/* "text-error-text" → dark red text */}
          {/* "font-medium" → weight 500 */}
          <p className="text-sm text-error-text font-medium">
            {message}
          </p>
        </div>

        {/* Right side: close button */}
        {/* "w-6 h-6" → 24x24 pixels */}
        {/* "flex items-center justify-center" → center the ✕ */}
        {/* "rounded-md" → rounded hover area */}
        {/* "hover:bg-error/10" → light red on hover */}
        {/* "text-error-text" → dark red color */}
        <button
          onClick={onClose}
          className="w-6 h-6 rounded-md flex items-center justify-center text-error-text hover:bg-red-100 transition shrink-0"
          title="Close"
        >
          ✕
        </button>

      </div>
    </div>
  )
}

// Export so App can use it.
export default ErrorBanner