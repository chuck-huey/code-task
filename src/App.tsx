import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';

const Homepage = lazy(() => import('./pages/Homepage'));

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
