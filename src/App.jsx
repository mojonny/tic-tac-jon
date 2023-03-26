import { useState, useEffect } from 'react';
import Welcome from './Components/Welcome/index';
import GameBoard from './Components/GameBoard/index';
import './App.css';

function App() {
	//Show lottie when loading and moving to success
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 8000);
	}, []);

	return (
		<div>
			<GameBoard />
			{isLoading ? <Welcome /> : null}
		</div>
	);
}

export default App;
