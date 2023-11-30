import React from "react";
import { StyledSection } from "./SecondSectionStyles";
import {
  ShopContainer,
  ShopDiv,
  ShopImg,
  ShopNewProduct,
  ShopText,
  ShopTitle,
} from "@/components/ShopForPages/ShopForPages";
import { ProductsShopContainer } from "./SecondSectionStyles";
import XX99II from "../../../public/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import XX99I from "../../../public/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import XX59 from "../../../public/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import { SeeProductButton } from "@/components/buttons/buttons";
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
        <ShopImg src={XX99II.src} />
        <ShopDiv>
          <ShopNewProduct>NEW PRODUCT</ShopNewProduct>
          <ShopTitle>XX99 Mark II Headphones</ShopTitle>
          <ShopText>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </ShopText>
          <SeeProductButton>See Product</SeeProductButton>
        </ShopDiv>
      </ShopContainer>

      <ShopContainer height="enable" direction="reverse">
        <ShopDiv>
          <ShopTitle>XX99 Mark I Headphones</ShopTitle>
          <ShopText>
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </ShopText>
          <SeeProductButton>See Product</SeeProductButton>
        </ShopDiv>
        <ShopImg src={XX99I.src} />
      </ShopContainer>

      <ShopContainer height="enable">
        <ShopImg src={XX59.src} />
        <ShopDiv>
          <ShopTitle>XX59 Headphones</ShopTitle>
          <ShopText>
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </ShopText>
          <SeeProductButton>See Product</SeeProductButton>
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
