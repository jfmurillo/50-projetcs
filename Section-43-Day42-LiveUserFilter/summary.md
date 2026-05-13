# Section 43 — Day 42: Live User Filter

## Project Overview
Fetches 50 random users from the `randomuser.me` public API and displays them in a scrollable list. A search input at the top performs instant, case-insensitive filtering by full name **or** city/country, toggling each list item's `hide` class without re-rendering the DOM.

## Key Concepts Learned
- **`async/await` with `fetch`**: Destructuring `{ results }` directly from the parsed JSON response
- **Mapping API data to HTML**: Building list item markup with template literals, including `<img>` from `user.picture.large`
- **Live filtering pattern**: Storing the raw data array (`data`) after render, then on each `input` event re-querying `.querySelectorAll('li')` and matching the index to the original data array for comparison
- **`classList.toggle` vs `.add/.remove`**: Using `.add('hide')` / `.remove('hide')` for explicit show/hide semantics
- **CSS `::placeholder` with rgba on dark backgrounds**: Tinting the placeholder text on a colored header input

## Files
| File | Description |
|------|-------------|
| `index.html` | Container with header (title + search input) and empty `<ul id="result">` |
| `style.css` | Blue header, circular avatars, `max-height` scroll on list, `.hide { display:none }` |
| `script.js` | Fetches users, renders list, attaches `input` listener for live filter |

## How It Works
1. On load, `showUsers()` calls the API, saves response to `data[]`, and injects `<li>` elements
2. Each `<li>` has an `<img>` thumbnail and a `.user-info` div with name + location
3. On every keystroke, the `filter` input listener compares the input value against `fullName` and `location` strings (both lowercased) and adds/removes the `.hide` class

## Source
Course: 50 Projects In 50 Days — HTML, CSS & JavaScript (Section 43)
Instructors: Brad Traversy & Florin Pop
