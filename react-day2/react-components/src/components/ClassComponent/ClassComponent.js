import React, { Component } from "react";

export default class ClassComponent extends Component {
	state = {
		counter: 0,
	};

	increseCount() {
		this.setState({ counter: this.state.counter + 1 });
	}

	decreaseCount() {
		this.setState({ counter: this.state.counter - 1 });
	}

	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.increseCount();
					}}
				>
					+
				</button>
				<span>{this.state.counter}</span>
				<button
					onClick={() => {
						this.decreaseCount();
					}}
				>
					-
				</button>
			</div>
		);
	}
}
