import { useContext, useState } from 'react';

import close from '../../assets/icons/close.svg';

import { Overlay, Container, Header, CloseModal, EmptyMessage } from './styles';

import { ItemComponent } from './ItemComponent';

import { CartContext } from '../../contexts/CartContext';

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

  const [localStorageCart, setLocalStorageCart] = useState<ICart[]>(() => {
    const cartJSON = localStorage.getItem('cart');

    if (cartJSON) {
      return JSON.parse(cartJSON);
    }

    return [];
  });

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
    setLocalStorageCart([...newCart]);
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
            <button>Checkout</button>
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
        </Container>
      </Overlay>
    </>
  );
};
