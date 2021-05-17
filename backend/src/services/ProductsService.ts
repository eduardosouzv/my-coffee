import { products } from '../localProducts/products';

import { Product } from '../models/Product';

export default class ProductsService {
  getProductById(receivedID: Number, baseUrl: string) {
    const found = products.find(item => item.id === receivedID);

    if (!found) {
      throw new Error('product not found');
    }
    return new Product({
      ...found,
      imgUrl: `http://${baseUrl}/products/photo?id=${found.id}`,
    });
  }

  getImageById(receivedID: Number) {
    const found = products.find(item => item.id === receivedID);

    if (!found) {
      throw new Error('image not found');
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
    throw new Error('no registered products');
  }
}
