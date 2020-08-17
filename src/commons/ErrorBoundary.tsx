import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

function ErrorFallback({ error, componentStack, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
      <pre>{componentStack}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export function CustomErrorBoundary(props: React.PropsWithChildren<unknown>) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      {props.children}
    </ErrorBoundary>
  );
}
