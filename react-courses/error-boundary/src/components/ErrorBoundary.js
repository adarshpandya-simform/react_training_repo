import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

export default class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  constructor(props) {
    super(props);
    this.setState({ hasError: false });
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log("====");
    console.log(errorInfo);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <h3>
          something went wrong.
          <Link to={"/"}>click here to go to home</Link> or wait for 5 seconds
          till we redirect you
          <br />
          {this.state.redirect && <Navigate to={"/"} />}
        </h3>
      );
    }
    return this.props.children;
  }
}
