import React from "react";
import SectionOne from "./sectionOne/SectionOne";
import SectionTwo from "./sectionTwo/SectionTwo";
import { HeaderColor, StyledMain } from "./OneProductPageStyles";

const OneProductPage = () => {
  return (
    <>
      <HeaderColor></HeaderColor>
      <StyledMain>
        <SectionOne />
        <SectionTwo />
      </StyledMain>
    </>
  );
};

export default OneProductPage;
