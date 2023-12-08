"use client";

import React, { useState } from "react";
import {
  StyledHeader,
  Logo,
  LogoAndMenuContainer,
  Navbar,
  Cart,
  NavText,
  MenuIcon,
  MobileLogo,
} from "./headerStyles";
import logo from "./../../public/assets/audiophile2.svg";
import menuIcon from "./../../public/assets/menu-icon.svg";
import cart from "./../../public/assets/cart/combined-shape.svg";
import Link from "next/link";
import MobileMenu from "./mobileMenu/MobileMenu";
import CartSpace from "./cartSpace/CartSpace";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    setMenu(!menu);
  };

  return (
    <StyledHeader>
      <LogoAndMenuContainer>
        <MenuIcon src={menuIcon.src} onClick={menuHandler} />
        <Link href={"/"}>
          <Logo src={logo.src} alt="Logo" />
        </Link>
      </LogoAndMenuContainer>
      <Link href={"/"}>
        <MobileLogo src={logo.src} alt="Logo" />
      </Link>
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
      {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
      <CartSpace />
    </StyledHeader>
  );
};

export default Header;
