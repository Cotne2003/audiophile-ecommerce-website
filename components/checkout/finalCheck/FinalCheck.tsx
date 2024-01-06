import React, { useEffect, useState } from "react";
import styles from "./FinalCheckStyles.module.css";
import { SecondTitle } from "@/components/texts/Titles";
import { CheckoutBtn } from "@/components/header/cartSpace/CartSpaceStyles";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { Product, cartData } from "@/app/states";

const FinalCheck = () => {
  const cart = useRecoilValue<Product[]>(cartData);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const cartModel = [...cart];
    const sumOfProducts = cartModel.reduce(
      (sum, product) => Number(product.price) * product.count + sum,
      0
    );
    setTotal(sumOfProducts);
  }, [cart]);
  return (
    <div className={styles.finalContainer}>
      <div className={styles.finalCheckWrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <circle cx="32" cy="32" r="32" fill="#D87D4A" />
          <path
            d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812"
            stroke="white"
            strokeWidth="4"
          />
        </svg>
        <SecondTitle>THANK YOU FOR YOUR ORDER</SecondTitle>
        <p className={styles.firstPar}>
          You will receive an email confirmation shortly.
        </p>
        <div className={styles.itemsCont}>
          <div className={styles.firstItem}>
            <div className={styles.productInfo}>
              <div className={styles.imgPriceName}>
                <img src={cart[0].imgUrl} alt="" />
                <div>
                  <h3>{cart[0].title}</h3>
                  <p>${cart[0].price}</p>
                </div>
              </div>
              <p>x{cart[0].count}</p>
            </div>
            <p className={styles.otherItems}>
              {cart.length === 1
                ? ``
                : cart.length === 2
                ? `and 1 item`
                : `and ${cart.length - 1} other items`}
            </p>
          </div>
          <div className={styles.secondItem}>
            <p>grand total</p>
            <p>${total + 50}</p>
          </div>
        </div>
        <Link href={"/"}>
          <CheckoutBtn>BACK TO HOME</CheckoutBtn>
        </Link>
      </div>
    </div>
  );
};

export default FinalCheck;
