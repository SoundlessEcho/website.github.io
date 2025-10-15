
# Predecessor Website

A professional, coding‑themed website with a dark green/black palette, collapsible navigation, Matrix‑style background, and auto badges for items updated within **14 days**.

## Structure
```
/assets/css/style.css
/assets/js/nav.js
/assets/js/matrix.js
/assets/js/badges.js
/assets/img/logo.svg
/data/showcase.json
/data/downloads.json
/data/store.json
index.html
showcase.html
downloads.html
store.html
about.html
```

## How to edit content
- **Logo:** replace `assets/img/logo.svg`
- **Showcase videos:** edit `data/showcase.json` (fields: `title`, `description`, `youtubeId`, `updated` in `YYYY-MM-DD`)
- **Downloads:** edit `data/downloads.json` (fields: `name`, `desc`, `file`, `updated` in `YYYY-MM-DD`)
- **Store:** edit `data/store.json` (fields: `name`, `price`, `desc`, `link`)
- Any item with `updated` within the last 14 days is auto-tagged with **NEW** and **Latest**

## Active nav link
The current page is auto-highlighted in the nav by matching the page filename.

## Mobile menu
The hamburger toggles the collapsible nav on small screens.

## Deploy
- For GitHub Pages, put all files at the repo root (e.g., `predecessor.github.io`) and push.
- For any static host (Netlify/Vercel), just drag and drop the folder or point the host to the root.

## Discord links
Update `data/store.json` to your real invite: `https://discord.gg/yourinvite`
