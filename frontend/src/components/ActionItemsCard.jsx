// ActionItemsCard.jsx
// The card that holds action items.
// Shows a table on desktop, cards on mobile.

import Badge from './Badge'
import ActionTable from './ActionTable'
import ActionCardList from './ActionCardList'

function ActionItemsCard({ items }) {

  // NEW: This function runs when the user clicks "Download .md".
  const handleDownload = () => {
    // 1. Create an empty text string. We will fill it with Markdown.
    let mdContent = '# Meeting Action Items\n\n';

    // 2. Loop through every action item and add it to the text.
    items.forEach((item, index) => {
      // Add the task as a heading (e.g., "## 1. Prepare the report")
      mdContent += `## ${index + 1}. ${item.task}\n`;
      
      // Add the owner
      mdContent += `- **Owner:** ${item.owner}\n`;
      
      // Add the deadline. If it is missing, write "Not specified".
      mdContent += `- **Deadline:** ${item.deadline ? item.deadline : 'Not specified'}\n\n`;
    });

    // 3. Create a "Blob" (a file object in the browser) from our text.
    const blob = new Blob([mdContent], { type: 'text/markdown' });

    // 4. Create a temporary URL for this file.
    const url = URL.createObjectURL(blob);

    // 5. Create a temporary link (like an invisible <a> tag).
    const link = document.createElement('a');
    link.href = url;
    link.download = 'meeting-actions.md'; // The file name on the user's computer

    // 6. Add the link to the page, click it, and remove it immediately.
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 7. Clean up the memory by removing the URL.
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-[900px] mx-auto bg-bg-surface rounded-lg shadow-medium border border-border-default border-l-4 border-l-success p-5 sm:p-6 md:p-8 mb-6">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">

        <div className="flex items-center gap-3">
          <span className="text-xl">✅</span>
          <h2 className="text-lg font-semibold text-text-primary">
            Action Items
          </h2>
          <Badge variant="count">
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </Badge>
        </div>

        {/* Right: download button */}
        {/* NEW: Added onClick={handleDownload} to make the button work */}
        <button 
          onClick={handleDownload}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-border-default bg-bg-surface text-text-primary text-sm font-semibold hover:bg-bg-subtle transition"
        >
          ⬇️ Download .md
        </button>
      </div>

      {/* Body: show table on tablet+, cards on mobile */}
      {items.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-4xl mb-3">📭</div>
          <p className="text-sm text-text-secondary">
            No action items found in this meeting.
          </p>
        </div>
      ) : (
        <>
          <div className="hidden md:block">
            <ActionTable items={items} />
          </div>
          <div className="block md:hidden">
            <ActionCardList items={items} />
          </div>
        </>
      )}

    </div>
  )
}

export default ActionItemsCard