# Section 42 — Day 41: Verify Account UI

## Project Overview
A 6-digit account verification code UI. Each digit is entered in its own input box. The cursor automatically advances to the next field on digit entry and moves back on Backspace, mimicking the UX of real OTP/2FA screens.

## Key Concepts Learned
- **`keydown` event vs `input`**: Using `keydown` allows reading `e.key` before the character is written, so the current field can be cleared first before advancing
- **`setTimeout` for focus**: A small 10ms delay is needed before calling `.focus()` on the next input so the browser processes the current keydown first
- **CSS `:valid` pseudo-class**: Input has `min="0" max="9" required`, so `:valid` automatically applies a blue border and shadow once a digit is entered — no JS needed for validation styling
- **`-moz-appearance: textfield`**: Removes the number spinner arrows in Firefox; `-webkit-appearance: none` handles Chrome/Safari
- **`caret-color: transparent`**: Hides the text cursor inside the number inputs for a cleaner look

## Files
| File | Description |
|------|-------------|
| `index.html` | 6 number inputs with min/max constraints |
| `style.css` | Large digit boxes, `:valid` blue highlight, responsive wrapping |
| `script.js` | Auto-advance and auto-retreat focus on keydown |

## How It Works
1. On page load, focus is set to the first input
2. When a digit key (0–9) is pressed: the current input is cleared, then focus moves to `codes[idx + 1]` after 10ms
3. When Backspace is pressed: focus moves back to `codes[idx - 1]` after 10ms
4. CSS `:valid` turns the border blue automatically once a digit satisfies `min/max/required`

## Source
Course: 50 Projects In 50 Days — HTML, CSS & JavaScript (Section 42)
Instructors: Brad Traversy & Florin Pop
