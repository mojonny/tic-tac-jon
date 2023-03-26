import React from 'react';
import { useLottie } from 'lottie-react';
import winnerAnimation from './winnerAnimation.json';

import './index.css';

export default function Winner({ message }) {
	const options = {
		animationData: winnerAnimation,
		loop: true,
	};

	const { View } = useLottie(options);
	return (
		<div className="winner-layout fadeoutWin">
			<div className="animation">
				<h1>{message}</h1>
				{View}
			</div>
		</div>
	);
}
