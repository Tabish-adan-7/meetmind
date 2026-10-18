// Badge.jsx
// A small colored pill. Used for owners, deadlines, counts.
// "variant" prop changes the color and style.
// "children" is whatever you put between <Badge> and </Badge>.

function Badge({ variant = 'owner', children }) {

  // Base classes: same for all badges.
  // "inline-flex items-center" → small row, contents centered.
  // "font-semibold" → semi-bold text.
  // "text-xs" → 12px font.
  // "px-3 py-1" → small inner padding.
  // "rounded-full" → pill shape.
  const base = 'inline-flex items-center font-semibold text-xs px-3 py-1 rounded-full'

  // Pick the color classes based on the variant.
  // We use an object to map variant → classes.
  const variants = {

    // Owner badge: light indigo background, dark indigo text.
    owner: 'bg-brand-light text-brand-hover',

    // Deadline badge: light yellow background, dark brown text.
    deadline: 'bg-warning-light text-warning-text',

    // Count badge: light indigo background, dark indigo text.
    count: 'bg-brand-light text-brand-hover',

    // Missing badge: no background, grey italic text.
    missing: 'text-text-muted italic font-normal bg-transparent px-0',
  }

  // Combine base classes with the chosen variant classes.
  const className = `${base} ${variants[variant] || variants.owner}`

  // Render the span with the combined classes.
  return (
    <span className={className}>
      {/* "children" is whatever is inside <Badge>...</Badge> */}
      {children}
    </span>
  )
}

// Export so other components can use it.
export default Badge