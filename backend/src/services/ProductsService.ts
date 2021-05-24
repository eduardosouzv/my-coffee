import AppError from '../errors/AppError';

import { products } from '../localProducts/products';

import { Product } from '../models/Product';

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

  getImageById(receivedID: Number) {
    const found = products.find(item => item.id === receivedID);

    if (!found) {
      throw new AppError('image not found');
    }
    return found?.icon;
  }

  getAllProducts(baseUrl: string) {
    if (products.length) {
      const formattedProducts: Array<Product> = [];

      products.map(product => {
        formattedProducts.push(
          new Product({
            ...product,
            imgUrl: `http://${baseUrl}/products/photo?id=${product.id}`,
          }),
        );
      });
      return formattedProducts;
    }
    throw new AppError('no registered products');
  }

  getHotCoffes(baseUrl: string) {
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
              imgUrl: `http://${baseUrl}/products/photo?id=${filteredProduct.id}`,
            }),
          );
        });

      return formattedProducts;
    }
    throw new AppError('no registered products');
  }

  getIceCoffes(baseUrl: string) {
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
              imgUrl: `http://${baseUrl}/products/photo?id=${filteredProduct.id}`,
            }),
          );
        });

      return formattedProducts;
    }
    throw new AppError('no registered products');
  }
}
