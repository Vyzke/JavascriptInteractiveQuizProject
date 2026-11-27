import { groupDivision } from './markGroupDivision.js';
import { questions } from './jefferyQuestions.js';
import { setUpStartScreen } from './darrenStartScreen.js';
import { showTeams } from './darrenTeamScreen.js';
import { pickRandomQuestions, startQuiz } from './darrenQuestionScreen.js';

const QUESTIONS_PER_GAME = 8;

const endScreen = document.querySelector('#endScreen');

function showEnd() {
  endScreen.classList.remove('hidden');
}

function startGame(players) {
  const teams = groupDivision(players);
  const gameQuestions = pickRandomQuestions(questions, QUESTIONS_PER_GAME);

  showTeams(teams[0], teams[1], () => {
    startQuiz(gameQuestions, showEnd);
  });
}

setUpStartScreen(startGame);
