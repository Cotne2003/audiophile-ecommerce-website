import React from "react";
import {
  AddToCart,
  Count,
  CounterIconDiv,
  GoBack,
  ProductCounter,
  ProductImg,
  ProductImgMobile,
  ProductImgTablet,
  ProductPrice,
  ProductText,
  ProductTitle,
  ShopingAreaContainer,
  ShopingAreaDiv,
  ToCartDiv,
} from "./SectionOneStyles";
import plus from "@/public/assets/plus.svg";
import minus from "@/public/assets/minus.svg";
import { DATA } from "@/DATA";

const SectionOne = () => {
  const zx7 = DATA[4];
  return (
    <section>
      <GoBack>Go Back</GoBack>
      <ShopingAreaContainer>
        <ProductImg src={zx7.mainImgDesktopUrl} />
        <ProductImgTablet src={zx7.mainImgTabletUrl} />
        <ProductImgMobile src={zx7.mainImgMobileUrl} />
        <ShopingAreaDiv>
          <ProductTitle>{zx7.title}</ProductTitle>
          <ProductText>{zx7.mainText}</ProductText>
          <ProductPrice>{"$ " + zx7.price}</ProductPrice>
          <ToCartDiv>
            <ProductCounter>
              <CounterIconDiv>
                <img src={minus.src} />
              </CounterIconDiv>
              <Count>1</Count>
              <CounterIconDiv>
                <img src={plus.src} />
              </CounterIconDiv>
            </ProductCounter>
            <AddToCart>ADD TO CART</AddToCart>
          </ToCartDiv>
        </ShopingAreaDiv>
      </ShopingAreaContainer>
    </section>
  );
};

export default SectionOne;
