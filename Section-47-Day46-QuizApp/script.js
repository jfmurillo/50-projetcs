const quizData = [
  {
    question: 'Which method is used to add an element at the END of an array in JavaScript?',
    a: 'push()',
    b: 'pop()',
    c: 'shift()',
    d: 'unshift()',
    correct: 'a',
  },
  {
    question: 'What does the "typeof" operator return for null?',
    a: '"null"',
    b: '"undefined"',
    c: '"object"',
    d: '"boolean"',
    correct: 'c',
  },
  {
    question: 'Which of the following is NOT a JavaScript data type?',
    a: 'String',
    b: 'Boolean',
    c: 'Float',
    d: 'Symbol',
    correct: 'c',
  },
  {
    question: 'What keyword is used to declare a constant in JavaScript?',
    a: 'let',
    b: 'var',
    c: 'const',
    d: 'fixed',
    correct: 'c',
  },
  {
    question: 'What does "=== " mean in JavaScript?',
    a: 'Assignment',
    b: 'Loose equality (type coercion)',
    c: 'Strict equality (type and value)',
    d: 'Not equal',
    correct: 'c',
  },
  {
    question: 'Which built-in method creates a new array with all elements that pass a test?',
    a: 'map()',
    b: 'filter()',
    c: 'reduce()',
    d: 'forEach()',
    correct: 'b',
  },
  {
    question: 'What is a closure in JavaScript?',
    a: 'A way to close the browser window',
    b: 'A function that has access to its outer scope even after the outer function returns',
    c: 'A CSS property',
    d: 'A method to close an event listener',
    correct: 'b',
  },
  {
    question: 'Which statement is used to handle exceptions in JavaScript?',
    a: 'try...catch',
    b: 'if...else',
    c: 'switch...case',
    d: 'do...while',
    correct: 'a',
  },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.btn')
const questionEl = document.getElementById('question')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0
let selectedAnswer = null

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = `Question ${currentQuiz + 1} / ${quizData.length}: ${currentQuizData.question}`

  answerEls.forEach((btn) => {
    const key = btn.closest('li').dataset.key || btn.parentElement.dataset.key
  })

  // Map answers to buttons
  const lis = document.querySelectorAll('#answer-buttons li')
  const keys = ['a', 'b', 'c', 'd']
  keys.forEach((key, idx) => {
    lis[idx].dataset.key = key
    const btn = lis[idx].querySelector('.btn')
    btn.textContent = currentQuizData[key]
    btn.classList.remove('correct', 'wrong')
    btn.disabled = false
  })
}

function deselectAnswers() {
  selectedAnswer = null
  document.querySelectorAll('#answer-buttons .btn').forEach((btn) => {
    btn.classList.remove('correct', 'wrong')
    btn.disabled = false
  })
}

function getSelected() {
  return selectedAnswer
}

// Attach click listeners to answer buttons
document.querySelectorAll('#answer-buttons .btn').forEach((btn) => {
  btn.addEventListener('click', function () {
    // Clear previous selection visual
    document.querySelectorAll('#answer-buttons .btn').forEach((b) => {
      b.classList.remove('correct', 'wrong')
    })

    const key = this.closest('li').dataset.key
    selectedAnswer = key
    this.classList.add('correct') // highlight selected (will be validated on submit)
  })
})

function submitAnswer() {
  const answer = getSelected()

  if (answer) {
    const currentQuizData = quizData[currentQuiz]
    const lis = document.querySelectorAll('#answer-buttons li')
    const keys = ['a', 'b', 'c', 'd']

    // Show correct/wrong for all buttons
    keys.forEach((key, idx) => {
      const btn = lis[idx].querySelector('.btn')
      btn.disabled = true
      if (key === currentQuizData.correct) {
        btn.classList.remove('correct', 'wrong')
        btn.classList.add('correct')
      } else if (key === answer && key !== currentQuizData.correct) {
        btn.classList.remove('correct')
        btn.classList.add('wrong')
      } else {
        btn.classList.remove('correct', 'wrong')
      }
    })

    if (answer === currentQuizData.correct) {
      score++
    }

    currentQuiz++

    setTimeout(() => {
      if (currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        showResults()
      }
    }, 1000)
  }
}

function showResults() {
  quiz.innerHTML = `
    <div class="quiz-header" style="text-align:center;">
      <h2>You answered <span style="color:#6d5dfc">${score} / ${quizData.length}</span> correctly!</h2>
      <p style="margin-top:10px;color:#666;">${getResultMessage(score, quizData.length)}</p>
    </div>
    <button id="submit" class="btn" style="margin-top:25px;background:linear-gradient(135deg,#6d5dfc,#c779d0);color:#fff;font-weight:600;text-align:center;" onclick="location.reload()">
      Restart Quiz
    </button>
  `
}

function getResultMessage(score, total) {
  if (score === total) return '🎉 Perfect score! You really know your JavaScript!'
  if (score >= total * 0.8) return '💪 Great job! Almost perfect.'
  if (score >= total * 0.5) return '📚 Not bad! Keep studying.'
  return '🔄 Keep practicing — you\'ll get there!'
}
