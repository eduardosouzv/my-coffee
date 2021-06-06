import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

import api from '../config/api';

interface ProviderProps {
  children: ReactNode;
}

interface IProduct {
  id: number;
  title: string;
  type: string;
  description: string;
  price: number;
  imgUrl: string;
}

interface ContextData {
  products: Array<IProduct>;
  setProducts: Dispatch<SetStateAction<Array<IProduct>>>;
  getAllProducts: () => void;
  getHotCoffees: () => void;
  getIceCoffees: () => void;
}

export const ProductsContext = createContext({} as ContextData);

export const ProductsProvider = ({ children }: ProviderProps) => {
  const [products, setProducts] = useState([] as Array<IProduct>);

  const getAllProducts = () => {
    api.get<Array<IProduct>>('/products/all').then(response => {
      setProducts(response.data);
    });
  };

  const getHotCoffees = () => {
    api.get<Array<IProduct>>('/products/hot').then(response => {
      setProducts(response.data);
    });
  };

  const getIceCoffees = () => {
    api.get<Array<IProduct>>('/products/ice').then(response => {
      setProducts(response.data);
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, getAllProducts, getHotCoffees, getIceCoffees }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
