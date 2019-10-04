import React, { useState } from "react";
import "./App.css";
import Display from "./Components/Display";
import Dashboard from "./Components/Dashboard";

function App() {
	const [strike, setStrike] = useState(0);
	const [ball, setBall] = useState(0);

	return (
		<div className="App">
			<Display strike={strike} ball={ball} />
			<Dashboard
				strike={strike}
				ball={ball}
				setStrike={setStrike}
				setBall={setBall}
			/>
		</div>
	);
}

export default App;
