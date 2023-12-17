import React from "react";
import {
  ProductsDiv,
  ProductDiv,
  ImgAndPrice,
  ProductImg,
  TitleAndPriceDiv,
  ProductTitle,
  Price,
  ProductCounter,
  CounterIconDiv,
  Count,
} from "./CartProductStyles";
import plus from "@/public/assets/plus.svg";
import minus from "@/public/assets/minus.svg";

type Props = {
  imgUrl: string | undefined;
  title: string | undefined;
  price: string | undefined;
};

const CartProduct = ({ imgUrl, title, price }: Props) => {
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
          <CounterIconDiv>
            <img src={minus.src} />
          </CounterIconDiv>
          <Count>1</Count>
          <CounterIconDiv>
            <img src={plus.src} />
          </CounterIconDiv>
        </ProductCounter>
      </ProductDiv>
    </ProductsDiv>
  );
};

export default CartProduct;
