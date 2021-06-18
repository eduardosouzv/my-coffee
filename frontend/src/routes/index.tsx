import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Checkout from '../pages/Checkout';

import { PrivateRoute } from './PrivateRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/menu" component={Menu} />
      <PrivateRoute path="/checkout" component={Checkout} />
    </Switch>
  );
};

export default Routes;
