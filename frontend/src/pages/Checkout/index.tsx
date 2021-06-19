import React, { useContext } from 'react';

import { TopBar } from '../../components/TopBar';
import { CartItems } from '../../components/CartItems';
import { Payment } from '../../components/Payment';

import { CartBody, CartTitle } from './styles';
import { CartContext } from '../../contexts/CartContext';

const Checkout: React.FC = () => {
  const { localStorageCart } = useContext(CartContext);

  return (
    <>
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
