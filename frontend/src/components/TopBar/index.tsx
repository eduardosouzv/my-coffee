import React, { useContext } from 'react';

import { Title, Header, Logo, Cart } from './styles';

import icon from '../../assets/coffee.svg';

import cartIcon from '../../assets/icons/cart.svg';
import { AuthContext } from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartContext';

export const TopBar: React.FC = () => {
  const { setIsLoginModalOpen, logout, isLogged } = useContext(AuthContext);
  const { setIsCartModalOpen } = useContext(CartContext);
  return (
    <Header>
      <Logo>
        <img src={icon} alt="icon" />
        <Title>My Coffee</Title>
      </Logo>

      <div>
        <Cart
          onClick={() => {
            setIsCartModalOpen(true);
          }}
        >
          <img src={cartIcon} alt="" />
        </Cart>
        {isLogged ? (
          <>
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
