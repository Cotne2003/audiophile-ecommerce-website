import React from "react";
import { SecondStyledSection } from "./SecondSectionStyle";
import ProductsShop from "../../productsShop/ProductsShop";
import ProductsAndPhotos from "./productsAndPhotos/ProductsAndPhotos";

const SecondSection = () => {
  return (
    <SecondStyledSection>
      <ProductsShop />
      <ProductsAndPhotos />
    </SecondStyledSection>
  );
};

export default SecondSection;
