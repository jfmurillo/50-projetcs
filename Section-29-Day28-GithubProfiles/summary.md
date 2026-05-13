# Section 29 — Day 28: GitHub Profiles

**Course:** 50 Projects In 50 Days — HTML, CSS & JavaScript  
**Date completed:** 2026-05-11  

## What This Project Does

A GitHub profile search app. The user types a GitHub username and presses Enter. The app calls the GitHub REST API to fetch the profile data and repos. The card shows avatar, name, bio, follower/following/repo counts, and up to 5 clickable repo links.

## Key Concepts Learned

| Concept | Detail |
|---------|--------|
| `axios.get(url)` | HTTP GET that resolves to `{ data, status, headers, … }` |
| `async/await` | Cleaner async flow vs raw Promises |
| `try/catch` with Axios | `err.response.status` gives the HTTP status code |
| `?sort=created` query param | GitHub API sorts repos by creation date descending |
| `.slice(0, 5)` | Take only the first 5 items from an array |
| `user.name \|\| user.login` | Fallback: display login if display-name is null |

## Source
Course: 50 Projects In 50 Days — HTML, CSS & JavaScript (Section 29)
Instructors: Brad Traversy & Florin Pop
