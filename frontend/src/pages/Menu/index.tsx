import React, { useContext, useEffect, useState } from 'react';
import api from '../../config/api';

import { TopBar } from '../../components/TopBar';
import { NavMenu } from '../../components/NavMenu';
import { Item } from '../../components/Item';
import { RegisterModal } from '../../components/RegisterModal';
import { LoginModal } from '../../components/LoginModal';

import { List } from './styles';

import { AuthContext } from '../../contexts/AuthContext';

const Menu: React.FC = () => {
  interface IProduct {
    id: number;
    title: string;
    type: string;
    description: string;
    price: number;
    imgUrl: string;
  }

  useEffect(() => {
    (async () => {
      await api.get('/products/all').then(response => {
        setProducts(response.data);
      });
    })();
  }, []);

  const { isLoginModalOpen, isRegisterModalOpen } = useContext(AuthContext);

  const [products, setProducts] = useState([] as Array<IProduct>);

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
            />
          );
        })}
      </List>
    </div>
  );
};

export default Menu;
