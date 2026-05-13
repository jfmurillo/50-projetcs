# Section 40 — Day 39: Password Strength Background

## Project Overview
A login form where the background image starts heavily blurred and becomes progressively clearer as the user types a longer password — giving a visual cue for password strength.

## Key Concepts Learned
- **Dynamic CSS filter**: The `blur()` CSS filter value is set directly via `element.style.filter` in JavaScript based on password length
- **`input` event listener**: Fires on every keystroke, enabling real-time visual feedback
- **Tailwind CSS utility classes**: Used for the form card layout, typography, and button styling
- **Absolute positioning with overflow**: The `.background` div extends 20px outside all edges of the viewport so the blurred edges don't show
- **Template literals**: Clean string interpolation for setting `blur(${value}px)`

## Files
| File | Description |
|------|-------------|
| `index.html` | Login form (email + password) using Tailwind utility classes |
| `style.css` | Background image with initial `blur(20px)` filter |
| `script.js` | Listens to password input and decreases blur as length increases |

## How It Works
1. The `.background` div is absolutely positioned behind the form with `filter: blur(20px)` initially
2. Every `input` event on the password field calculates `blurValue = 20 - length * 2`
3. At 10 characters the background is fully clear (blur = 0px)

## Source
Course: 50 Projects In 50 Days — HTML, CSS & JavaScript (Section 40)
Instructors: Brad Traversy & Florin Pop
