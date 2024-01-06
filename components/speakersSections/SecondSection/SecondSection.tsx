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
import ProductsShop from "@/components/productsShop/ProductsShop";
import BestGear from "@/components/best audio gear/BestGear";
import Link from "next/link";
import { motion } from "framer-motion";

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
          <Link href={"/speakers/ZX9"}>
            <SeeProductButton
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              see product
            </SeeProductButton>
          </Link>
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
          <Link href={"/speakers/ZX7"}>
            <SeeProductButton
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              See Product
            </SeeProductButton>
          </Link>
        </ShopDiv>
        <ShopImg src={ZX7.src} />
      </ShopContainer>

      <ProductsShopContainer>
        <ProductsShop />
      </ProductsShopContainer>

      <BestGear />
    </StyledSection>
  );
};

export default SecondSection;
