import React, { useContext } from 'react';

import { TopBar } from '../../components/TopBar';
import { NavMenu } from '../../components/NavMenu';
import { Item } from '../../components/Item';

import { List } from './styles';

import coffee from '../../assets/coffee-cup.png';
import { AuthContext } from '../../contexts/AuthContext';
import { LoginModal } from '../../components/LoginModal';

const Menu: React.FC = () => {
  const { isLoginModalOpen } = useContext(AuthContext);

  return (
    <div>
      {isLoginModalOpen ? <LoginModal /> : null}
      <TopBar />
      <NavMenu />
      <List>
        <Item
          title="product"
          description="lorem ipsum lorem lorem lorem lorem loremlorem ipsum lorem lorem lorem lorem loremlorem ipsum lorem lorem lorem lorem lorem"
          imgPath={coffee}
        />
        <Item
          title="product"
          description="lorem ipsum lorem lorem lorem lorem loremlorem ipsum lorem lorem lorem lorem loremlorem ipsum lorem lorem lorem lorem lorem"
          imgPath={coffee}
        />
        <Item
          title="product"
          description="lorem ipsum lorem lorem lorem lorem loremlorem ipsum lorem lorem lorem lorem loremlorem ipsum lorem lorem lorem lorem lorem"
          imgPath={coffee}
        />
        <Item
          title="product"
          description="lorem ipsum lorem lorem lorem lorem loremlorem ipsum lorem lorem lorem lorem loremlorem ipsum lorem lorem lorem lorem lorem"
          imgPath={coffee}
        />
      </List>
    </div>
  );
};

export default Menu;
