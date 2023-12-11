"use client";

import React from "react";
import {
  CartContainer,
  CartDiv,
  CartTitle,
  ChekCoutBtn,
  FullPrice,
  Remove,
  TitleAndRemove,
  Total,
  TotalAndButtonContainer,
  TotalAndFullPriceDiv,
} from "./CartSpaceStyles";
import CartProduct from "./CartProduct/CartProduct";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartData } from "@/app/states";
import { totalPrice } from "@/app/states";

type Props = {
  cartSpace: boolean;
  setCartSpace: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ cartSpace, setCartSpace }: Props) => {
  const cartSpaceRemover = () => {
    setCartSpace(!cartSpace);
  };

  const [cart, setCart] = useRecoilState(cartData);
  const cartDataRemover = () => {
    setCart([]);
  };

  const [total, setTotal] = useRecoilState(totalPrice);

  return (
    <>
      <CartContainer onClick={cartSpaceRemover}></CartContainer>
      <CartDiv>
        <TitleAndRemove>
          <CartTitle>Cart ({cart.length})</CartTitle>
          <Remove onClick={cartDataRemover}>Remove all</Remove>
        </TitleAndRemove>

        {cart.map((product) => (
          <CartProduct
            key={product.id}
            imgUrl={product.imgUrl}
            title={product.title}
            price={product.price}
          />
        ))}

        <TotalAndButtonContainer>
          <TotalAndFullPriceDiv>
            <Total>Total</Total>
            <FullPrice>$ {total}</FullPrice>
          </TotalAndFullPriceDiv>
          <ChekCoutBtn>checkout</ChekCoutBtn>
        </TotalAndButtonContainer>
      </CartDiv>
    </>
  );
};

export default Cart;
