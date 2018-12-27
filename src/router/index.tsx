import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PublicSide from '../components/side/public_side';

// pages
import TableTest from '../pages/table/table_test';

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/PublicSide" component={ PublicSide } />
      <Route exact={true} path="/TableTest" component={ TableTest } />
    </Switch>
  </BrowserRouter>
);


export default BasicRoute;
