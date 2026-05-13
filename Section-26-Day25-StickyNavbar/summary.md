# Section 26 — Day 25: Sticky Navbar

**Course:** 50 Projects In 50 Days — HTML, CSS & JavaScript  
**Date completed:** 2026-05-11  

## What This Project Does

A full-page scrollable website where the `<nav>` starts transparent over a hero image. Once the user scrolls past `nav.offsetHeight + 150` pixels, JavaScript adds an `.active` class that switches the navbar to a solid white background with a drop shadow and reduced padding.

## Key Concepts Learned

| Concept | Detail |
|---------|--------|
| `position: fixed` | Removes element from normal flow; locks to viewport |
| `transition: all 0.3s ease-out` | Smooth animation on ALL changing properties |
| `offsetHeight` | The rendered height of the nav element in px |
| `window.scrollY` | Current vertical scroll position of the page |
| `+ 150` buffer | Delays trigger slightly below the viewport fold |
| Class toggling | CSS defines visual states; JS only switches the class |

## Source
Course: 50 Projects In 50 Days — HTML, CSS & JavaScript (Section 26)
Instructors: Brad Traversy & Florin Pop
