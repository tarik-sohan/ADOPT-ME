import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromErro() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("error bondary component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error in the listing{" "}
          <Link to="/">Click here to go back to homepage</Link>{" "}
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
