import React from "react";
import { currentStrikes, currentBalls } from "./Dashboard";

export default function Display() {
	return (
		<div>
			<h1>Current Batter</h1>
			<p>Ball</p>
			<p>{currentBalls}</p>
			<p>Strikes</p>
			<p>{currentStrikes}</p>
		</div>
	);
}
