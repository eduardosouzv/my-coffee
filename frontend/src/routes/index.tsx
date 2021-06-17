import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Menu from '../pages/Menu';

import { PrivateRoute } from './PrivateRoute';

const checkout = () => <h1>checkout</h1>;

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/menu" component={Menu} />
      <PrivateRoute path="/teste" component={checkout} />
    </Switch>
  );
};

export default Routes;
