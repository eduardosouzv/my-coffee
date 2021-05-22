import { Title, Element, Image, Description, Button, Price } from './styles';

interface Props {
  title: string;
  description: string;
  imgPath: string;
  price: number;
}

export const Item: React.FC<Props> = ({ title, description, imgPath, price }) => {
  return (
    <Element>
      <Image src={imgPath} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <div>
        <Price>$ {price}</Price>
        <Button>Add to cart</Button>
      </div>
    </Element>
  );
};
