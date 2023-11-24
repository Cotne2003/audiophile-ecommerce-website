import React from "react";
import { SecondStyledSection } from "./SecondSectionStyle";
import ProductsShop from "../../productsShop/ProductsShop";
import ProductsAndPhotos from "./productsAndPhotos/ProductsAndPhotos";
import BestGear from "../../best audio gear/BestGear";

const SecondSection = () => {
  return (
    <SecondStyledSection>
      <ProductsShop />
      <ProductsAndPhotos />
      <BestGear />
    </SecondStyledSection>
  );
};

export default SecondSection;
