import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };
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

  render() {
    if (this.state.hasError) {
      return <h1>something went wrong</h1>;
    }
    return this.props.children;
  }
}
