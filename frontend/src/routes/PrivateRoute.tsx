import { useEffect, useState } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { Loading } from '../components/Loading';

interface Props extends RouteProps {
  component: any;
}

export const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setLoading(false);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};
