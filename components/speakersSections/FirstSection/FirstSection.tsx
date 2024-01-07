"use client";

import React from "react";
import { CategoryDiv, CategoryTitle } from "../../categoryTitle/CategoryTitle";
import { motion } from "framer-motion";

const FirstSection = () => {
  return (
    <section>
      <CategoryDiv>
        <CategoryTitle
          as={motion.h2}
          initial={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          speakers
        </CategoryTitle>
      </CategoryDiv>
    </section>
  );
};

export default FirstSection;
