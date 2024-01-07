"use client";

import React, { useEffect, useState } from "react";
import {
  CartContainer,
  CartDiv,
  CartTitle,
  CheckoutBtn,
  FullPrice,
  ProductsContainer,
  Remove,
  TitleAndRemove,
  Total,
  TotalAndButtonContainer,
  TotalAndFullPriceDiv,
} from "./CartSpaceStyles";
import CartProduct from "./CartProduct/CartProduct";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartData } from "@/app/states";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  cartSpace: boolean;
  setCartSpace: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ cartSpace, setCartSpace }: Props) => {
  const cartSpaceRemover = () => {
    setCartSpace(!cartSpace);
  };

  const cart = useRecoilValue(cartData);
  const [, setOneCart] = useRecoilState(cartData);
  const [total, setTotal] = useState(0);

  const removeCart = () => {
    setOneCart([]);
  };

  useEffect(() => {
    const cartModel = [...cart];
    const sumOfProducts = cartModel.reduce(
      (sum, product) => Number(product.price) * product.count + sum,
      0
    );
    setTotal(sumOfProducts);
  }, [cart]);

  return (
    <>
      <CartContainer onClick={cartSpaceRemover}></CartContainer>
      <CartDiv>
        <TitleAndRemove>
          <CartTitle>Cart ({cart.length})</CartTitle>
          <Remove onClick={removeCart}>Remove all</Remove>
        </TitleAndRemove>
        <ProductsContainer>
          {cart.map((product) => (
            <CartProduct
              key={product.id}
              imgUrl={product.imgUrl}
              title={product.title}
              price={product.price}
              quantity={product.count}
            />
          ))}
        </ProductsContainer>

        <TotalAndButtonContainer>
          <TotalAndFullPriceDiv>
            <Total>Total</Total>
            <FullPrice>$ {total}</FullPrice>
          </TotalAndFullPriceDiv>
          <Link href={cart.length === 0 ? "" : "/checkout"}>
            <CheckoutBtn
              onClick={cartSpaceRemover}
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              checkout
            </CheckoutBtn>
          </Link>
        </TotalAndButtonContainer>
      </CartDiv>
    </>
  );
};

export default Cart;
