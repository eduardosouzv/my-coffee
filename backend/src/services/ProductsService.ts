import AppError from '../errors/AppError';

import { BASE_URL } from '../constants';

import products from '../localProducts/products';

import { Product } from '../models/Product';

export default class ProductsService {
  getProductById(receivedID: Number) {
    const found = products.find(item => item.id === receivedID);

    if (!found) {
      throw new AppError('product not found', 404);
    }
    return new Product({
      ...found,
      imgUrl: `${BASE_URL}/products/photo?id=${found.id}`,
    });
  }

  getImageById(receivedID: Number) {
    const found = products.find(item => item.id === receivedID);

    if (!found) {
      throw new AppError('image not found');
    }
    return found?.icon;
  }

  getAllProducts() {
    if (products.length) {
      const formattedProducts: Array<Product> = [];

      products.map(product => {
        formattedProducts.push(
          new Product({
            ...product,
            imgUrl: `${BASE_URL}/products/photo?id=${product.id}`,
          }),
        );
      });
      return formattedProducts;
    }
    throw new AppError('no registered products');
  }

  getHotCoffes() {
    if (products.length) {
      const formattedProducts: Array<Product> = [];

      products
        .filter(product => {
          return product.type === 'hot';
        })
        .map(filteredProduct => {
          formattedProducts.push(
            new Product({
              ...filteredProduct,
              imgUrl: `${BASE_URL}/products/photo?id=${filteredProduct.id}`,
            }),
          );
        });

      return formattedProducts;
    }
    throw new AppError('no registered products');
  }

  getIceCoffes() {
    if (products.length) {
      const formattedProducts: Array<Product> = [];

      products
        .filter(product => {
          return product.type === 'ice';
        })
        .map(filteredProduct => {
          formattedProducts.push(
            new Product({
              ...filteredProduct,
              imgUrl: `${BASE_URL}/products/photo?id=${filteredProduct.id}`,
            }),
          );
        });

      return formattedProducts;
    }
    throw new AppError('no registered products');
  }
}
