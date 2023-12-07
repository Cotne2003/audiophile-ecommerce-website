import React from "react";
import { SecondStyledSection } from "./SecondSectionStyle";
import ProductsAndPhotos from "./productsAndPhotos/ProductsAndPhotos";
import BestGear from "../../best audio gear/BestGear";

import ProductsShop from "@/components/productsShop/ProductsShop";

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
