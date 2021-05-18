import { Router, Request, Response } from 'express';

import ProductsService from '../services/ProductsService';

const ProductsController = Router();

ProductsController.get('/', (request: Request, response: Response) => {
  const { id } = request.query;

  try {
    const product = new ProductsService().getProductById(
      Number(id),
      String(request.get('host')),
    );
    response.json(product);
  } catch (error) {
    response.status(404).json(String(error));
  }
});

ProductsController.get('/photo', (request: Request, response: Response) => {
  const { id } = request.query;

  try {
    const image = new ProductsService().getImageById(Number(id));
    response.sendFile(image);
  } catch (error) {
    response.status(404).json(String(error));
  }
});

ProductsController.get('/all', (request: Request, response: Response) => {
  try {
    const product = new ProductsService().getAllProducts(String(request.get('host')));
    response.json(product);
  } catch (error) {
    response.status(404).json(String(error));
  }
});

ProductsController.get('/hot', (request: Request, response: Response) => {
  try {
    const products = new ProductsService().getHotCoffes(String(request.get('host')));
    response.json(products);
  } catch (error) {
    response.status(404).json(String(error));
  }
});

ProductsController.get('/ice', (request: Request, response: Response) => {
  try {
    const products = new ProductsService().getIceCoffes(String(request.get('host')));
    response.json(products);
  } catch (error) {
    response.status(404).json(String(error));
  }
});

export default ProductsController;
