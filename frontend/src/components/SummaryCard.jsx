// SummaryCard.jsx
// Shows the meeting summary. Has a title header and summary text.

// Props:
//   summary — the text to display (string).
// For now we pass a fake string. Later it comes from the AI.
function SummaryCard({ summary }) {
  return (
    // Card container: white bg, rounded, shadow, left border accent.
    // "max-w-[900px] mx-auto" → cap width and center.
    // "border-l-4 border-brand" → thick indigo line on the left.
    <div className="max-w-[900px] mx-auto bg-bg-surface rounded-lg shadow-medium border border-border-default border-l-4 border-l-brand p-5 sm:p-6 md:p-8 mb-6">

      {/* Header row: icon + title on left, copy button on right */}
      {/* "flex items-center justify-between" → push left and right apart */}
      {/* "mb-4" → 16px space below */}
      <div className="flex items-center justify-between mb-4">

        {/* Left side: icon + title */}
        <div className="flex items-center gap-3">

          {/* Small icon */}
          <span className="text-xl">📝</span>

          {/* Title */}
          <h2 className="text-lg font-semibold text-text-primary">
            Meeting Summary
          </h2>
        </div>

        {/* Right side: copy button (icon only) */}
        {/* "w-9 h-9" → 36x36 pixels */}
        {/* "rounded-md" → rounded corners */}
        {/* "hover:bg-bg-subtle" → light grey on hover */}
        <button
          onClick={() => {
            // navigator.clipboard is a browser API to copy text.
            // writeText() copies the string to clipboard.
            navigator.clipboard.writeText(summary)

            // Optional: show a quick feedback.
            // We will add a nicer toast later.
            alert('Summary copied to clipboard!')
          }}
          className="w-9 h-9 rounded-md flex items-center justify-center text-text-secondary hover:bg-bg-subtle hover:text-text-primary transition"
          title="Copy summary"
        >
          📋
        </button>

      </div>

      {/* Body: the summary text */}
      {/* "text-text-primary" → dark text */}
      {/* "text-sm md:text-base" → 14px mobile, 16px desktop */}
      {/* "leading-relaxed" → comfortable line spacing for reading */}
      <p className="text-text-primary text-sm md:text-base leading-relaxed">
        {summary}
      </p>

    </div>
  )
}

// Export so App can use it.
export default SummaryCard