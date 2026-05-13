# Section 32 — Day 31: Password Generator

**Course:** 50 Projects In 50 Days — HTML, CSS & JavaScript  
**Date completed:** 2026-05-12  

## What This Project Does

A password generator where the user sets length (4–20) and toggles checkboxes for uppercase, lowercase, numbers, and symbols. Clicking "Generate Password" produces a shuffled random password. A clipboard button copies it.

## Key Concepts Learned

| Concept | Detail |
|---------|--------|
| `String.fromCharCode(n)` | Converts Unicode code point to character |
| `Math.floor(Math.random() * N) + offset` | Random integer in a character range |
| `.filter(item => ...)` | Keeps only enabled character types |
| `.sort(() => Math.random() - 0.5)` | Randomly shuffles an array |
| `document.execCommand('copy')` | Legacy clipboard copy via textarea selection |

## Source
Course: 50 Projects In 50 Days — HTML, CSS & JavaScript (Section 32)
Instructors: Brad Traversy & Florin Pop
