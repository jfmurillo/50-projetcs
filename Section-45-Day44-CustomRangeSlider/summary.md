# Section 45 — Day 44: Custom Range Slider

## Project Overview
A fully custom-styled `<input type="range">` slider. A floating label bubble tracks the thumb as it slides, always centering above the thumb and displaying the current value. Both webkit and Mozilla vendor-prefix selectors are used so the design is consistent across Chrome, Firefox, and Edge.

## Key Concepts Learned
- **`-webkit-appearance: none` / `appearance: none`**: Required to remove the browser's default slider skin before custom styles can be applied
- **Pseudo-elements `::webkit-slider-runnable-track` and `::webkit-slider-thumb`**: The only way to style the track and thumb cross-browser; Mozilla uses `::moz-range-track` / `::moz-range-thumb`
- **Floating label math**: `left = ((value - min) / (max - min)) * 100%` maps the slider value to a CSS percentage. A small correction term `(8 - percent * 0.16)px` compensates for the thumb width so the label doesn't overshoot at the edges
- **CSS `::after` arrow**: A zero-size box with `border-top-color` creates the downward-pointing triangle beneath the label bubble — no extra markup needed
- **`input` event vs `change`**: `input` fires continuously as the thumb moves; `change` only fires on mouse-up, so `input` is correct for live updates

## Files
| File | Description |
|------|-------------|
| `index.html` | Container with `<input type="range">` and `.range-value` label sibling |
| `style.css` | Completely reskinned track/thumb with gradient, floating label with CSS arrow |
| `script.js` | `setLabelPosition()` calculates percent and sets `left` on the label on every `input` event |

## How It Works
1. Page loads with `value="50"` and `setLabelPosition()` called immediately to pre-position the label
2. On each slider `input` event, the current value is mapped to a percentage of the slider width
3. The label's `left` CSS property is set to that percentage (with a small offset) and its text content updated

## Source
Course: 50 Projects In 50 Days — HTML, CSS & JavaScript (Section 45)
Instructors: Brad Traversy & Florin Pop
