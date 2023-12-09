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

type Props = {
  cartSpace: boolean;
  setCartSpace: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ cartSpace, setCartSpace }: Props) => {
  const cartSpaceRemover = () => {
    setCartSpace(!cartSpace);
  };
  return (
    <>
      <CartContainer onClick={cartSpaceRemover}></CartContainer>
      <CartDiv>
        <TitleAndRemove>
          <CartTitle>Cart (3)</CartTitle>
          <Remove>Remove all</Remove>
        </TitleAndRemove>
        <CartProduct />
        <TotalAndButtonContainer>
          <TotalAndFullPriceDiv>
            <Total>Total</Total>
            <FullPrice>$ 5,396</FullPrice>
          </TotalAndFullPriceDiv>
          <ChekCoutBtn>checkout</ChekCoutBtn>
        </TotalAndButtonContainer>
      </CartDiv>
    </>
  );
};

export default Cart;
