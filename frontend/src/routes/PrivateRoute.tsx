import { useEffect, useState } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

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
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: '/' }} />;
        }
      }}
    />
  );
};
