import React from "react";
import { render } from "@testing-library/react";
import Dashboard, { addStrike } from "./Dashboard";
import App from "../App";

test("renders without crashing", () => {
	render(<App />);
});

test("addStrike adds 1 on a click", () => {
	let actual;
	let expected;
	actual = addStrike(0);
	expected = 1;
	expect(actual).toBe(expected);
	expect(actual).not.toBe(3);
});
