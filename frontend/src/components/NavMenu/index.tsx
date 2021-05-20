import { useContext, useEffect } from 'react';

import { List, Menu } from './styles';

import api from '../../config/api';

import { ProductsContext } from '../../contexts/ProductsContext';

export const NavMenu = () => {
  const { getAllProducts, getHotCoffees, getIceCoffees, setProducts } =
    useContext(ProductsContext);

  useEffect(() => {
    api.get('/products/all').then(response => {
      setProducts(response.data);
    });
  }, [setProducts]);

  return (
    <Menu>
      <List>
        <li
          onClick={() => {
            getAllProducts();
          }}
        >
          All Coffees
        </li>
        <li
          onClick={() => {
            getHotCoffees();
          }}
        >
          Hot Coffee
        </li>
        <li
          onClick={() => {
            getIceCoffees();
          }}
        >
          Ice Coffee
        </li>
      </List>
    </Menu>
  );
};
