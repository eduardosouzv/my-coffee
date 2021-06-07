import { Overlay, Container, Header, CloseModal } from './styles';

import close from '../../assets/icons/close.svg';

import { ItemComponent } from './ItemComponent';

import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

export const CartModal: React.FC = () => {
  const { setIsCartModalOpen } = useContext(CartContext);

  return (
    <>
      <Overlay>
        <Container>
          <CloseModal
            onClick={() => {
              setIsCartModalOpen(false);
            }}
          >
            <img src={close} alt="" />
          </CloseModal>
          <Header>
            <p>Your Cart</p>
            <button>Checkout</button>
          </Header>

          <ItemComponent
            icon="http://localhost:3333/products/photo?id=1"
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            quantity="3"
          />
          <ItemComponent
            icon="http://localhost:3333/products/photo?id=1"
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            quantity="3"
          />
          <ItemComponent
            icon="http://localhost:3333/products/photo?id=1"
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            quantity="3"
          />
        </Container>
      </Overlay>
    </>
  );
};
