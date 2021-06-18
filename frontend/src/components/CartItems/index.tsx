import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Icon, CartItem, Cart } from './styles';

export const CartItems: React.FC = () => {
  const { localStorageCart } = useContext(CartContext);

  return (
    <>
      <Cart>
        {localStorageCart.map(item => (
          <CartItem key={item.id}>
            <Icon src={item.imgPath} alt={item.description} />
            <p>{item.title}</p>
            <p>x{item.quantity}</p>
            <p>$ {item.price}</p>
          </CartItem>
        ))}
      </Cart>
    </>
  );
};
