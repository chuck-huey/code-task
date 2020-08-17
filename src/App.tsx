import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';

import { Layout } from './components/Layout';

const Homepage = lazy(() => import('./pages/Homepage'));

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Layout>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Layout>
      </Switch>
    </Suspense>
  );
}

export default App;
