import { atom } from "recoil";

export type Product = {
  id: string;
  imgUrl: string | undefined;
  title: string | undefined;
  price: string | undefined;
};

export const cartData = atom({
  key: "cart",
  default: [] as Product[],
});
