const nameForm = document.querySelector('#nameForm');
const nameInput = document.querySelector('#nameInput');
const message = document.querySelector('#message');
const nameList = document.querySelector('#nameList');
const playerCount = document.querySelector('#playerCount');
const startButton = document.querySelector('#startButton');
const startScreen = document.querySelector('#startScreen');

const players = [];

function showPlayers() {
  nameList.innerHTML = '';
  for (const player of players) {
    const item = document.createElement('li');
    item.textContent = player;
    nameList.append(item);
  }
  playerCount.textContent = players.length;
}

function addPlayer(event) {
  event.preventDefault();
  const name = nameInput.value.trim();

  if (name === '') {
    message.textContent = 'Please type a name first.';
  } else if (players.includes(name)) {
    message.textContent = `${name} is already in the game.`;
  } else {
    players.push(name);
    message.textContent = '';
    showPlayers();
  }

  nameInput.value = '';
  nameInput.focus();
}

function removePlayer(event) {
  if (event.target.tagName === 'LI') {
    const index = players.indexOf(event.target.textContent);
    players.splice(index, 1);
    showPlayers();
  }
}

export function setUpStartScreen(onStart) {
  nameForm.addEventListener('submit', addPlayer);
  nameList.addEventListener('click', removePlayer);

  startButton.addEventListener('click', () => {
    if (players.length < 2) {
      message.textContent = 'You need at least 2 players to start.';
      return;
    }
    startScreen.classList.add('hidden');
    onStart([...players]);
  });
}
