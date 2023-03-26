import React from 'react';
import { useLottie } from 'lottie-react';
import successAnimation from './successAnimation.json';

import './index.css';

export default function Welcome() {
	const options = {
		animationData: successAnimation,
		loop: true,
	};

	const { View } = useLottie(options);
	return (
		<div className="success-layout">
			<div className="animation">{View}</div>
		</div>
	);
}
