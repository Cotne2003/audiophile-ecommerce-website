import React from "react";
import {
  ProductsAndPhotosContainer,
  ProductAndPhotoFirstDiv,
  ZX9img,
  ProductAndPhotoFirstDivSeconst,
} from "./ProductsAndPhotosStyles";
import ZX9 from "../../../../../public/assets/home/desktop/image-speaker-zx9.png";
import {
  MainHeadphone,
  ProductText,
} from "../../mainSection/MainSectionStyles";
import { SeeProductButton } from "@/app/components/buttons/buttons";

const ProductsAndPhotos = () => {
  return (
    <ProductsAndPhotosContainer>
      <ProductAndPhotoFirstDiv>
        <ZX9img src={ZX9.src} />
        <ProductAndPhotoFirstDivSeconst>
          <MainHeadphone size="small">ZX9 SPEAKER</MainHeadphone>
          <ProductText size="small">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </ProductText>
          <SeeProductButton color="black">See Product</SeeProductButton>
        </ProductAndPhotoFirstDivSeconst>
      </ProductAndPhotoFirstDiv>
    </ProductsAndPhotosContainer>
  );
};

export default ProductsAndPhotos;
