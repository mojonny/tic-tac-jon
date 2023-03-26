import { useState } from 'react';
import { CheckWinner } from '../CheckWinner';
import Winner from '../Winner/index';

import './index.css';

function GameBoard() {
	let initialValues = [
		{ value: '', disabled: false },
		{ value: '', disabled: false },
		{ value: '', disabled: false },
		{ value: '', disabled: false },
		{ value: '', disabled: false },
		{ value: '', disabled: false },
		{ value: '', disabled: false },
		{ value: '', disabled: false },
		{ value: '', disabled: false },
	];

	//Set the initial values for the game board
	const [tictacArray, setTickTackArray] = useState(initialValues);
	console.log('Array:', tictacArray);

	//This call is used to toggle between players
	const [playerTurn, setPlayerTurn] = useState(true);

	//Using state here to toggle between which player's turn in shown on the screen
	const [showPlayer, setShowPlayer] = useState('Player X');

	//Show message when someone wins
	const [message, setMessage] = useState('');

	//Stop game on winner
	const [disabled, setDisabled] = useState(false);

	//Count number of turns in case of a draw
	const [numberOfTurns, setNumberOfTurns] = useState(0);

	const [isWinner, setIsWinner] = useState(false);

	//Show who's turn it is
	function togglePlayer() {
		setPlayerTurn((value) => !value);
		if (playerTurn === true) {
			setShowPlayer('Player O');
		} else {
			setShowPlayer('Player X');
		}
	}

	//This function updates the game board and indicates who's turn it is
	function updateArray(index, playerTurn) {
		let turn = playerTurn;

		//This function uses the index of the button clicked and replaces its value with X or O
		//Then, it disables the button to prevent changing the value again
		const nextArray = tictacArray.map((val, i) => {
			if (i === index && turn == true) {
				return { value: 'X', disabled: true };
			} else if (i === index && turn == false) {
				return { value: 'O', disabled: true };
			} else {
				return val;
			}
		});
		setTickTackArray(nextArray);
		CheckWinner(nextArray, numberOfTurns, setDisabled, setMessage, setIsWinner);
		togglePlayer();
		setNumberOfTurns(numberOfTurns + 1);
	}

	//Layout each button with unique ids
	const mapGrid = tictacArray.map((subButton, i) => (
		<button
			className="cell"
			id={i}
			key={i}
			onClick={() => updateArray(i, playerTurn)}
			disabled={subButton.disabled || disabled}
		>
			{subButton.value}
		</button>
	));

	return (
		<div className="App">
			<h1>Tic-Tac-Jon</h1>
			<div className="turn-container">
				<h4>Who's turn is it?</h4>
				<div className="player-turn">{showPlayer}</div>
			</div>
			<div className="game-container">{mapGrid}</div>
			<div className="result-container">
				<h4>{message}</h4>
				<button
					className="reset-button"
					onClick={() => window.location.reload()}
				>
					Reset
				</button>
			</div>
			{isWinner ? <Winner message={message} /> : null}
		</div>
	);
}

export default GameBoard;