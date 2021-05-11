import React from 'react';

import { Title, List, Menu } from './styles';

export const NavMenu = () => {
  return (
    <Menu>
      <Title>Menu</Title>
      <List>
        <li>Hot Coffee</li>
        <li>Ice Coffee</li>
      </List>
    </Menu>
  );
};
