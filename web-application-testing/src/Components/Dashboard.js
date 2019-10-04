import React from "react";

export const addStrike = currentStrikes => {
	if (currentStrikes >= 2) {
		return 0;
	} else {
		return currentStrikes + 1;
	}
};

export const addBall = currentBalls => {
	if (currentBalls >= 3) {
		return 0;
	} else {
		return currentBalls + 1;
	}
};

export const addFoul = currentStrikes => {
	if (currentStrikes >= 2) {
		return currentStrikes;
	} else {
		return currentStrikes + 1;
	}
};

export const addHit = currentValue => {
	return currentValue;
};

export default function Dashboard(props) {
	return (
		<div>
			<button onClick={() => props.setStrike(addStrike(props.strike))}>
				Strike
			</button>
			<button onClick={() => props.setBall(addBall(props.ball))}>Ball</button>
			<button onClick={() => props.setStrike(addFoul(props.strike))}>
				Foul
			</button>
			<button
				onClick={() => {
					props.setStrike(addHit(0));
					props.setBall(addHit(0));
				}}
			>
				Hit
			</button>
		</div>
	);
}
