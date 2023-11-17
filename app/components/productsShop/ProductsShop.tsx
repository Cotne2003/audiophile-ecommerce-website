import React from "react";
import {
  ProductsShopContainer,
  ProductShopContainer,
  ProductShopTitle,
  ProductShopButton,
} from "./ProductsShopStyle";
import vector from "../../../public/assets/vector-icon.svg";

const ProductsShop = () => {
  return (
    <ProductsShopContainer>
      <ProductShopContainer>
        <ProductShopTitle>HEADPHONES</ProductShopTitle>
        <ProductShopButton>
          Shop <img src={vector.src} />
        </ProductShopButton>
      </ProductShopContainer>
      <ProductShopContainer>
        <ProductShopTitle>SPEAKERS</ProductShopTitle>
        <ProductShopButton>
          Shop <img src={vector.src} />
        </ProductShopButton>
      </ProductShopContainer>
      <ProductShopContainer>
        <ProductShopTitle>EARPHONES</ProductShopTitle>
        <ProductShopButton>
          Shop <img src={vector.src} />
        </ProductShopButton>
      </ProductShopContainer>
    </ProductsShopContainer>
  );
};

export default ProductsShop;
