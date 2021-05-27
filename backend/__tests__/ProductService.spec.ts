const mockProducts = [
  {
    id: 1,
    title: 'French Cafe au Lait',
    type: 'hot',
    description:
      'A bistro-style cafe au lait is oh-so-French and a fantastic way to greet a chilly morning.',
    price: 4.33,
    icon: 'icon',
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
    ]);
  });
});
