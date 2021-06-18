import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Title, Element, Image, Description, Button, Price } from './styles';

interface Props {
  id: number;
  title: string;
  description: string;
  imgPath: string;
  price: number;
}

export const Item: React.FC<Props> = ({ id, title, description, imgPath, price }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Element>
      <div>
        <Image src={imgPath} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <div>
          <Price>$ {price}</Price>
          <Button
            onClick={() => {
              addToCart({ id, title, description, imgPath, price, quantity: 1 });
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </Element>
  );
};
