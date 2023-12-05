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
import XX99markII from "@/public/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import XX99markIItablet from "@/public/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import XX99markIImobile from "@/public/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import plus from "@/public/assets/plus.svg";
import minus from "@/public/assets/minus.svg";

const SectionOne = () => {
  return (
    <section>
      <GoBack>Go Back</GoBack>
      <ShopingAreaContainer>
        <ProductImg src={XX99markII.src}></ProductImg>
        <ProductImgTablet src={XX99markIItablet.src}></ProductImgTablet>
        <ProductImgMobile src={XX99markIImobile.src}></ProductImgMobile>
        <ShopingAreaDiv>
          <ProductTitle>XX99 Mark II Headphones</ProductTitle>
          <ProductText>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </ProductText>
          <ProductPrice>$ 2,999</ProductPrice>
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
