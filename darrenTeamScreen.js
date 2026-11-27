const teamScreen = document.querySelector('#teamScreen');
const redList = document.querySelector('#redList');
const blueList = document.querySelector('#blueList');
const countdown = document.querySelector('#countdown');
const goScreen = document.querySelector('#goScreen');

function showTeam(team, list) {
  list.innerHTML = '';
  team.forEach((player) => {
    const item = document.createElement('li');
    item.textContent = player;
    list.append(item);
  });
}

function showGo(onDone) {
  teamScreen.classList.add('hidden');
  goScreen.classList.remove('hidden');
  setTimeout(() => {
    goScreen.classList.add('hidden');
    onDone();
  }, 1500);
}

function runCountdown(seconds, onDone) {
  if (seconds === 0) {
    showGo(onDone);
    return;
  }
  countdown.textContent = `Game starts in ${seconds}`;
  setTimeout(() => runCountdown(seconds - 1, onDone), 1000);
}

export function showTeams(redTeam, blueTeam, onDone) {
  showTeam(redTeam, redList);
  showTeam(blueTeam, blueList);
  teamScreen.classList.remove('hidden');
  runCountdown(5, onDone);
}
