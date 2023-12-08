"use client";

import React from "react";
import {
  CartContainer,
  CartDiv,
  CartTitle,
  TitleAndRemove,
} from "./CartStyles";

const Cart = () => {
  return (
    <CartContainer>
      <CartDiv>
        <TitleAndRemove>
          <CartTitle>Cart</CartTitle>
        </TitleAndRemove>
      </CartDiv>
    </CartContainer>
  );
};

export default Cart;
