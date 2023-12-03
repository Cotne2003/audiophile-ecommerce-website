import React from "react";
import SectionOne from "./sectionOne/SectionOne";
import SectionTwo from "./sectionTwo/SectionTwo";
import { StyledMain } from "./OneProductPageStyles";

const OneProductPage = () => {
  return (
    <StyledMain>
      <SectionOne />
      <SectionTwo />
    </StyledMain>
  );
};

export default OneProductPage;
