import React from "react";
import {
  ProductsShopContainer,
  ProductShopContainer,
  ProductShopTitle,
  ProductShopButton,
  ProductShopImg,
  ProductShopImgEarphones,
} from "./ProductsShopStyle";
import vector from "./../../public/assets/shared/desktop/icon-arrow-right.svg";
import headphonesPreview from "./../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersPreview from "./../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earPhonesPreview from "./../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import Link from "next/link";

const ProductsShop = () => {
  return (
    <ProductsShopContainer>
      <Link href={"/headphones"}>
        <ProductShopContainer>
          <ProductShopImg src={headphonesPreview.src} />
          <ProductShopTitle>HEADPHONES</ProductShopTitle>
          <ProductShopButton>
            Shop <img src={vector.src} />
          </ProductShopButton>
        </ProductShopContainer>
      </Link>
      <Link href={"/speakers"}>
        <ProductShopContainer>
          <ProductShopImg src={speakersPreview.src} />
          <ProductShopTitle>SPEAKERS</ProductShopTitle>
          <ProductShopButton>
            Shop <img src={vector.src} />
          </ProductShopButton>
        </ProductShopContainer>
      </Link>
      <Link href={"/earphones"}>
        <ProductShopContainer>
          <ProductShopImgEarphones src={earPhonesPreview.src} />
          <ProductShopTitle>EARPHONES</ProductShopTitle>
          <ProductShopButton>
            Shop <img src={vector.src} />
          </ProductShopButton>
        </ProductShopContainer>
      </Link>
    </ProductsShopContainer>
  );
};

export default ProductsShop;
