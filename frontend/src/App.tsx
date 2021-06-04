import React, { useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const { verifyJWT } = useContext(AuthContext);

  useEffect(() => {
    verifyJWT();
  }, [verifyJWT]);

  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
