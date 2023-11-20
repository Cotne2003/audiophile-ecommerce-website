import React from "react";
import {
  ProductsAndPhotosContainer,
  ProductAndPhotoFirstDiv,
} from "./ProductsAndPhotosStyles";
import ZX9 from "../../../../../public/assets/home/desktop/image-speaker-zx9.png";
import {
  MainHeadphone,
  ProductText,
  DivProduct,
} from "../../mainSection/MainSectionStyles";
import { SeeProductButton } from "@/app/components/buttons/buttons";

const ProductsAndPhotos = () => {
  return (
    <ProductsAndPhotosContainer>
      <ProductAndPhotoFirstDiv>
        <div>
          <MainHeadphone widthsize="small">ZX9 SPEAKER</MainHeadphone>
          <ProductText widthsize="small">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </ProductText>
          <SeeProductButton color="black">See Product</SeeProductButton>
        </div>
      </ProductAndPhotoFirstDiv>
    </ProductsAndPhotosContainer>
  );
};

export default ProductsAndPhotos;
