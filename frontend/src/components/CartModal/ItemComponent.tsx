import add from '../../assets/icons/add.svg';
import remove from '../../assets/icons/remove.svg';

import { Item, ItemIcon, End, ActionButton } from './styles';

interface Props {
  icon: string;
  title: string;
  quantity: string;
}

export const ItemComponent: React.FC<Props> = ({ icon, title, quantity }) => {
  return (
    <>
      <Item>
        <ItemIcon src={icon} />
        <p>{title}</p>
        <End>
          <p>
            <strong>Quantity:</strong> {quantity}
          </p>
          <ActionButton>
            <img src={add} />
          </ActionButton>
          <ActionButton>
            <img src={remove} />
          </ActionButton>
        </End>
      </Item>
    </>
  );
};
