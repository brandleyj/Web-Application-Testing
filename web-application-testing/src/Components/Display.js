import React from "react";

export default function Display(props) {
	return (
		<div>
			<h1>Current Batter</h1>
			<p>Ball: </p>
			<p>{props.ball}</p>
			<p>Strikes: </p>
			<p>{props.strike}</p>
		</div>
	);
}
