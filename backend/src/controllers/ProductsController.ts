import { Request, Response } from 'express';

import ProductsService from '../services/ProductsService';

export const getProductById = (request: Request, response: Response) => {
  const { id } = request.query;

  const product = new ProductsService().getProductById(Number(id));
  response.json(product);
};

export const getImageById = (request: Request, response: Response) => {
  const { id } = request.query;

  const image = new ProductsService().getImageById(Number(id));
  response.sendFile(image);
};

export const getAllProducts = (request: Request, response: Response) => {
  const product = new ProductsService().getAllProducts();
  response.json(product);
};

export const getHotCoffes = (request: Request, response: Response) => {
  const products = new ProductsService().getHotCoffes();
  response.json(products);
};

export const getIceCoffes = (request: Request, response: Response) => {
  const products = new ProductsService().getIceCoffes();
  response.json(products);
};
