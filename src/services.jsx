export function CheckWinner(nextArray, numberOfTurns, setDisabled, setMessage) {
	//Get the values of each cell
	const id0 = nextArray[0].value;
	const id1 = nextArray[1].value;
	const id2 = nextArray[2].value;
	const id3 = nextArray[3].value;
	const id4 = nextArray[4].value;
	const id5 = nextArray[5].value;
	const id6 = nextArray[6].value;
	const id7 = nextArray[7].value;
	const id8 = nextArray[8].value;

	const draw = numberOfTurns;

	//Check array for winning patterns
	if (
		(id0 === 'X' && id1 === 'X' && id2 === 'X') ||
		(id3 === 'X' && id4 === 'X' && id5 === 'X') ||
		(id6 === 'X' && id7 === 'X' && id8 === 'X') ||
		(id0 === 'X' && id3 === 'X' && id6 === 'X') ||
		(id1 === 'X' && id4 === 'X' && id7 === 'X') ||
		(id2 === 'X' && id5 === 'X' && id8 === 'X') ||
		(id0 === 'X' && id4 === 'X' && id8 === 'X') ||
		(id2 === 'X' && id4 === 'X' && id6 === 'X')
	) {
		setDisabled(true);
		return setMessage('Player X is the Winner!');
	} else if (
		(id0 === 'O' && id1 === 'O' && id2 === 'O') ||
		(id3 === 'O' && id4 === 'O' && id5 === 'O') ||
		(id6 === 'O' && id7 === 'O' && id8 === 'O') ||
		(id0 === 'O' && id3 === 'O' && id6 === 'O') ||
		(id1 === 'O' && id4 === 'O' && id7 === 'O') ||
		(id2 === 'O' && id5 === 'O' && id8 === 'O') ||
		(id0 === 'O' && id4 === 'O' && id8 === 'O') ||
		(id2 === 'O' && id4 === 'O' && id6 === 'O')
	) {
		setDisabled(true);
		return setMessage('Player O is the Winner!');
	} else if (draw === 8) {
		setDisabled(true);
		return setMessage('Draw! Great shame has fallen on both your families');
	}
}
