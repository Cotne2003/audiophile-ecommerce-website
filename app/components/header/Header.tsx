"use client";

import React from "react";
import {
  StyledHeader,
  Logo,
  LogoAndMenuContainer,
  Navbar,
  Cart,
  NavText,
  MenuIcon,
} from "./headerStyles";
import logo from "../../../public/assets//audiophile2.svg";
import menuIcon from "../../../public/assets/menu-icon.svg";
import cart from "../../../public/assets/cart/combined-shape.svg";
import Link from "next/link";

const Header = () => {
  return (
    <StyledHeader>
      <LogoAndMenuContainer>
        <MenuIcon src={menuIcon.src} />
        <Link href={"/"}>
          <Logo src={logo.src} alt="Logo" />
        </Link>
      </LogoAndMenuContainer>
      <Navbar>
        <Link href={"/"}>
          <NavText>HOME</NavText>
        </Link>
        <Link href={"/headphones"}>
          <NavText>HEADPHONES</NavText>
        </Link>
        <Link href={"/speakers"}>
          <NavText>SPEAKERS</NavText>
        </Link>
        <Link href={"/earphones"}>
          <NavText>EARPHONES</NavText>
        </Link>
      </Navbar>
      <Cart src={cart.src} />
    </StyledHeader>
  );
};

export default Header;
