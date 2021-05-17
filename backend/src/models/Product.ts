interface IProduct {
  id: number;
  title: string;
  type: string;
  description: string;
  price: number;
  imgUrl: string;
}

export class Product {
  constructor({ id, title, type, description, price, imgUrl }: IProduct) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.description = description;
    this.price = price;
    this.imgUrl = imgUrl;
  }

  id: number;
  title: string;
  type: string;
  description: string;
  price: number;
  imgUrl: string;
}
