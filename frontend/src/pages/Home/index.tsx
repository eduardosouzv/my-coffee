import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import { TopBar } from '../../components/TopBar';
import { LoginModal } from '../../components/LoginModal';
import { RegisterModal } from '../../components/RegisterModal';

import gif from '../../assets/coffee.gif';

import { Text, Button, Aligned } from './styles';

const Home: React.FC = () => {
  return (
    <div>
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
