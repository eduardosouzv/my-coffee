import React, { useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ModalHandler } from './components/ModalHandler';

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
      <ModalHandler />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
