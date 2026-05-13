# Section 41 — Day 40: 3D Background Boxes

## Project Overview
A 4×4 grid of boxes that each display a slice of a GIF image. Clicking "Magic 🎩" toggles the container between a compact state (boxes assembled into a seamless image) and an expanded state (boxes rotate and spread apart, revealing the 3D sides).

## Key Concepts Learned
- **CSS pseudo-elements for 3D**: `::before` and `::after` create the bottom and right "faces" of each box using `skewY(45deg)` and `skewX(45deg)` transforms
- **`background-position` technique**: Each box shows a different slice of a single background image by offsetting with `-j * 125px` (x) and `-i * 125px` (y)
- **CSS `rotateZ` transition**: The `.big` class triggers a `rotateZ(360deg)` on all boxes, creating the spinning open/close animation
- **Nested loops for grid generation**: A `for i / for j` double loop generates all 16 boxes with the correct background offset
- **`classList.toggle()`**: Single line to swap the expanded/compact state on button click

## Files
| File | Description |
|------|-------------|
| `index.html` | Button + empty box container |
| `style.css` | Box grid, 3D pseudo-element faces, transition animations |
| `script.js` | Generates 16 boxes with offsets; toggles `.big` on button click |

## How It Works
1. `createBoxes()` generates a 4×4 grid; each box's `backgroundPosition` is offset to show its slice of the 500×500 GIF
2. `classList.toggle('big')` switches between the assembled view (500×500, no rotation) and the exploded view (600×600, `rotateZ(360deg)`)
3. CSS `::before`/`::after` pseudo-elements simulate the top-left face visible in the 3D exploded view

## Source
Course: 50 Projects In 50 Days — HTML, CSS & JavaScript (Section 41)
Instructors: Brad Traversy & Florin Pop
