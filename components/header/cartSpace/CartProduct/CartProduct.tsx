import React, { useState } from "react";
import {
  ProductsDiv,
  ProductDiv,
  ImgAndPrice,
  ProductImg,
  TitleAndPriceDiv,
  ProductTitle,
  Price,
  ProductCounter,
  Count,
} from "./CartProductStyles";

type Props = {
  imgUrl: string | undefined;
  title: string | undefined;
  price: string | undefined;
  quantity: number;
};

const CartProduct = ({ imgUrl, title, price, quantity }: Props) => {
  return (
    <ProductsDiv>
      <ProductDiv>
        <ImgAndPrice>
          <ProductImg src={imgUrl} />
          <TitleAndPriceDiv>
            <ProductTitle>{title}</ProductTitle>
            <Price>$ {price}</Price>
          </TitleAndPriceDiv>
        </ImgAndPrice>
        <ProductCounter>
          <Count>{quantity}</Count>
        </ProductCounter>
      </ProductDiv>
    </ProductsDiv>
  );
};

export default CartProduct;
