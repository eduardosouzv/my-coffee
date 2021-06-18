import add from '../../assets/icons/add.svg';
import remove from '../../assets/icons/remove.svg';

import { Item, ItemIcon, End, ActionButton } from './styles';

interface Props {
  icon: string;
  title: string;
  quantity: number;
  addFunction: any;
  removeFunction: () => void;
}

export const ItemComponent: React.FC<Props> = ({
  icon,
  title,
  quantity,
  addFunction,
  removeFunction,
}) => {
  return (
    <>
      <Item>
        <ItemIcon src={icon} />
        <p>{title}</p>
        <End>
          <p>
            <strong>Quantity:</strong> {quantity}
          </p>
          <ActionButton onClick={addFunction}>
            <img src={add} alt={title} />
          </ActionButton>
          <ActionButton onClick={removeFunction}>
            <img src={remove} alt={title} />
          </ActionButton>
        </End>
      </Item>
    </>
  );
};
