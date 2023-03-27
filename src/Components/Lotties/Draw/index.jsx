import React from 'react';
import { useLottie } from 'lottie-react';
import drawAnimation from './drawAnimation.json';

import './index.css';

export default function Draw({ message }) {
	const options = {
		animationData: drawAnimation,
		loop: true,
	};

	const { View } = useLottie(options);
	return (
		<div className="draw-layout fadeoutDraw">
			<div className="animation">
				<h1>{message}</h1>
				{View}
			</div>
		</div>
	);
}
