import ProductsService from '../src/services/FakeProductsService';

import { Product } from '../src/models/Product';

describe('Products Service', () => {
  it('should be able return a product from id 1', () => {
    const service = new ProductsService();

    expect(service.getProductById(1, 'localhost:3333')).toStrictEqual(
      new Product({
        id: 1,
        title: 'French Cafe au Lait',
        type: 'hot',
        description:
          'A bistro-style cafe au lait is oh-so-French and a fantastic way to greet a chilly morning.',
        price: 4.33,
        imgUrl: 'http://localhost:3333/products/photo?id=1',
      }),
    );
  });
});
