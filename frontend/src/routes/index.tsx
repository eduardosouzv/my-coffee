import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Menu from '../pages/Menu';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/menu" component={Menu} />
    </Switch>
  );
};

export default Routes;
