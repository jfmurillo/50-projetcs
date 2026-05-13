# Section 30 — Day 29: Double Click Heart

**Course:** 50 Projects In 50 Days — HTML, CSS & JavaScript  
**Date completed:** 2026-05-12  

## What This Project Does

Every time the user double-clicks anywhere on the page, a colourful heart (♥) pops up at the cursor position and floats upward while fading out, then is removed from the DOM. Hearts vary randomly in colour and size on each click.

## Key Concepts Learned

| Concept | Detail |
|---------|--------|
| `dblclick` event | Fires on a double-click |
| `e.clientX / e.clientY` | Viewport-relative cursor coordinates |
| `position: fixed` | Positions element relative to the viewport |
| `@keyframes` + `forwards` | Keeps element at final state after animation ends |
| `pointer-events: none` | Prevents spawned hearts from intercepting further clicks |
| `setTimeout` + `.remove()` | Cleans up transient DOM nodes after animation |

## Source
Course: 50 Projects In 50 Days — HTML, CSS & JavaScript (Section 30)
Instructors: Brad Traversy & Florin Pop
