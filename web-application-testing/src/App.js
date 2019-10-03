import React from "react";
import "./App.css";
import Display from "./Components/Display";
import Dashboard from "./Components/Dashboard";

function App() {
	return (
		<div className="App">
			<h1>At Bat</h1>
			<Display />
			<Dashboard />
		</div>
	);
}

export default App;
