"use client";

import React, { useEffect, useState } from "react";
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

type Props = {
  cartSpace: boolean;
  setCartSpace: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ cartSpace, setCartSpace }: Props) => {
  const cartSpaceRemover = () => {
    setCartSpace(!cartSpace);
  };

  const cart = useRecoilValue(cartData);
  const cartModel = [...cart];
  const [oneCart, setOneCart] = useRecoilState(cartData);

  const [total, setTotal] = useState(0);

  const removeCart = () => {
    setOneCart([]);
  };

  useEffect(() => {
    const haha = cartModel.reduce(
      (sum, product) => Number(product.price) + sum,
      0
    );
    setTotal(haha);
    console.log(cartModel);
  }, [cart]);

  return (
    <>
      <CartContainer onClick={cartSpaceRemover}></CartContainer>
      <CartDiv>
        <TitleAndRemove>
          <CartTitle>Cart ({cart.length})</CartTitle>
          <Remove onClick={removeCart}>Remove all</Remove>
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
