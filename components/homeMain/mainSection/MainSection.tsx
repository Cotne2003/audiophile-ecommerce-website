"use client";

import React from "react";
import {
  NewProduct,
  MainHeadphone,
  DivProduct,
  ProductText,
  MainStyledSection,
} from "./MainSectionStyles";
import { SeeProductButton } from "../../buttons/buttons";
import Link from "next/link";
import { motion } from "framer-motion";

const MainSection = () => {
  return (
    <MainStyledSection>
      <DivProduct
        as={motion.div}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <NewProduct>NEW PRODUCT</NewProduct>
        <MainHeadphone>XX99 Mark II HeadphoneS</MainHeadphone>
        <ProductText>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </ProductText>
        <Link href={"/headphones/XX99-Mark-II"}>
          <SeeProductButton
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            See Product
          </SeeProductButton>
        </Link>
      </DivProduct>
    </MainStyledSection>
  );
};

export default MainSection;
