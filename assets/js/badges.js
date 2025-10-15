
// Add badges for items updated within 14 days
const MS_IN_DAY = 24*60*60*1000;
const WINDOW_DAYS = 14;

function withinWindow(dateStr){
  const t = new Date(dateStr).getTime();
  if (isNaN(t)) return false;
  const now = Date.now();
  return (now - t) <= WINDOW_DAYS * MS_IN_DAY;
}

function addBadges(container){
  if (!container) return;
  container.querySelectorAll('[data-updated]').forEach(el => {
    const dateStr = el.getAttribute('data-updated');
    if (withinWindow(dateStr)){
      const badge = document.createElement('span');
      badge.className = 'badge new';
      badge.textContent = 'NEW';
      el.querySelector('.title')?.appendChild(badge);

      const badge2 = document.createElement('span');
      badge2.className = 'badge latest';
      badge2.textContent = 'Latest';
      el.querySelector('.title')?.appendChild(badge2);
    }
  });
}

// Expose helper for specific pages
window.PredecessorBadges = { addBadges };
