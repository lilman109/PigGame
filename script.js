'use strict';

// Selecting elements
const scorePlayer1El = document.getElementById('score--0');
const scorePlayer2El = document.getElementById('score--1');
const currentScorePlayer1 = document.getElementById('current--0');
const currentScorePlayer2 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const button = document.querySelector('.btn--hold');

// Initialize
let diceNumber;
let currentScore = 0;
scorePlayer1El.textContent = 0;
scorePlayer2El.textContent = 0;
dice.classList.add('hidden');

const rollDice = () => {
	diceNumber = Math.trunc(Math.random() * 6) + 1;
	dice.classList.remove('hidden');
	dice.src = `dice-${diceNumber}.png`;
	if (diceNumber !== 1) addScore(currentScorePlayer1);
};

const switchActivePlayer = () => {};

const addScore = (playerCurrentScore) => {
	currentScore += diceNumber;
	playerCurrentScore.textContent = currentScore;
	console.log(`score is ${playerCurrentScore.textContent}`);
};

const onButtonRollClicked = () => {
	rollDice();
};

buttonRoll.addEventListener('click', onButtonRollClicked);
