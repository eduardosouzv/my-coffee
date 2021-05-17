import path from 'path';

interface IProduct {
  id: number;
  title: string;
  type: string;
  description: string;
  price: number;
  icon: string;
}

export const products: Array<IProduct> = [
  {
    id: 0,
    title: 'cafe bom',
    type: 'hot',
    description: 'lorem impsun lorem impsun',
    price: 5.2,
    icon: path.join(__dirname, '..', 'localProducts', 'images', '0.jpg'),
  },
  {
    id: 1,
    title: 'cafe gelo',
    type: 'ice',
    description: 'lorem impsun lorem impsun',
    price: 7.2,
    icon: path.join(__dirname, '..', 'localProducts', 'images', '0.jpg'),
  },
];
