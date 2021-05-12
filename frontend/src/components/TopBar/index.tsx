import React from 'react';

import { Link } from 'react-router-dom';

import { Title, Header, Logo } from './styles';

import icon from '../../assets/coffee.svg';

export const TopBar: React.FC = () => {
  return (
    <Header>
      <Logo>
        <img src={icon} alt="icon" />
        <Title>My Coffee</Title>
      </Logo>

      <span>
        <Link to="/">Login</Link>
      </span>
    </Header>
  );
};
