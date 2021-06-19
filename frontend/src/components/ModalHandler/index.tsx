import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartContext';

import { CartModal } from '../CartModal';
import { LoginModal } from '../LoginModal';
import { RegisterModal } from '../RegisterModal';

export const ModalHandler = () => {
  const { isLoginModalOpen, isRegisterModalOpen } = useContext(AuthContext);
  const { isCartModalOpen } = useContext(CartContext);
  return (
    <>
      {isLoginModalOpen ? <LoginModal /> : null}
      {isRegisterModalOpen ? <RegisterModal /> : null}
      {isCartModalOpen ? <CartModal /> : null}
    </>
  );
};
