import React from 'react';

import { TopBar } from '../../components/TopBar';
import { NavMenu } from '../../components/NavMenu';
import { Item } from '../../components/Item';

import { List } from './styles';

import coffee from '../../assets/coffee-cup.png';

const Menu: React.FC = () => {
  return (
    <div>
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
