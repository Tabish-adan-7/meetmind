// Header.jsx
// The top bar of our app. Shows the logo and navigation links.

// Header is a React component. It returns JSX (HTML-like code).
function Header() {
  return (
    // Main container. Sticky at top. White background. Bottom border.
    <header className="sticky top-0 z-50 bg-bg-surface border-b border-border-default">

      {/* Container: centers content and adds side padding at each screen size */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10 lg:px-20">

        {/* Flex row: logo on left, nav on right. Height changes on desktop */}
        <div className="flex items-center justify-between h-14 md:h-[72px]">

          {/* LEFT: Logo — clickable link to home */}
          <a href="/" className="flex items-center gap-3">

            {/* Logo icon box: 32x32 with gradient background */}
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-brand to-brand-violet flex items-center justify-center">

              {/* Sparkle emoji inside the box */}
              <span className="text-white text-lg">✨</span>
            </div>

            {/* Brand name text: bigger on desktop, bold, dark color */}
            <span className="text-lg md:text-xl font-bold text-text-primary">
              MeetMind
            </span>
          </a>

          {/* RIGHT: Nav links — hidden on mobile, shown on tablet+ */}
          <nav className="hidden md:flex items-center gap-6">

            {/* Link 1: How it works */}
            <a
              href="#how"
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition"
            >
              How it works
            </a>

            {/* Link 2: GitHub — opens in new tab */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition"
            >
              GitHub
            </a>
          </nav>

        </div>
      </div>
    </header>
  )
}

// Export the component so App.jsx can import and use it.
export default Header