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
import ZX9 from "@/public/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import ZX7 from "@/public/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
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
        <ShopImg src={ZX9.src} />
        <ShopDiv>
          <ShopNewProduct>NEW PRODUCT</ShopNewProduct>
          <ShopTitle>ZX9 SPEAKER</ShopTitle>
          <ShopText>
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </ShopText>
          <SeeProductButton>see product</SeeProductButton>
        </ShopDiv>
      </ShopContainer>

      <ShopContainer height="enable" direction="reverse">
        <ShopDiv>
          <ShopTitle>ZX7 SPEAKER</ShopTitle>
          <ShopText>
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use.
          </ShopText>
          <SeeProductButton>See Product</SeeProductButton>
        </ShopDiv>
        <ShopImg src={ZX7.src} />
      </ShopContainer>

      <ProductsShopContainer>
        <DynamicLink />
      </ProductsShopContainer>

      <BestGear />
    </StyledSection>
  );
};

export default SecondSection;
