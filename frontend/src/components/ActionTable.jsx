// ActionTable.jsx
// Shows action items in a table (3 columns: Owner, Task, Deadline).
// Used on tablet and desktop screens (768px and up).

// Import Badge for owner and deadline pills.
import Badge from './Badge'

function ActionTable({ items }) {
  return (
    // Wrapper with horizontal scroll for small tablets.
    <div className="overflow-x-auto">

      {/* The table itself */}
      {/* "w-full" → fills the card width */}
      <table className="w-full">

        {/* Table header row */}
        <thead>
          <tr className="bg-bg-subtle">
            {/* Owner column header */}
            {/* "text-left" → align text to left */}
            {/* "text-xs" → 12px font */}
            {/* "font-semibold" → semi-bold */}
            {/* "text-text-secondary" → grey */}
            {/* "uppercase" → ALL CAPS */}
            {/* "tracking-wider" → letter spacing */}
            {/* "px-4 py-3" → padding inside cell */}
            <th className="text-left text-xs font-semibold text-text-secondary uppercase tracking-wider px-4 py-3">
              Owner
            </th>

            {/* Task column header */}
            <th className="text-left text-xs font-semibold text-text-secondary uppercase tracking-wider px-4 py-3">
              Task
            </th>

            {/* Deadline column header */}
            <th className="text-left text-xs font-semibold text-text-secondary uppercase tracking-wider px-4 py-3">
              Deadline
            </th>
          </tr>
        </thead>

        {/* Table body: one row per action item */}
        <tbody>
          {/* "items.map" → loop through the array */}
          {/* Each "item" has: id, owner, task, deadline */}
          {items.map((item) => (
            // Each row
            // "border-b border-border-default" → thin grey line below
            // "hover:bg-bg-subtle" → light grey on hover
            // "transition" → smooth color change
            <tr
              key={item.id}
              className="border-b border-border-default hover:bg-bg-subtle transition"
            >
              {/* Owner cell: show badge */}
              <td className="px-4 py-4 align-top">
                <Badge variant="owner">{item.owner}</Badge>
              </td>

              {/* Task cell: show task text */}
              {/* "text-sm" → 14px */}
              {/* "text-text-primary" → dark */}
              <td className="px-4 py-4 align-top text-sm text-text-primary">
                {item.task}
              </td>

              {/* Deadline cell: show badge OR "Not specified" */}
              <td className="px-4 py-4 align-top">
                {/* If item has a deadline, show badge. */}
                {/* If not, show missing badge. */}
                {item.deadline ? (
                  <Badge variant="deadline">{item.deadline}</Badge>
                ) : (
                  <Badge variant="missing">Not specified</Badge>
                )}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default ActionTable