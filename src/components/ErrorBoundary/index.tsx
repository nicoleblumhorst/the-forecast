import React, { Component, ErrorInfo } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

interface Props extends WithTranslation {
  error?: Error;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<WithTranslation> {
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
    const t = this.props.t;
    if (this.state.hasError) {
      return <h1>{t('error.something-went-wrong')}</h1>;
    }

    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary)
