"use client";

import React from "react";
import logo from "./../../public/assets/audiophile2.svg";
import { Logo, NavText } from "../header/headerStyles";
import styles from "./FooterStyles.module.css";
import Link from "next/link";
import FBicon from "/public/assets/shared/desktop/icon-facebook.svg";
import TWicon from "/public/assets/shared/desktop/icon-twitter.svg";
import INSTicon from "/public/assets/shared/desktop/icon-instagram.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.orangeBorder}></div>
      <div className={styles.NavbarContainer}>
        <Link href={"/"}>
          <Logo display={"footer"} src={logo.src} alt="logo" />
        </Link>

        <div className={styles.Navbar}>
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
        </div>
      </div>

      <div className={styles.TextAndIcons}>
        <p className={styles.Text}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - were open 7 days a week.
        </p>
        <div className={styles.icons}>
          <img src={FBicon.src} alt="FBicon" className={styles.icon} />
          <img src={TWicon.src} alt="TWicon" className={styles.icon} />
          <img src={INSTicon.src} alt="INSTicon" className={styles.icon} />
        </div>
      </div>
      <div className={styles.copyAndMobileIcons}>
        <p className={styles.copy}>Copyright 2021. All Rights Reserved</p>
        <div className={styles.mobileIcons}>
          <img src={FBicon.src} alt="FBicon" className={styles.icon} />
          <img src={TWicon.src} alt="TWicon" className={styles.icon} />
          <img src={INSTicon.src} alt="INSTicon" className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
