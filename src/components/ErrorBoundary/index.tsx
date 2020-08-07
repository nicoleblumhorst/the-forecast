import React, { ErrorInfo } from 'react';

interface Props {
  error: Error;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component {
  public state: State;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('shit broke', error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
