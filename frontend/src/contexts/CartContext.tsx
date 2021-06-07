import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface ContextData {
  isCartModalOpen: boolean;
  setIsCartModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const CartContext = createContext({} as ContextData);

export const CartProvider: React.FC = ({ children }) => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  return (
    <CartContext.Provider
      value={{
        isCartModalOpen,
        setIsCartModalOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
