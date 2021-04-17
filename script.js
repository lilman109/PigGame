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
const buttonHoldEl = document.querySelector('.btn--hold');

// Initialize
let diceNumber;
let player1Active = true;
let currentScorePlayer1 = 0;
let currentScorePlayer2 = 0;
currentScorePlayer1El.textContent = currentScorePlayer1;
currentScorePlayer2El.textContent = currentScorePlayer2;
scorePlayer1El.textContent = currentScorePlayer1;
scorePlayer2El.textContent = currentScorePlayer2;
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
		player2.classList.remove('player--active');
		player1.classList.add('player--active');
		player1Active = true;
	}
};

const addCurrentScore = () => {
	if (player1Active) {
		currentScorePlayer1 += diceNumber;
		currentScorePlayer1El.textContent = currentScorePlayer1;
	} else {
		currentScorePlayer2 += diceNumber;
		currentScorePlayer2El.textContent = currentScorePlayer2;
	}
};

const resetScore = () => {
	if (player1Active) {
		currentScorePlayer1 = 0;
		currentScorePlayer1El.textContent = currentScorePlayer1;
		scorePlayer1El.textContent = currentScorePlayer1;
	} else {
		currentScorePlayer2 = 0;
		currentScorePlayer2El.textContent = currentScorePlayer2;
		scorePlayer2El.textContent = currentScorePlayer2;
	}
};

const swithToPlayer1 = () => {
	player2.classList.remove('player--active');
	player1.classList.add('player--active');
	player1Active = true;
};

const onButtonRollClicked = () => {
	rollDice();
	if (diceNumber !== 1) {
		addCurrentScore();
	} else {
		resetScore();
		switchActivePlayer();
	}
};

const onHoldButtonClicked = () => {
	addToScore();
	switchActivePlayer();
};

const addToScore = () => {
	if (player1Active) {
		scorePlayer1El.textContent = currentScorePlayer1;
		currentScorePlayer1 = 0;
		currentScorePlayer1El.textContent = currentScorePlayer1;
	} else {
		scorePlayer2El.textContent = currentScorePlayer2;
		currentScorePlayer2 = 0;
		currentScorePlayer2El.textContent = currentScorePlayer2;
	}
};

const resetGame = () => {
	currentScorePlayer1 = 0;
	currentScorePlayer2 = 0;
	currentScorePlayer1El.textContent = currentScorePlayer1;
	currentScorePlayer2El.textContent = currentScorePlayer2;
	scorePlayer1El.textContent = currentScorePlayer1;
	scorePlayer2El.textContent = currentScorePlayer2;
	diceEl.classList.add('hidden');
	swithToPlayer1();
};

buttonRollEl.addEventListener('click', onButtonRollClicked);
buttonHoldEl.addEventListener('click', onHoldButtonClicked);
buttonNewEl.addEventListener('click', resetGame);
