const questionScreen = document.querySelector('#questionScreen');
const questionNumber = document.querySelector('#questionNumber');
const questionText = document.querySelector('#questionText');
const answers = document.querySelector('#answers');
const questionMessage = document.querySelector('#questionMessage');
const timerBar = document.querySelector('#timerBar');
const timerNumber = document.querySelector('#timerNumber');

const QUESTION_TIME = 20;
const colours = ['red', 'blue', 'yellow', 'green'];

let quizQuestions = [];
let currentIndex = 0;
let timerId;
let finishQuiz;

export function pickRandomQuestions(allQuestions, amount) {
  const pool = [...allQuestions];
  const picked = [];

  for (let i = 0; i < amount && pool.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(randomIndex, 1)[0]);
  }
  return picked;
}

function showQuestion() {
  const current = quizQuestions[currentIndex];

  questionNumber.textContent = `Question ${currentIndex + 1} of ${quizQuestions.length}`;
  questionText.textContent = current.question;
  questionMessage.textContent = '';
  answers.innerHTML = '';

  current.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.classList.add('answer', colours[index]);
    button.textContent = choice;
    answers.append(button);
  });

  runTimer(QUESTION_TIME);
}

function runTimer(timeLeft) {
  timerNumber.textContent = timeLeft;
  timerBar.style.width = `${(timeLeft / QUESTION_TIME) * 100}%`;

  if (timeLeft === 0) {
    timeUp();
    return;
  }
  timerId = setTimeout(() => runTimer(timeLeft - 1), 1000);
}

function timeUp() {
  questionMessage.textContent = "Time's up!";
  const buttons = document.querySelectorAll('.answer');
  buttons.forEach((button) => {
    button.disabled = true;
  });
  setTimeout(nextQuestion, 2000);
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < quizQuestions.length) {
    showQuestion();
  } else {
    questionScreen.classList.add('hidden');
    finishQuiz();
  }
}

export function startQuiz(selectedQuestions, onFinish) {
  quizQuestions = selectedQuestions;
  currentIndex = 0;
  finishQuiz = onFinish;
  questionScreen.classList.remove('hidden');
  showQuestion();
}
