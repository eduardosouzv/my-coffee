const mockProducts = [
  {
    id: 1,
    title: 'French Cafe au Lait',
    type: 'hot',
    description:
      'A bistro-style cafe au lait is oh-so-French and a fantastic way to greet a chilly morning.',
    price: 4.33,
    icon: 'path to icon in local files',
  },
  {
    id: 2,
    title: 'Cuban Coffee',
    type: 'hot',
    description: 'Cuban coffee is a sweet, rich, delicious hot beverage.',
    price: 3.21,
    icon: 'path to icon in local files',
  },
  {
    id: 3,
    title: 'Honey Almondmilk',
    type: 'ice',
    description:
      'Lightly sweetened with honey and topped off with almondmilk for a balanced taste in every delicious sip.',
    price: 5.28,
    icon: 'path to icon in local files',
  },
  {
    id: 4,
    title: 'Salted Caramel Cream',
    type: 'ice',
    description:
      'Super-smooth cold brew, sweetened with a touch of caramel and topped with a salted, rich cold foam.',
    price: 6.13,
    icon: 'path to icon in local files',
  },
];

jest.mock('../src/localProducts/products', () => {
  return mockProducts;
});

import ProductsService from '../src/services/ProductsService';

import { Product } from '../src/models/Product';

import { BASE_URL } from '../src/constants';

describe('Products Service', () => {
  it('should return a product from id 1', () => {
    const product = new ProductsService().getProductById(1);

    expect(product).toEqual(
      new Product({
        id: 1,
        title: 'French Cafe au Lait',
        type: 'hot',
        description:
          'A bistro-style cafe au lait is oh-so-French and a fantastic way to greet a chilly morning.',
        price: 4.33,
        imgUrl: `${BASE_URL}/products/photo?id=1`,
      }),
    );
  });

  it('should return all products', () => {
    const products = new ProductsService().getAllProducts();

    expect(products).toEqual([
      {
        id: 1,
        title: 'French Cafe au Lait',
        type: 'hot',
        description:
          'A bistro-style cafe au lait is oh-so-French and a fantastic way to greet a chilly morning.',
        price: 4.33,
        imgUrl: `${BASE_URL}/products/photo?id=1`,
      },
      {
        id: 2,
        title: 'Cuban Coffee',
        type: 'hot',
        description: 'Cuban coffee is a sweet, rich, delicious hot beverage.',
        price: 3.21,
        imgUrl: `${BASE_URL}/products/photo?id=2`,
      },
      {
        id: 3,
        title: 'Honey Almondmilk',
        type: 'ice',
        description:
          'Lightly sweetened with honey and topped off with almondmilk for a balanced taste in every delicious sip.',
        price: 5.28,
        imgUrl: `${BASE_URL}/products/photo?id=3`,
      },
      {
        id: 4,
        title: 'Salted Caramel Cream',
        type: 'ice',
        description:
          'Super-smooth cold brew, sweetened with a touch of caramel and topped with a salted, rich cold foam.',
        price: 6.13,
        imgUrl: `${BASE_URL}/products/photo?id=4`,
      },
    ]);
  });

  it('should return all coffees of type hot', () => {
    const hotCoffees = new ProductsService().getHotCoffes();

    expect(hotCoffees).toEqual([
      {
        id: 1,
        title: 'French Cafe au Lait',
        type: 'hot',
        description:
          'A bistro-style cafe au lait is oh-so-French and a fantastic way to greet a chilly morning.',
        price: 4.33,
        imgUrl: `${BASE_URL}/products/photo?id=1`,
      },
      {
        id: 2,
        title: 'Cuban Coffee',
        type: 'hot',
        description: 'Cuban coffee is a sweet, rich, delicious hot beverage.',
        price: 3.21,
        imgUrl: `${BASE_URL}/products/photo?id=2`,
      },
    ]);
  });

  it('should return all coffees of type ice', () => {
    const iceCoffees = new ProductsService().getIceCoffes();

    expect(iceCoffees).toEqual([
      {
        id: 3,
        title: 'Honey Almondmilk',
        type: 'ice',
        description:
          'Lightly sweetened with honey and topped off with almondmilk for a balanced taste in every delicious sip.',
        price: 5.28,
        imgUrl: `${BASE_URL}/products/photo?id=3`,
      },
      {
        id: 4,
        title: 'Salted Caramel Cream',
        type: 'ice',
        description:
          'Super-smooth cold brew, sweetened with a touch of caramel and topped with a salted, rich cold foam.',
        price: 6.13,
        imgUrl: `${BASE_URL}/products/photo?id=4`,
      },
    ]);
  });
});
