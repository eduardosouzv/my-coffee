import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface ContextData {
  isCartModalOpen: boolean;
  setIsCartModalOpen: Dispatch<SetStateAction<boolean>>;
  localStorageCart: ICart[];
  balance: string;
  addOneProduct: (id: number, type: 'add' | 'remove') => void;
  addToCart: ({ id, title, description, imgPath, price }: ICart) => void;
}

interface ICart {
  id: number;
  title: string;
  description: string;
  imgPath: string;
  price: number;
  quantity: number;
}

export const CartContext = createContext({} as ContextData);

export const CartProvider: React.FC = ({ children }) => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const [localStorageCart, setLocalStorageCart] = useState<ICart[]>(() => {
    const cartJSON = localStorage.getItem('cart');

    if (cartJSON) {
      return JSON.parse(cartJSON);
    }

    return [];
  });

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

  function addToCart({ id, title, description, imgPath, price }: ICart): void {
    const cartJSON: string | null = localStorage.getItem('cart');

    if (cartJSON) {
      let cart: ICart[] = JSON.parse(cartJSON);

      const indexOfItemInCart = cart.findIndex(item => item.id === id);

      if (indexOfItemInCart !== -1) {
        cart[indexOfItemInCart] = {
          id,
          title,
          description,
          imgPath,
          price,
          quantity: cart[indexOfItemInCart].quantity + 1,
        };
        localStorage.setItem('cart', JSON.stringify(cart));
        setLocalStorageCart(cart);
        return;
      }

      cart.push({ id, title, description, imgPath, price, quantity: 1 });

      setLocalStorageCart(cart);
      localStorage.setItem('cart', JSON.stringify(cart));
      return;
    }

    localStorage.setItem(
      'cart',
      JSON.stringify([{ id, title, description, imgPath, price, quantity: 1 }]),
    );
  }

  return (
    <CartContext.Provider
      value={{
        isCartModalOpen,
        localStorageCart,
        balance,
        setIsCartModalOpen,
        addOneProduct,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
