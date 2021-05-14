import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { TopBar } from '../../components/TopBar';
import { LoginModal } from '../../components/LoginModal';

import gif from '../../assets/coffee.gif';

import { Text, Button, Aligned } from './styles';

import { AuthContext } from '../../contexts/AuthContext';

const Home: React.FC = () => {
  const { isLoginModalOpen } = useContext(AuthContext);

  return (
    <div>
      {isLoginModalOpen ? <LoginModal /> : null}
      <TopBar />
      <Text>From coffee lovers to coffee lovers...</Text>
      <Aligned>
        <Button>
          <Link to="/menu">I want a coffee</Link>
        </Button>
        <img src={gif} alt="loading..." />
      </Aligned>
    </div>
  );
};

export default Home;
