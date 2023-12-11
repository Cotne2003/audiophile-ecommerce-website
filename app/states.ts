import { atom } from "recoil";

export type Product = {
  id: string;
  imgUrl: string;
  title: string;
  price: string;
};

export const cartData = atom({
  key: "cart",
  default: [] as Product[],
});

export const totalPrice = atom({
  key: "total",
  default: 0 as number,
});
