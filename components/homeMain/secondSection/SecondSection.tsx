import React from "react";
import { SecondStyledSection } from "./SecondSectionStyle";
import ProductsAndPhotos from "./productsAndPhotos/ProductsAndPhotos";
import BestGear from "../../best audio gear/BestGear";

import dynamic from "next/dynamic";

const DynamicLink = dynamic(() => import("../../productsShop/ProductsShop"), {
  ssr: false,
});

const SecondSection = () => {
  return (
    <SecondStyledSection>
      <DynamicLink />
      <ProductsAndPhotos />
      <BestGear />
    </SecondStyledSection>
  );
};

export default SecondSection;
