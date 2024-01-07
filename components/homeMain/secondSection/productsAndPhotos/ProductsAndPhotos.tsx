import React from "react";
import {
  ProductsAndPhotosContainer,
  ProductAndPhotoFirstDiv,
  ZX9img,
  ProductAndPhotoFirstDivSecond,
  ProductAndPhotoSecondDivContainer,
  ProductAndPhotoThirdDivContainer,
  ProductAndPhotoThirdDivContainerFirstDiv,
  ProductAndPhotoThirdDivContainerSecondDiv,
} from "./ProductsAndPhotosStyles";
import ZX9 from "./../../../../public/assets/home/desktop/image-speaker-zx9.png";
import {
  MainHeadphone,
  ProductText,
} from "../../mainSection/MainSectionStyles";
import { SeeProductButton } from "@/components/buttons/buttons";
import { SecondTitle } from "@/components/texts/Titles";
import Link from "next/link";
import { motion } from "framer-motion";

const ProductsAndPhotos = () => {
  return (
    <ProductsAndPhotosContainer>
      <ProductAndPhotoFirstDiv
        as={motion.div}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <ZX9img src={ZX9.src} />
        <ProductAndPhotoFirstDivSecond>
          <MainHeadphone size="small">ZX9 SPEAKER</MainHeadphone>
          <ProductText size="small">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </ProductText>
          <Link href={"/speakers/ZX9"}>
            <SeeProductButton
              color="black"
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              See Product
            </SeeProductButton>
          </Link>
        </ProductAndPhotoFirstDivSecond>
      </ProductAndPhotoFirstDiv>

      <ProductAndPhotoSecondDivContainer
        as={motion.div}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <div>
          <SecondTitle>ZX7 SPEAKER</SecondTitle>
          <Link href={"/speakers/ZX7"}>
            <SeeProductButton
              fill="none"
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              See Product
            </SeeProductButton>
          </Link>
        </div>
      </ProductAndPhotoSecondDivContainer>

      <ProductAndPhotoThirdDivContainer>
        <ProductAndPhotoThirdDivContainerFirstDiv
          as={motion.div}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        ></ProductAndPhotoThirdDivContainerFirstDiv>
        <ProductAndPhotoThirdDivContainerSecondDiv
          as={motion.div}
          initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <SecondTitle>YX1 EARPHONES</SecondTitle>
          <Link href={"/earphones/YX1"}>
            <SeeProductButton
              fill="none"
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              See Product
            </SeeProductButton>
          </Link>
        </ProductAndPhotoThirdDivContainerSecondDiv>
      </ProductAndPhotoThirdDivContainer>
    </ProductsAndPhotosContainer>
  );
};

export default ProductsAndPhotos;
