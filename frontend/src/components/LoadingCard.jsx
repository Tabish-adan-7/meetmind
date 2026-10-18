// LoadingCard.jsx
// Shows a spinner and a message while the AI is processing the transcript.

function LoadingCard() {
  return (
    // Outer section with bottom padding.
    <section className="pb-16 md:pb-20">

      {/* Container: center content, max 1200px, side padding */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10 lg:px-20">

        {/* Card: same size as InputCard so it feels consistent */}
        {/* "p-12 md:p-16" → big padding inside */}
        {/* "flex flex-col items-center" → center everything vertically */}
        <div className="max-w-[900px] mx-auto bg-bg-surface rounded-lg shadow-medium border border-border-default p-12 md:p-16 flex flex-col items-center text-center">

          {/* SPINNER */}
          {/* "w-12 h-12" → 48x48 pixels */}
          {/* "rounded-full" → circle */}
          {/* "border-4" → 4px thick border */}
          {/* "border-border-default" → light grey border all around */}
          {/* "border-t-brand" → only the TOP border is indigo */}
          {/* "animate-spin" → Tailwind's built-in spin animation */}
          {/* "mb-6" → 24px space below */}
          <div className="w-12 h-12 rounded-full border-4 border-border-default border-t-brand animate-spin mb-6" />

          {/* Main message */}
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Reading your meeting...
          </h3>

          {/* Subtitle: rotates later. For now, static text. */}
          <p className="text-sm text-text-secondary">
            Finding key points...
          </p>

        </div>
      </div>
    </section>
  )
}

// Export the component.
export default LoadingCard