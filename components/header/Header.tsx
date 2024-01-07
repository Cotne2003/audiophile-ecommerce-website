"use client";

import React, { useState } from "react";
import {
  StyledHeader,
  Logo,
  LogoAndMenuContainer,
  Navbar,
  NavText,
  MenuIcon,
  MobileLogo,
  MobilieLogoHidder,
  Cart,
} from "./headerStyles";
import logo from "./../../public/assets/audiophile2.svg";
import menuIcon from "./../../public/assets/menu-icon.svg";
import cart from "./../../public/assets/cart/combined-shape.svg";
import Link from "next/link";
import MobileMenu from "./mobileMenu/MobileMenu";
import CartSpace from "./cartSpace/CartSpace";
import { motion } from "framer-motion";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    setMenu(!menu);
  };
  const [cartSpace, setCartSpace] = useState(false);
  const cartSpaceHandler = () => {
    setCartSpace(!cartSpace);
  };

  return (
    <StyledHeader>
      <LogoAndMenuContainer>
        <MenuIcon src={menuIcon.src} onClick={menuHandler} />
        <Link href={"/"}>
          <Logo src={logo.src} alt="Logo" />
        </Link>
      </LogoAndMenuContainer>
      <MobilieLogoHidder>
        <Link href={"/"}>
          <MobileLogo src={logo.src} alt="Logo" />
        </Link>
      </MobilieLogoHidder>
      <Navbar>
        <Link href={"/"}>
          <NavText
            as={motion.p}
            whileHover={{ scale: 1.1, color: "#d87d4a" }}
            whileTap={{ scale: 0.9 }}
          >
            HOME
          </NavText>
        </Link>
        <Link href={"/headphones"}>
          <NavText
            as={motion.p}
            whileHover={{ scale: 1.1, color: "#d87d4a" }}
            whileTap={{ scale: 0.9 }}
          >
            HEADPHONES
          </NavText>
        </Link>
        <Link href={"/speakers"}>
          <NavText
            as={motion.p}
            whileHover={{ scale: 1.1, color: "#d87d4a" }}
            whileTap={{ scale: 0.9 }}
          >
            SPEAKERS
          </NavText>
        </Link>
        <Link href={"/earphones"}>
          <NavText
            as={motion.p}
            whileHover={{ scale: 1.1, color: "#d87d4a" }}
            whileTap={{ scale: 0.9 }}
          >
            EARPHONES
          </NavText>
        </Link>
      </Navbar>
      <Cart
        src={cart.src}
        onClick={cartSpaceHandler}
        as={motion.img}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        style={
          cartSpace
            ? {
                filter:
                  "brightness(0) saturate(100%) invert(45%) sepia(83%) saturate(384%) hue-rotate(338deg) brightness(105%) contrast(84%)",
              }
            : {}
        }
      />
      {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
      {cartSpace && (
        <CartSpace cartSpace={cartSpace} setCartSpace={setCartSpace} />
      )}
    </StyledHeader>
  );
};

export default Header;
