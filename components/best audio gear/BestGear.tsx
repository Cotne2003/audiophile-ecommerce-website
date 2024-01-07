"use client";

import React from "react";
import {
  Container,
  FirstDiv,
  SpanOfBest,
  PrimaryText,
  SecondDiv,
} from "./BestGearStyles";
import { SecondTitleBig } from "../texts/Titles";
import { motion } from "framer-motion";

const BestGear = () => {
  return (
    <Container>
      <FirstDiv
        as={motion.div}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <SecondTitleBig>
          Bringing you the <SpanOfBest>best</SpanOfBest> audio gear
        </SecondTitleBig>
        <PrimaryText>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </PrimaryText>
      </FirstDiv>

      <SecondDiv
        as={motion.div}
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      ></SecondDiv>
    </Container>
  );
};

export default BestGear;
