import React, { useContext } from 'react';

import { TopBar } from '../../components/TopBar';
import { NavMenu } from '../../components/NavMenu';
import { Item } from '../../components/Item';

import { List } from './styles';

import { ProductsContext } from '../../contexts/ProductsContext';

const Menu: React.FC = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <TopBar hiddenReturnButton />
      <NavMenu />
      <List>
        {products.map(product => {
          return (
            <Item
              id={product.id}
              key={product.id}
              title={product.title}
              description={product.description}
              imgPath={product.imgUrl}
              price={product.price}
            />
          );
        })}
      </List>
    </>
  );
};

export default Menu;
