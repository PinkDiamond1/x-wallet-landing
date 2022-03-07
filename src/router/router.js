import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import MainContainer from '../containers/MainContainer';
import { ROUTE_INDEX } from './routes';

export const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={ROUTE_INDEX} component={MainContainer} />

          <Redirect to={ROUTE_INDEX} />
        </Switch>
      </Layout>
    </Router>
  );
};
