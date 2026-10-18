// Footer.jsx
// The bottom of the page. Shows copyright text and links.

function Footer() {
  return (
    // Footer element with top border and white background.
    // "mt-16" → margin top (48px). Space above footer.
    // "bg-bg-surface" → white background.
    // "border-t border-border-default" → thin grey border on top.
    <footer className="mt-16 bg-bg-surface border-t border-border-default">

      {/* Container: center content, max 1200px, side padding */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10 lg:px-20 py-8">

        {/* Row: text on left, links on right. */}
        {/* On mobile: stacked. On small+: row. */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Left: copyright text */}
          {/* "text-sm" → 14px */}
          {/* "text-text-secondary" → grey */}
          <p className="text-sm text-text-secondary">
            Built with React❤️ 
          </p>

          {/* Right: links */}
          {/* "flex items-center gap-6" → row with 24px gap */}
          <div className="flex items-center gap-6">

            {/* Link 1: GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-text-secondary hover:text-brand transition"
            >
              GitHub
            </a>

            {/* Link 2: Contact */}
            <a
              href="mailto:hello@meetmind.app"
              className="text-sm text-text-secondary hover:text-brand transition"
            >
              Contact
            </a>

          </div>
        </div>

      </div>
    </footer>
  )
}

// Export so App can use it.
export default Footer