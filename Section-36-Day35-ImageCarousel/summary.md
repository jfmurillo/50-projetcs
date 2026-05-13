# Section 36 — Day 35: Image Carousel

**Course:** 50 Projects In 50 Days — HTML, CSS & JavaScript  
**Date completed:** 2026-05-12  

## What This Project Does

Four-image carousel with prev/next arrows, clickable dots, and auto-advance every 4 seconds. Slides fade in via CSS animation.

## Key Concepts Learned

| Concept | Detail |
|---------|--------|
| Single `.active` class | Simple pattern for showing one item at a time |
| Dynamic dot creation | `createElement` + `addEventListener` in a loop |
| Closure in loop | `() => goTo(i)` captures `i` correctly in `forEach` |
| Circular index | Ternary to wrap index at boundaries |
| `setInterval` auto-advance | Periodically advances without user input |

## Source
Course: 50 Projects In 50 Days — HTML, CSS & JavaScript (Section 36)
Instructors: Brad Traversy & Florin Pop
