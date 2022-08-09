'use strict';
//selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

let score, currentscore, activeplayer, playing;
const init = function () {
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;

  score = [0, 0];
  currentscore = 0;
  activeplayer = 0;
  playing = true;

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
  diceEL.classList.add('hidden');
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player1EL.classList.remove('player--active');
  player0EL.classList.add('player--active');
  diceEL.classList.add('hidden');
};
init();
const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  currentscore = 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

// Math.random;
//rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1.generating random dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    //3.check for roll 1, if true, switch player
    if (dice !== 1) {
      currentscore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else {
      switchplayer();
      // switch to next player
      // currentscore += dice;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score into global score
    // score[activeplayer] += currentscore;
    // document.getElementById(`score--${activeplayer}`).textcontent =
    //   score[activeplayer];
    score[activeplayer] += currentscore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activeplayer}`).textContent =
      score[activeplayer];
    //check if player score greater 100
    if (score[activeplayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      switchplayer();
    }
  }
  // if yes, player win
  // if not, change player
});

// reset the game
btnNew.addEventListener('click', init);
