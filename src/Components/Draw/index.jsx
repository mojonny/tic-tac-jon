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
		<div className="draw-layout">
			<div className="animation">
				{View}
				<h1>{message}</h1>
			</div>
		</div>
	);
}
