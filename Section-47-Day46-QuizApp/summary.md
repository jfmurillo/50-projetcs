# Section 47 — Day 46: Quiz App

## Project Overview
An 8-question multiple-choice JavaScript quiz. Questions are shown one at a time with four answer buttons (A–D). Clicking an answer highlights it; clicking Submit reveals correct (green) and wrong (red) highlights for 1 second before advancing. A results screen at the end shows the score and a motivational message, with a "Restart Quiz" button.

## Key Concepts Learned
- **Data-driven UI**: Storing all quiz content in a `quizData` array of objects (`question`, `a`, `b`, `c`, `d`, `correct`) and rendering from it — changes to content require zero DOM or logic changes
- **`dataset` attribute for state**: Each `<li>` stores its answer key (`a`/`b`/`c`/`d`) in `data-key`, read via `element.dataset.key` — avoids fragile index-based comparisons
- **Button disable after answer**: Setting `btn.disabled = true` on all answer buttons after Submit prevents double-answering and re-clicking; also changes the cursor via CSS
- **`setTimeout` for feedback delay**: A 1-second pause after showing correct/wrong colors gives the user time to read the result before the next question loads
- **`innerHTML` replacement for results**: Replacing the entire quiz container with a score summary using `innerHTML` is simpler than maintaining a separate hidden panel for a one-time end screen
- **Conditional styling via template literals**: The results message is selected from a helper function based on score thresholds

## Files
| File | Description |
|------|-------------|
| `index.html` | Quiz container with `<h2>` question, four `<li><button>` answers, and a Submit button |
| `style.css` | Purple gradient background, `.correct` green / `.wrong` red answer feedback, disabled state |
| `script.js` | `quizData` array, `loadQuiz()`, click listeners, `submitAnswer()`, `showResults()` |

## How It Works
1. `loadQuiz()` sets the question text, populates answer buttons from `quizData[currentQuiz]`, and stores the answer key in each `<li>`'s `dataset`
2. Clicking an answer stores `selectedAnswer` and highlights the button
3. `submitAnswer()` validates the stored answer, applies correct/wrong classes, increments `score`, then after 1s either calls `loadQuiz()` again or `showResults()`
4. `showResults()` replaces `quiz.innerHTML` with the score and a Restart button

## Source
Course: 50 Projects In 50 Days — HTML, CSS & JavaScript (Section 47)
Instructors: Brad Traversy & Florin Pop
