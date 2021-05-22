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
    id: 1,
    title: 'French Cafe au Lait',
    type: 'hot',
    description:
      'A bistro-style cafe au lait is oh-so-French and a fantastic way to greet a chilly morning.',
    price: 4.33,
    icon: path.join(__dirname, '..', 'localProducts', 'images', 'frenchcafe.jpg'),
  },
  {
    id: 2,
    title: 'Cuban Coffee',
    type: 'hot',
    description: 'Cuban coffee is a sweet, rich, delicious hot beverage.',
    price: 3.21,
    icon: path.join(__dirname, '..', 'localProducts', 'images', 'cuban.jpg'),
  },
  {
    id: 3,
    title: 'Honey Almondmilk',
    type: 'ice',
    description:
      'Lightly sweetened with honey and topped off with almondmilk for a balanced taste in every delicious sip.',
    price: 5.28,
    icon: path.join(__dirname, '..', 'localProducts', 'images', 'honeyalmondmilk.jpg'),
  },
  {
    id: 4,
    title: 'Salted Caramel Cream',
    type: 'ice',
    description:
      'Super-smooth cold brew, sweetened with a touch of caramel and topped with a salted, rich cold foam.',
    price: 6.13,
    icon: path.join(__dirname, '..', 'localProducts', 'images', 'saltedcaramel.jpg'),
  },
];
