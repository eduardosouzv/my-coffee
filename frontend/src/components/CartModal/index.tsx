import { useContext, useState } from 'react';

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

interface ICart {
  id: number;
  title: string;
  description: string;
  imgPath: string;
  price: number;
  quantity: number;
}

export const CartModal: React.FC = () => {
  const { setIsCartModalOpen } = useContext(CartContext);
  const { isLogged, setIsLoginModalOpen } = useContext(AuthContext);

  const [balance, setBalance] = useState<string>(() => {
    const cartJSON = localStorage.getItem('cart');

    if (cartJSON) {
      const cart: ICart[] = JSON.parse(cartJSON);

      let currentBalance = 0;

      cart.map(item => (currentBalance += item.quantity * item.price));
      return currentBalance.toFixed(2);
    }

    return '0.00';
  });
  const [localStorageCart, setLocalStorageCart] = useState<ICart[]>(() => {
    const cartJSON = localStorage.getItem('cart');

    if (cartJSON) {
      return JSON.parse(cartJSON);
    }

    return [];
  });

  function refreshBalance(cart: ICart[]) {
    let currentBalance = 0;

    cart.map(item => (currentBalance += item.quantity * item.price));

    setBalance(currentBalance.toFixed(2));
  }

  function addOneProduct(id: number, type: 'add' | 'remove'): void {
    const index = localStorageCart.findIndex(storageItem => storageItem.id === id);
    let newCart = localStorageCart;

    if (type === 'add') {
      let newItem = {
        ...localStorageCart[index],
        quantity: localStorageCart[index].quantity + 1,
      };
      newCart[index] = newItem;
    } else {
      if (localStorageCart[index].quantity === 1) {
        newCart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify([...newCart]));
        refreshBalance([...newCart]);
        setLocalStorageCart([...newCart]);
        return;
      }

      let newItem = {
        ...localStorageCart[index],
        quantity: localStorageCart[index].quantity - 1,
      };
      newCart[index] = newItem;
    }

    localStorage.setItem('cart', JSON.stringify([...newCart]));
    refreshBalance([...newCart]);
    setLocalStorageCart([...newCart]);
  }

  function handleCheckout() {
    if (isLogged) {
      // go to checkout
      return;
    }
    setIsCartModalOpen(false);
    setIsLoginModalOpen(true);
  }

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
