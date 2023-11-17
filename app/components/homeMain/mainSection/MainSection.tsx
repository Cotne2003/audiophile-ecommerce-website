import React from "react";
import {
  NewProduct,
  MainHeadphone,
  DivProduct,
  ProductText,
  MainStyledSection,
} from "./MainSectionStyles";
import { SeeProductButton } from "../../buttons/buttons";

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
        <SeeProductButton>See Product</SeeProductButton>
      </DivProduct>
    </MainStyledSection>
  );
};

export default MainSection;