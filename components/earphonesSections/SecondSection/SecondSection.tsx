import {
  ShopContainer,
  ShopImg,
  ShopDiv,
  ShopNewProduct,
  ShopTitle,
  ShopText,
} from "@/components/ShopForPages/ShopForPages";
import { SeeProductButton } from "@/components/buttons/buttons";
import {
  ProductsShopContainer,
  StyledSection,
} from "@/components/headphonesSections/SecondSection/SecondSectionStyles";
import React from "react";
import YX1 from "@/public/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import BestGear from "@/components/best audio gear/BestGear";

import dynamic from "next/dynamic";

const DynamicLink = dynamic(
  () => import("@/components/productsShop/ProductsShop"),
  {
    ssr: false,
  }
);

const SecondSection = () => {
  return (
    <StyledSection>
      <ShopContainer>
        <ShopImg src={YX1.src} />
        <ShopDiv>
          <ShopNewProduct>NEW PRODUCT</ShopNewProduct>
          <ShopTitle>YX1 WIRELESS EARPHONES</ShopTitle>
          <ShopText>
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </ShopText>
          <SeeProductButton>see product</SeeProductButton>
        </ShopDiv>
      </ShopContainer>
      <ProductsShopContainer>
        <DynamicLink />
      </ProductsShopContainer>
      <BestGear />
    </StyledSection>
  );
};

export default SecondSection;
