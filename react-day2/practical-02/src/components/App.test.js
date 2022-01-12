/* eslint-disable no-undef */
import "@testing-library/jest-dom/";
import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

// initial test
test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText(/sample svg/i);
	expect(linkElement).toBeInTheDocument();
});
