import { Title, Element, Image, Description } from './styles';

interface Props {
  title: string;
  description: string;
  imgPath: string;
}

export const Item: React.FC<Props> = ({ title, description, imgPath }) => {
  return (
    <Element>
      <Image src={imgPath} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Element>
  );
};