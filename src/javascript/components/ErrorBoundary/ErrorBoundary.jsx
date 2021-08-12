import React from 'react';
import ErrorPage from "../ErrorPage";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined, // With error.type - Render different types of error depending on the error type (e.g: 401 auth error)
      errorInfo: undefined,
    };
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    //can be used to log the error into our audit tables or integration systems like graylog or airbrake
    console.log(error, errorInfo)
    this.setState({ error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (<ErrorPage type="500" title="500 ERROR" />);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
