export interface IProduct {
  name: string;
  description: string;
  price: number;
  image: {
    url: string;
    alt: string;
  }[];
  quantity: number;
}
