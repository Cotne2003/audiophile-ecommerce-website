import React from "react";
import {
  ProductsShopContainer,
  ProductShopContainer,
  ProductShopTitle,
  ProductShopButton,
  ProductShopImg,
  ProductShopImgEarphones,
} from "./ProductsShopStyle";
import vector from "../../../public/assets/shared/desktop/icon-arrow-right.svg";
import headphonesPreview from "../../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersPreview from "../../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earPhonesPreview from "../../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";

const ProductsShop = () => {
  return (
    <ProductsShopContainer>
      <ProductShopContainer>
        <ProductShopImg src={headphonesPreview.src} />
        <ProductShopTitle>HEADPHONES</ProductShopTitle>
        <ProductShopButton>
          Shop <img src={vector.src} />
        </ProductShopButton>
      </ProductShopContainer>
      <ProductShopContainer>
        <ProductShopImg src={speakersPreview.src} />
        <ProductShopTitle>SPEAKERS</ProductShopTitle>
        <ProductShopButton>
          Shop <img src={vector.src} />
        </ProductShopButton>
      </ProductShopContainer>
      <ProductShopContainer>
        <ProductShopImgEarphones src={earPhonesPreview.src} />
        <ProductShopTitle>EARPHONES</ProductShopTitle>
        <ProductShopButton>
          Shop <img src={vector.src} />
        </ProductShopButton>
      </ProductShopContainer>
    </ProductsShopContainer>
  );
};

export default ProductsShop;
