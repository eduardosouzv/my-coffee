import { Request, Response } from 'express';

import ProductsService from '../services/ProductsService';

export const getProductById = (request: Request, response: Response) => {
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
};

export const getImageById = (request: Request, response: Response) => {
  const { id } = request.query;

  try {
    const image = new ProductsService().getImageById(Number(id));
    response.sendFile(image);
  } catch (error) {
    response.status(404).json(String(error));
  }
};

export const getAllProducts = (request: Request, response: Response) => {
  try {
    const product = new ProductsService().getAllProducts(String(request.get('host')));
    response.json(product);
  } catch (error) {
    response.status(404).json(String(error));
  }
};

export const getHotCoffes = (request: Request, response: Response) => {
  try {
    const products = new ProductsService().getHotCoffes(String(request.get('host')));
    response.json(products);
  } catch (error) {
    response.status(404).json(String(error));
  }
};

export const getIceCoffes = (request: Request, response: Response) => {
  try {
    const products = new ProductsService().getIceCoffes(String(request.get('host')));
    response.json(products);
  } catch (error) {
    response.status(404).json(String(error));
  }
};
