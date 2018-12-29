import * as React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import PublicSide from '../components/side/public_side';
import NotFound from '../components/NotFound/NotFound';

// pages
import TableTest from '../pages/table/table_test';

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/PublicSide" component={ PublicSide } />
      <Route exact={true} path="/TableTest" component={ TableTest } />
      <Route exact={true} path="/404" component={ NotFound } />
      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);


export default BasicRoute;
