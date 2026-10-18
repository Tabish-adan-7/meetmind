// ActionCardList.jsx
// Shows action items as cards. Used on mobile only (below 768px).

// Import Badge for owner and deadline pills.
import Badge from './Badge'

function ActionCardList({ items }) {
  return (
    // Vertical list with 12px gap between cards.
    // "space-y-3" → adds 12px margin-top to each child after the first.
    <div className="space-y-3">

      {/* Loop through items */}
      {items.map((item) => (
        // One card per item.
        // "bg-bg-subtle" → light grey background.
        // "rounded-md" → 12px corners.
        // "p-4" → 16px padding inside.
        <div
          key={item.id}
          className="bg-bg-subtle rounded-md p-4"
        >

          {/* Owner badge on top */}
          <div className="mb-2">
            <Badge variant="owner">{item.owner}</Badge>
          </div>

          {/* Task text below */}
          {/* "text-sm" → 14px */}
          {/* "text-text-primary" → dark */}
          {/* "mb-3" → 12px below */}
          <p className="text-sm text-text-primary mb-3">
            {item.task}
          </p>

          {/* Deadline badge at bottom */}
          <div>
            {item.deadline ? (
              <Badge variant="deadline">📅 {item.deadline}</Badge>
            ) : (
              <Badge variant="missing">No deadline</Badge>
            )}
          </div>

        </div>
      ))}
    </div>
  )
}

export default ActionCardList