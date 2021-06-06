import { Title, Element, Image, Description, Button, Price } from './styles';

interface Props {
  id: number;
  title: string;
  description: string;
  imgPath: string;
  price: number;
}

interface ICart {
  id: number;
  title: string;
  description: string;
  imgPath: string;
  price: number;
  quantity: number;
}

export const Item: React.FC<Props> = ({ id, title, description, imgPath, price }) => {
  function addToCart({ id, title, description, imgPath, price }: Props): void {
    const cartJSON: string | null = localStorage.getItem('cart');

    if (cartJSON) {
      let cart: Array<ICart> = JSON.parse(cartJSON);

      const indexOfItemInCart = cart.findIndex(item => item.id === id);

      if (indexOfItemInCart !== -1) {
        cart[indexOfItemInCart] = {
          id,
          title,
          description,
          imgPath,
          price,
          quantity: cart[indexOfItemInCart].quantity + 1,
        };

        localStorage.setItem('cart', JSON.stringify(cart));
        return;
      }

      cart.push({ id, title, description, imgPath, price, quantity: 1 });

      localStorage.setItem('cart', JSON.stringify(cart));
      return;
    }

    localStorage.setItem(
      'cart',
      JSON.stringify([{ id, title, description, imgPath, price, quantity: 1 }]),
    );
  }

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
              addToCart({ id, title, description, imgPath, price });
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </Element>
  );
};
