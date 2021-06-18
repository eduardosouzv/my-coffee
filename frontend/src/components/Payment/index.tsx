import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Overlay, Button, Price } from './styles';

import paymentMethods from '../../assets/payment-methods.png';

export const Payment = () => {
  const { balance } = useContext(CartContext);

  return (
    <>
      <Overlay>
        <p>Payment methods</p>
        <img src={paymentMethods} alt="zxc" />
        <div>
          <Price>$ {balance}</Price>
          <Button>Buy</Button>
        </div>
      </Overlay>
    </>
  );
};
