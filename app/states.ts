import { atom } from "recoil";

export type Product = {
  id: string;
  imgUrl: string;
  title: string;
  price: string;
  count: number;
};

export const cartData = atom({
  key: "cart",
  default: [] as Product[],
});
