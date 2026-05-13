# Section 39 — Day 38: Mobile Tab Navigation

## Project Overview
A mobile phone mockup with bottom tab navigation. Clicking each tab swaps the full-screen background image and highlights the active tab — simulating native mobile app navigation.

## Key Concepts Learned
- **CSS positioning**: `position: absolute` used for both the content images and the nav bar inside a `position: relative` phone container
- **Opacity transitions**: Content visibility controlled by toggling an `opacity` CSS class (`show`) with a smooth `transition`
- **NodeList iteration with index**: `forEach((item, idx))` used to map each nav `<li>` to the corresponding content image by index
- **Active state toggling**: Helper functions `hideAllContents()` and `hideAllItems()` cleanly remove all active/show classes before setting new ones
- **Font Awesome icons**: CDN-loaded icon font for the nav tab icons

## Files
| File | Description |
|------|-------------|
| `index.html` | Phone mockup with 4 images and a 4-tab nav |
| `style.css` | Phone container, image stacking, nav bar, active color |
| `script.js` | Click listeners that switch active content and tab |

## How It Works
1. All 4 images are stacked absolutely inside `.phone`, with opacity 0 except the first (which has `.show`)
2. Each `<li>` click removes all `.show`/`.active` classes, then adds them to the clicked item and its corresponding image (matched by index)

## Source
Course: 50 Projects In 50 Days — HTML, CSS & JavaScript (Section 39)
Instructors: Brad Traversy & Florin Pop
