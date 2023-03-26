import { useState, useEffect } from 'react';
import Welcome from './Components/Lotties/Welcome/index';
import GameBoard from './Components/GameBoard/index';

function App() {
	//Show lottie when loading and moving to success
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);

	return (
		<>
			<GameBoard />
			{isLoading ? <Welcome /> : null}
		</>
	);
}

export default App;
