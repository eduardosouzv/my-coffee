import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import { TopBar } from '../../components/TopBar';
import { LoginModal } from '../../components/LoginModal';
import { RegisterModal } from '../../components/RegisterModal';
import { CartItems } from '../../components/CartItems';
import { Payment } from '../../components/Payment';

import { CartBody, CartTitle } from './styles';
import { CartContext } from '../../contexts/CartContext';

const Checkout: React.FC = () => {
  const { isLoginModalOpen, isRegisterModalOpen } = useContext(AuthContext);
  const { localStorageCart } = useContext(CartContext);

  return (
    <>
      {isLoginModalOpen ? <LoginModal /> : null}
      {isRegisterModalOpen ? <RegisterModal /> : null}
      <TopBar />
      {localStorageCart.length ? (
        <>
          <CartTitle>Your cart</CartTitle>
          <CartBody>
            <CartItems />
            <Payment />
          </CartBody>
        </>
      ) : (
        <CartTitle>Your cart is empty</CartTitle>
      )}
    </>
  );
};

export default Checkout;
