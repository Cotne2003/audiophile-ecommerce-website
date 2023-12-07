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

const ProductsAndPhotos = () => {
  return (
    <ProductsAndPhotosContainer>
      <ProductAndPhotoFirstDiv>
        <ZX9img src={ZX9.src} />
        <ProductAndPhotoFirstDivSecond>
          <MainHeadphone size="small">ZX9 SPEAKER</MainHeadphone>
          <ProductText size="small">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </ProductText>
          <Link href={"/speakers/ZX9"}>
            <SeeProductButton color="black">See Product</SeeProductButton>
          </Link>
        </ProductAndPhotoFirstDivSecond>
      </ProductAndPhotoFirstDiv>

      <ProductAndPhotoSecondDivContainer>
        <div>
          <SecondTitle>ZX7 SPEAKER</SecondTitle>
          <Link href={"/speakers/ZX7"}>
            <SeeProductButton fill="none">See Product</SeeProductButton>
          </Link>
        </div>
      </ProductAndPhotoSecondDivContainer>

      <ProductAndPhotoThirdDivContainer>
        <ProductAndPhotoThirdDivContainerFirstDiv></ProductAndPhotoThirdDivContainerFirstDiv>
        <ProductAndPhotoThirdDivContainerSecondDiv>
          <SecondTitle>YX1 EARPHONES</SecondTitle>
          <Link href={"/earphones/YX1"}>
            <SeeProductButton fill="none">See Product</SeeProductButton>
          </Link>
        </ProductAndPhotoThirdDivContainerSecondDiv>
      </ProductAndPhotoThirdDivContainer>
    </ProductsAndPhotosContainer>
  );
};

export default ProductsAndPhotos;
