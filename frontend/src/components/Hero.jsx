// Hero.jsx
// The big title section at the top of the page.
// Shows a small badge, a big title, and a subtitle.

function Hero() {
  return (
    // Outer section: no background (inherits from parent).
    // "pt-16 md:pt-20" → top padding: 64px mobile, 80px desktop.
    // "pb-12" → bottom padding: 48px.
    <section className="pt-16 md:pt-20 pb-12">

      {/* Container: centers content, caps width at 1200px, adds side padding */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10 lg:px-20">

        {/* Text is centered */}
        <div className="text-center">

          {/* Badge: small pill above the title */}
          {/* "inline-flex" → shrinks to fit the content */}
          {/* "items-center gap-2" → small row, 8px gap */}
          {/* "px-3 py-1.5" → inner padding */}
          {/* "bg-brand-light" → light indigo background */}
          {/* "text-brand-hover" → dark indigo text */}
          {/* "rounded-full" → pill shape */}
          {/* "text-xs font-semibold" → 12px, semi-bold */}
          {/* "mb-6" → 24px space below */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-light text-brand-hover rounded-full text-xs font-semibold mb-6">
            ✨ Powered by AI
          </div>

          {/* Big title */}
          {/* "text-3xl sm:text-4xl md:text-5xl" → grows with screen size */}
          {/* "font-bold" → weight 700 */}
          {/* "text-text-primary" → dark text */}
          {/* "leading-tight" → tighter line spacing */}
          {/* "max-w-3xl mx-auto" → cap width ~720px, center */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight max-w-3xl mx-auto">

            {/* First part of the title, normal color */}
            Turn Meetings Into{' '}

            {/* Gradient part */}
            {/* "bg-gradient-to-r" → gradient left to right */}
            {/* "from-brand to-brand-violet" → indigo to violet */}
            {/* "bg-clip-text text-transparent" → gradient shows through text */}
            <span className="bg-gradient-to-r from-brand to-brand-violet bg-clip-text text-transparent">
              Actionable Insights
            </span>

          </h1>

          {/* Subtitle */}
          {/* "text-base md:text-lg" → 16px mobile, 18px desktop */}
          {/* "text-text-secondary" → grey text */}
          {/* "mt-6" → 24px above */}
          {/* "max-w-xl mx-auto" → cap width ~560px, center */}
          <p className="text-base md:text-lg text-text-secondary mt-6 max-w-xl mx-auto">
            Paste a transcript. Get a summary and a clean list of who needs to do what — in seconds.
          </p>

        </div>
      </div>
    </section>
  )
}

// Export Hero so App.jsx can use it.
export default Hero