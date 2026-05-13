# Section 44 — Day 43: Feedback UI Design

## Project Overview
A two-panel customer feedback widget. The first panel shows a 1–10 numeric rating picker and a "Send Review" button. After selecting a number and clicking Send, the first panel hides and a thank-you panel appears, echoing the chosen score.

## Key Concepts Learned
- **Toggling `.active` via loop**: Iterating all `.rating button` elements to remove `.active` before adding it to the clicked one — a common "exclusive selection" pattern
- **`style.display` panel swap**: Hiding the form panel and showing the results panel purely through inline style, rather than classes, as a direct way to flip visibility
- **Storing selection in a variable**: `selectedRating` starts as `'N/A'`; the Send handler uses this as a guard to prevent submitting without a selection
- **Event delegation vs. direct binding**: Each `<li.rating>` gets its own click listener on its child `<button>`, keeping the click target precise
- **Font Awesome icon sizing**: Using `fa-3x` utility class to size the star icon declaratively

## Files
| File | Description |
|------|-------------|
| `index.html` | Two `.rating-container` divs — form panel and thank-you panel — plus Font Awesome CDN |
| `style.css` | Dark background, circular rating buttons, orange accent color, panel layout |
| `script.js` | Active-class toggle for rating buttons, Send click swaps panels and displays score |

## How It Works
1. Ten `<li.rating>` elements each hold a `<button>` with a number 1–10
2. Clicking a button removes `.active` from all, then adds `.active` to the clicked one and saves its text to `selectedRating`
3. Clicking "Send Review" hides the first container, shows `#panel`, and sets `#number-display` text to `"X / 10"`

## Source
Course: 50 Projects In 50 Days — HTML, CSS & JavaScript (Section 44)
Instructors: Brad Traversy & Florin Pop
