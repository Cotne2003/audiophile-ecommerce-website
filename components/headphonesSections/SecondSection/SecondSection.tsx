"use client";

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
import ProductsShop from "@/components/productsShop/ProductsShop";
import BestGear from "@/components/best audio gear/BestGear";
import Link from "next/link";
import { motion } from "framer-motion";

const SecondSection = () => {
  return (
    <StyledSection>
      <ShopContainer>
        <ShopImg
          src={XX99II.src}
          as={motion.img}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        />
        <ShopDiv
          as={motion.div}
          initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <ShopNewProduct>NEW PRODUCT</ShopNewProduct>
          <ShopTitle>XX99 Mark II Headphones</ShopTitle>
          <ShopText>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </ShopText>
          <Link href={"/headphones/XX99-Mark-II"}>
            <SeeProductButton
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              See Product
            </SeeProductButton>
          </Link>
        </ShopDiv>
      </ShopContainer>

      <ShopContainer height="enable" direction="reverse">
        <ShopDiv
          as={motion.div}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <ShopTitle>XX99 Mark I Headphones</ShopTitle>
          <ShopText>
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </ShopText>
          <Link href={"/headphones/XX99-Mark-I"}>
            <SeeProductButton
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              See Product
            </SeeProductButton>
          </Link>
        </ShopDiv>
        <ShopImg
          src={XX99I.src}
          as={motion.img}
          initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        />
      </ShopContainer>

      <ShopContainer height="enable">
        <ShopImg
          src={XX59.src}
          as={motion.img}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        />
        <ShopDiv
          as={motion.div}
          initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <ShopTitle>XX59 Headphones</ShopTitle>
          <ShopText>
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </ShopText>
          <Link href={"/headphones/XX59"}>
            <SeeProductButton
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              See Product
            </SeeProductButton>
          </Link>
        </ShopDiv>
      </ShopContainer>

      <ProductsShopContainer>
        <ProductsShop />
      </ProductsShopContainer>

      <BestGear />
    </StyledSection>
  );
};

export default SecondSection;
