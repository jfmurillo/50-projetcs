# Section 50: Day 49 - Todo List

## Project Overview
A fully functional CRUD Todo List app with localStorage persistence and clean UI.

## Key Concepts
- localStorage for data persistence across sessions
- Dynamic DOM creation and deletion
- Event delegation for dynamically added elements
- JSON.stringify / JSON.parse for array storage

## Implementation
- addTodo() creates todo items with delete button
- Todos saved to localStorage as JSON array
- loadTodos() restores todos on page load
- deleteTodo() removes by index and updates localStorage
- Enter key event listener on input field

## Files
- index.html - Input field and todo list container
- style.css - Card-style todo item design
- script.js - CRUD operations with localStorage
