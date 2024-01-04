"use client";

import Checkout from "@/components/checkout/Checkout";
import { HeaderColor } from "@/components/oneProductPage/OneProductPageStyles";
import React from "react";

const page = () => {
  console.log("test");

  return (
    <main style={{ backgroundColor: "#F1F1F1" }}>
      <HeaderColor></HeaderColor>
      <Checkout />
    </main>
  );
};

export default page;
