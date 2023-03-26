import React from 'react';
import { useLottie } from 'lottie-react';
import welcomeAnimation from './welcomeAnimation.json';

import './index.css';

export default function Welcome() {
	const options = {
		animationData: welcomeAnimation,
		loop: true,
	};

	const { View } = useLottie(options);
	return (
		<div className="welcome-layout fadeout">
			<div className="animation">{View}</div>
		</div>
	);
}
