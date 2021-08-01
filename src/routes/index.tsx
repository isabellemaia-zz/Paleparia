  
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Store from '../pages/Produtos'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/store" exact component={Store} />
  </Switch>
);

export default Routes;