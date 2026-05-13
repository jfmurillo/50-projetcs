# Section 46 — Day 45: Netflix Mobile Navigation

## Project Overview
A Netflix-inspired sticky navigation bar with expandable dropdown category lists. Clicking a nav item with a caret toggles its category list open; clicking another item closes the previous one. Clicking outside the nav closes all open dropdowns.

## Key Concepts Learned
- **`max-height` CSS animation for dropdowns**: Setting `max-height: 0; overflow: hidden` with a transition to `max-height: 300px` achieves a smooth slide-down — no JavaScript height calculation needed
- **CSS `::after` as a caret icon**: Using `content: '\f0d7'` with `font-family: 'Font Awesome 5 Free'` injects the caret pseudo-element without extra HTML; rotating it 180° on `.open` gives the chevron-up effect
- **Accordion pattern**: Before toggling the clicked item, loop all other items and remove `.open` to enforce only one open at a time
- **`e.target.closest()`**: A clean way to detect outside-clicks — if the event target has no `.nav-link` ancestor, close everything
- **`position: sticky`**: The nav stays at the top during scroll without JavaScript
- **`white-space: nowrap` on dropdowns**: Prevents category names from wrapping inside the floating panel

## Files
| File | Description |
|------|-------------|
| `index.html` | Sticky nav with logo, 5 nav items (3 with `.has-dropdown` and `.dropdown` lists), hero section |
| `style.css` | Dark Netflix palette, max-height slide animation, rotating caret pseudo-element |
| `script.js` | Accordion toggle + outside-click close handler |

## How It Works
1. Items with `.has-dropdown` get a click listener that adds/removes `.open` on both the `<li>` and its child `.dropdown`
2. Before toggling, all *other* items have `.open` stripped (accordion behavior)
3. A document-level click listener closes everything when clicking outside any `.nav-link`

## Source
Course: 50 Projects In 50 Days — HTML, CSS & JavaScript (Section 46)
Instructors: Brad Traversy & Florin Pop
