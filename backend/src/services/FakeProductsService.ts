import AppError from '../errors/AppError';

import { Product } from '../models/Product';

import path from 'path';

const products = [
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
];

export default class ProductsService {
  getProductById(receivedID: Number, baseUrl: string) {
    const found = products.find(item => item.id === receivedID);

    if (!found) {
      throw new AppError('product not found', 404);
    }

    return new Product({
      ...found,
      imgUrl: `http://${baseUrl}/products/photo?id=${found.id}`,
    });
  }
}
