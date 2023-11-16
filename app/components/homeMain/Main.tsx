"use client";

import React from "react";
import {
  StyledMain,
  NewProduct,
  MainHeadphone,
  DivProduct,
  ProductText,
} from "./mainStyles";
import { SeeProductButton } from "../buttons/buttons";
import asd from "../../../public/assets/home/desktop/image-hero.jpg";
import { url } from "inspector";

const Main = () => {
  return (
    <StyledMain style={{ backgroundImage: `url(${asd.src})` }}>
      <DivProduct>
        <NewProduct>NEW PRODUCT</NewProduct>
        <MainHeadphone>XX99 Mark II HeadphoneS</MainHeadphone>
        <ProductText>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </ProductText>
        <SeeProductButton>See Product</SeeProductButton>
      </DivProduct>
    </StyledMain>
  );
};

export default Main;
