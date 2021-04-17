'use strict';

// Selecting elements
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const scorePlayer1El = document.getElementById('score--0');
const scorePlayer2El = document.getElementById('score--1');
const currentScorePlayer1El = document.getElementById('current--0');
const currentScorePlayer2El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const buttonNewEl = document.querySelector('.btn--new');
const buttonRollEl = document.querySelector('.btn--roll');
const buttonEl = document.querySelector('.btn--hold');

// Initialize
let diceNumber;
let player1Active = true;
let currentScorePlayer1 = 0;
let currentScorePlayer2 = 0;
currentScorePlayer1El.textContent = currentScorePlayer1;
currentScorePlayer2El.textContent = currentScorePlayer2;
scorePlayer1El.textContent = 0;
scorePlayer2El.textContent = 0;
diceEl.classList.add('hidden');

const rollDice = () => {
	diceNumber = Math.trunc(Math.random() * 6) + 1;
	diceEl.classList.remove('hidden');
	diceEl.src = `dice-${diceNumber}.png`;
};

const switchActivePlayer = () => {
	if (player1Active) {
		player1.classList.remove('player--active');
		player2.classList.add('player--active');
		player1Active = false;
	} else {
		player2.classList.add('player--active');
		player1.classList.remove('player--active');
		player1Active = true;
	}
};

const addScore = () => {
	if (player1Active) {
		currentScorePlayer1 += diceNumber;
		currentScorePlayer1El.textContent = currentScorePlayer1;
		scorePlayer1El.textContent = diceNumber;
	} else {
		currentScorePlayer2 += diceNumber;
		currentScorePlayer2El.textContent = currentScorePlayer2;
		scorePlayer2El.textContent = diceNumber;
	}
};

const onButtonRollClicked = () => {
	rollDice();
	if (diceNumber !== 1) {
		addScore();
	} else {
		switchActivePlayer();
	}
};

buttonRollEl.addEventListener('click', onButtonRollClicked);
