# Section 52: Bonus Day 1 - Simple Timer

## Project Overview
A clean countdown and stopwatch timer with start, pause, and reset controls.

## Key Concepts
- setInterval and clearInterval for timer control
- Time formatting (HH:MM:SS) with padStart
- UI state management (running vs paused)
- DOM updates on every tick

## Implementation
- startTimer() sets interval and updates display every second
- pauseTimer() calls clearInterval to stop without resetting
- resetTimer() clears interval and resets all counters to zero
- formatTime() converts seconds to HH:MM:SS display string
- Button states toggle between Start/Pause based on timer state

## Files
- index.html - Timer display and control buttons
- style.css - Large digit display and button styling
- script.js - Timer logic with interval management
