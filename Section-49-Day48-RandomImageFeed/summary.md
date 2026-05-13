# Section 49: Day 48 - Random Image Feed

## Project Overview
A dynamic image feed that fetches and displays random images in a responsive CSS grid layout.

## Key Concepts
- Fetch API to retrieve random images from picsum.photos
- CSS Grid for responsive image layout
- Dynamic DOM creation with createElement and appendChild
- Async/Await for cleaner asynchronous code

## Implementation
- getPhotos() async function calls picsum.photos API
- Creates image elements dynamically and appends to grid
- Refresh button fetches a new set of random images
- CSS grid auto-fill with minmax for responsive columns

## Files
- index.html - Grid container structure
- style.css - CSS Grid layout and image styling
- script.js - Fetch API integration and DOM manipulation
