import React, { useContext } from 'react';

import { Title, Header, Logo, Cart } from './styles';

import icon from '../../assets/coffee.svg';

import cartIcon from '../../assets/icons/cart.svg';
import { AuthContext } from '../../contexts/AuthContext';

export const TopBar: React.FC = () => {
  const { setIsLoginModalOpen, logout, isLogged } = useContext(AuthContext);
  return (
    <Header>
      <Logo>
        <img src={icon} alt="icon" />
        <Title>My Coffee</Title>
      </Logo>

      <div>
        {isLogged ? (
          <>
            <Cart>
              <img src={cartIcon} alt="" />
            </Cart>
            <button
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              setIsLoginModalOpen(true);
            }}
          >
            Login
          </button>
        )}
      </div>
    </Header>
  );
};
