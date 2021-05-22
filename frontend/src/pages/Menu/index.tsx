import React, { useContext } from 'react';

import { TopBar } from '../../components/TopBar';
import { NavMenu } from '../../components/NavMenu';
import { Item } from '../../components/Item';
import { RegisterModal } from '../../components/RegisterModal';
import { LoginModal } from '../../components/LoginModal';

import { List } from './styles';

import { AuthContext } from '../../contexts/AuthContext';
import { ProductsContext } from '../../contexts/ProductsContext';

const Menu: React.FC = () => {
  const { isLoginModalOpen, isRegisterModalOpen } = useContext(AuthContext);
  const { products } = useContext(ProductsContext);

  return (
    <div>
      {isLoginModalOpen ? <LoginModal /> : null}
      {isRegisterModalOpen ? <RegisterModal /> : null}
      <TopBar />
      <NavMenu />
      <List>
        {products.map(product => {
          return (
            <Item
              key={product.id}
              title={product.title}
              description={product.description}
              imgPath={product.imgUrl}
              price={product.price}
            />
          );
        })}
      </List>
    </div>
  );
};

export default Menu;
