import React, { useContext } from 'react';

import { Title, Header, Logo } from './styles';

import icon from '../../assets/coffee.svg';
import { AuthContext } from '../../contexts/AuthContext';

export const TopBar: React.FC = () => {
  const { setIsLoginModalOpen, logout, isLogged } = useContext(AuthContext);
  return (
    <Header>
      <Logo>
        <img src={icon} alt="icon" />
        <Title>My Coffee</Title>
      </Logo>

      {isLogged ? (
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoginModalOpen(true);
          }}
        >
          Login
        </button>
      )}
    </Header>
  );
};
