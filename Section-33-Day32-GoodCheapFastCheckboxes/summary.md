# Section 33 — Day 32: Good, Cheap, Fast Checkboxes

**Course:** 50 Projects In 50 Days — HTML, CSS & JavaScript  
**Date completed:** 2026-05-12  

## What This Project Does

Three stylized checkboxes enforcing the "pick any two" rule. When two are checked, the third is visually disabled. Unchecking one re-enables all.

## Key Concepts Learned

| Concept | Detail |
|---------|--------|
| `display: none` on `<input>` | Hides native checkbox while keeping it functional |
| `:checked + label` CSS | Targets the label immediately after a checked input |
| `@keyframes` bounce | Scale animation on the check-ball |
| `pointer-events: none` | Prevents interaction without removing the element |
| Spread + filter pattern | `[...nodeList].filter(cb => cb.checked)` |

## Source
Course: 50 Projects In 50 Days — HTML, CSS & JavaScript (Section 33)
Instructors: Brad Traversy & Florin Pop
