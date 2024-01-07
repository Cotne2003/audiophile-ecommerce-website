import React, { useEffect, useState } from "react";
import {
  AddToCart,
  Count,
  CounterIconDiv,
  GoBack,
  ProductCounter,
  ProductImg,
  ProductImgMobile,
  ProductImgTablet,
  ProductPrice,
  ProductText,
  ProductTitle,
  ShopingAreaContainer,
  ShopingAreaDiv,
  ToCartDiv,
} from "./SectionOneStyles";
import plus from "@/public/assets/plus.svg";
import minus from "@/public/assets/minus.svg";
import { DATA, ProductType } from "@/DATA";
import { useRouter, usePathname } from "next/navigation";
import { Product, cartData } from "@/app/states";
import { useRecoilState } from "recoil";
import { v4 } from "uuid";
import { motion } from "framer-motion";

const SectionOne = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [data, setData] = useState<ProductType | null>(null);

  const goBack = () => {
    router.back();
  };

  useEffect(() => {
    const product = DATA.filter((product) => product.link === pathName);
    setData(product[0]);
  }, []);

  const [cart, setCart] = useRecoilState<Product[]>(cartData);

  const addedProduct = () => {
    setCart([
      ...cart,
      {
        id: v4(),
        imgUrl: data?.mainImgDesktopUrl ?? "nothing",
        title: data?.title ?? "nothing",
        price: data?.price ?? "0",
        count: count,
      },
    ]);
  };

  // Set Count //////////////////////////////////////////
  const [count, setCount] = useState(1);

  const countPlus = () => {
    if (count == 9) return;
    setCount(count + 1);
  };
  const countMinus = () => {
    if (count == 1) return;
    setCount(count - 1);
  };

  return (
    <section>
      <GoBack onClick={goBack}>Go Back</GoBack>
      <ShopingAreaContainer>
        <ProductImg
          src={data?.mainImgDesktopUrl}
          as={motion.img}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        />
        <ProductImgTablet
          src={data?.mainImgTabletUrl}
          as={motion.img}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        />
        <ProductImgMobile
          src={data?.mainImgMobileUrl}
          as={motion.img}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        />
        <ShopingAreaDiv
          as={motion.div}
          initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <ProductTitle>{data?.title}</ProductTitle>
          <ProductText>{data?.mainText}</ProductText>
          <ProductPrice>{"$ " + data?.price}</ProductPrice>
          <ToCartDiv>
            <ProductCounter>
              <CounterIconDiv onClick={countMinus}>
                <img src={minus.src} />
              </CounterIconDiv>
              <Count>{count}</Count>
              <CounterIconDiv onClick={countPlus}>
                <img src={plus.src} />
              </CounterIconDiv>
            </ProductCounter>
            <AddToCart
              onClick={addedProduct}
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ADD TO CART
            </AddToCart>
          </ToCartDiv>
        </ShopingAreaDiv>
      </ShopingAreaContainer>
    </section>
  );
};

export default SectionOne;
