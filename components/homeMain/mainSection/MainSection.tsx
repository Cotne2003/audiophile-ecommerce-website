"use client";

import React from "react";
import {
  NewProduct,
  MainHeadphone,
  DivProduct,
  ProductText,
  MainStyledSection,
} from "./MainSectionStyles";
import { SeeProductButton } from "../../buttons/buttons";
import Link from "next/link";

const MainSection = () => {
  return (
    <MainStyledSection>
      <DivProduct>
        <NewProduct>NEW PRODUCT</NewProduct>
        <MainHeadphone>XX99 Mark II HeadphoneS</MainHeadphone>
        <ProductText>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </ProductText>
        <Link href={"/headphones/XX99-Mark-II"}>
          <SeeProductButton>See Product</SeeProductButton>
        </Link>
      </DivProduct>
    </MainStyledSection>
  );
};

export default MainSection;
