import { StaticImageData } from "next/image";

export type Product = {
  image: StaticImageData;
  name: string;
  category: string;
  price: number;
  sold: number;
  profit: number;
};
