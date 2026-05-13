# Section 51: Day 50 - Insect Catch Game

## Project Overview
A fun click-speed game where insects appear at random positions on screen and you must catch them before they move away.

## Key Concepts
- Random positioning with Math.random()
- setInterval for periodic insect movement
- Event-driven score tracking
- CSS animations for insect appearance/disappearance
- Game state management (start, active, end)

## Implementation
- startGame() initializes score, timer, and insect movement interval
- createInsect() places emoji insect at random x/y coordinates
- Click handler increments score and repositions insect
- 30-second countdown timer ends the game
- High score tracked in localStorage

## Files
- index.html - Game board with score/timer display
- style.css - Positioning and animation styles
- script.js - Game logic, intervals, and event handlers
