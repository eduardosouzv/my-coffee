import React, { useContext } from 'react';
import { useHistory } from 'react-router';

import icon from '../../assets/coffee.svg';
import cartIcon from '../../assets/icons/cart.svg';

import { Title, Header, Logo, OpenCartButton } from './styles';

import { AuthContext } from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartContext';

interface Props {
  hiddenCartButton?: boolean;
  hiddenLoginButton?: boolean;
  hiddenReturnButton?: boolean;
}

export const TopBar: React.FC<Props> = ({
  hiddenCartButton,
  hiddenLoginButton,
  hiddenReturnButton,
}) => {
  const history = useHistory();

  const { setIsLoginModalOpen, logout, isLogged } = useContext(AuthContext);
  const { setIsCartModalOpen } = useContext(CartContext);

  function handleReturn() {
    if (isLogged) {
      history.push('/menu');
      return;
    }
  }

  return (
    <Header>
      <Logo>
        <img src={icon} alt="icon" />
        <Title>My Coffee</Title>
      </Logo>

      <div>
        {!hiddenCartButton && (
          <OpenCartButton
            onClick={() => {
              setIsCartModalOpen(true);
            }}
          >
            <img src={cartIcon} alt="" />
          </OpenCartButton>
        )}
        {!hiddenLoginButton &&
          (isLogged ? (
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
          ))}

        {!hiddenReturnButton && (
          <button
            onClick={() => {
              handleReturn();
            }}
          >
            Return
          </button>
        )}
      </div>
    </Header>
  );
};
