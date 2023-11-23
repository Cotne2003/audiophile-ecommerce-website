"use client";

import React from "react";
import { StyledFooter } from "./FootersStyles";
import logo from "../../../public/assets/audiophile2.svg";
import { Logo } from "../header/headerStyles";

const Footer = () => {
  return (
    <StyledFooter>
      <Logo src={logo.src} alt="logo" />
    </StyledFooter>
  );
};

export default Footer;
