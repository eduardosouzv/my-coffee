import React from 'react';

import { Title, Header } from './styles';

import icon from '../../assets/coffee.svg';

export const TopBar: React.FC = () => {
  return (
    <Header>
      <img src={icon} alt="icon" />
      <Title>My Coffee</Title>
    </Header>
  );
};
