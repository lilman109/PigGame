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
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let winnerDecided = false;
currentScorePlayer1El.textContent = currentScorePlayer1;
currentScorePlayer2El.textContent = currentScorePlayer2;
scorePlayer1El.textContent = scorePlayer1;
scorePlayer2El.textContent = scorePlayer2;
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

const resetCurrentScore = () => {
	if (player1Active) {
		currentScorePlayer1 = 0;
		currentScorePlayer1El.textContent = currentScorePlayer1;
	} else {
		currentScorePlayer2 = 0;
		currentScorePlayer2El.textContent = currentScorePlayer2;
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
		resetCurrentScore();
		switchActivePlayer();
	}
};

const checkForWinner = () => {
	if (player1Active) {
		if (scorePlayer1 >= 100) {
			console.log('winner');
			player1.classList.add('player--winner');
			winnerDecided = true;
		}
	} else {
		if (scorePlayer2 >= 100) {
			console.log('winner');
			player2.classList.add('player--winner');
			winnerDecided = true;
		}
	}

	if (winnerDecided) {
		buttonHoldEl.disabled = true;
		buttonRollEl.disabled = true;
	}
};

const onHoldButtonClicked = () => {
	addToScore();
	checkForWinner();
	if (!winnerDecided) {
		switchActivePlayer();
	}
	diceEl.classList.add('hidden');
};

const addToScore = () => {
	if (player1Active) {
		scorePlayer1 += currentScorePlayer1;
		scorePlayer1El.textContent = scorePlayer1;
		currentScorePlayer1 = 0;
		currentScorePlayer1El.textContent = currentScorePlayer1;
	} else {
		scorePlayer2 += currentScorePlayer2;
		scorePlayer2El.textContent = scorePlayer2;
		currentScorePlayer2 = 0;
		currentScorePlayer2El.textContent = currentScorePlayer2;
	}
};

const resetGame = () => {
	player1Active = true;
	currentScorePlayer1 = 0;
	currentScorePlayer2 = 0;
	scorePlayer1 = 0;
	scorePlayer2 = 0;
	currentScorePlayer1El.textContent = currentScorePlayer1;
	currentScorePlayer2El.textContent = currentScorePlayer2;
	scorePlayer1El.textContent = scorePlayer1;
	scorePlayer2El.textContent = scorePlayer2;
	winnerDecided = false;
	diceEl.classList.add('hidden');
	buttonHoldEl.disabled = false;
	buttonRollEl.disabled = false;
	swithToPlayer1();
};

buttonRollEl.addEventListener('click', onButtonRollClicked);
buttonHoldEl.addEventListener('click', onHoldButtonClicked);
buttonNewEl.addEventListener('click', resetGame);
