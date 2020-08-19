import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';

import { Layout } from './components/Layout';

const Homepage = lazy(() => import('./pages/Homepage'));
const TestCases = lazy(() => import('./pages/TestCases'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingScreen />}>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/cases">
            <TestCases />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
