import React from 'react';
import { Link } from 'react-router-dom';

import { TopBar } from '../../components/TopBar';

import gif from '../../assets/coffee.gif';

import { Text, Button, Aligned } from './styles';

const Home: React.FC = () => {
  return (
    <div>
      <TopBar hiddenCartButton hiddenLoginButton hiddenReturnButton />
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
