import { useContext } from 'react';

import { useHistory } from 'react-router-dom';

import close from '../../assets/icons/close.svg';

import {
  Overlay,
  Container,
  Header,
  CloseModal,
  EmptyMessage,
  Footer,
  CheckoutButton,
} from './styles';

import { ItemComponent } from './ItemComponent';

import { CartContext } from '../../contexts/CartContext';
import { AuthContext } from '../../contexts/AuthContext';

export const CartModal: React.FC = () => {
  const history = useHistory();

  const { setIsCartModalOpen, localStorageCart, addOneProduct, balance } =
    useContext(CartContext);
  const { isLogged, setIsLoginModalOpen } = useContext(AuthContext);

  function handleCheckout() {
    if (isLogged) {
      history.push('/checkout');
      return;
    }
    setIsCartModalOpen(false);
    setIsLoginModalOpen(true);
  }

  console.log(localStorageCart);

  return (
    <>
      <Overlay>
        <Container>
          <CloseModal
            onClick={() => {
              setIsCartModalOpen(false);
            }}
          >
            <img src={close} alt="close" />
          </CloseModal>
          <Header>
            <p>Your Cart</p>
          </Header>

          {localStorageCart.length ? (
            localStorageCart.map(item => {
              return (
                <ItemComponent
                  key={item.id}
                  icon={item.imgPath}
                  title={item.title}
                  quantity={item.quantity}
                  addFunction={() => {
                    addOneProduct(item.id, 'add');
                  }}
                  removeFunction={() => {
                    addOneProduct(item.id, 'remove');
                  }}
                />
              );
            })
          ) : (
            <EmptyMessage>empty</EmptyMessage>
          )}

          <Footer>
            <p>Your balance $ {balance}</p>
            <CheckoutButton
              onClick={() => {
                handleCheckout();
              }}
            >
              Checkout
            </CheckoutButton>
          </Footer>
        </Container>
      </Overlay>
    </>
  );
};
