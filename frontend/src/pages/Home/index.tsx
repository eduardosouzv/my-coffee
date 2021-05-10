import React from 'react';

import { TopBar } from '../../components/TopBar';

import gif from '../../assets/coffee.gif';

import { Text, Button, Aligned } from './styles';

const Home: React.FC = () => {
  return (
    <div>
      <TopBar />
      <Text>From coffee lovers to coffee lovers...</Text>
      <Aligned>
        <Button href="#">I want a coffee</Button>
        <img src={gif} alt="loading..." />
      </Aligned>
    </div>
  );
};

export default Home;
