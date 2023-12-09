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
import test from "@/public/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import plus from "@/public/assets/plus.svg";
import minus from "@/public/assets/minus.svg";

const CartProduct = () => {
  return (
    <ProductsDiv>
      <ProductDiv>
        <ImgAndPrice>
          <ProductImg src={test.src} />
          <TitleAndPriceDiv>
            <ProductTitle>XX99 MK II</ProductTitle>
            <Price>$ 2,999</Price>
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
