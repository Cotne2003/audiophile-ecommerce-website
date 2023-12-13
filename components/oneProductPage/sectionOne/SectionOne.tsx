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
import { Product, cartData, totalPrice } from "@/app/states";
import { useRecoilState } from "recoil";
import { v4 } from "uuid";

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
  const [total, setTotal] = useRecoilState(totalPrice);

  const addedProduct = () => {
    setCart([
      ...cart,
      {
        id: v4(),
        imgUrl: data?.mainImgDesktopUrl ?? "nothing",
        title: data?.title ?? "nothing",
        price: data?.price ?? "0",
      },
    ]);
    const haha = cart.reduce((sum, product) => +product.price + sum, 0);
  };
  console.log(typeof [1, 2]);
  return (
    <section>
      <GoBack onClick={goBack}>Go Back</GoBack>
      <ShopingAreaContainer>
        <ProductImg src={data?.mainImgDesktopUrl} />
        <ProductImgTablet src={data?.mainImgTabletUrl} />
        <ProductImgMobile src={data?.mainImgMobileUrl} />
        <ShopingAreaDiv>
          <ProductTitle>{data?.title}</ProductTitle>
          <ProductText>{data?.mainText}</ProductText>
          <ProductPrice>{"$ " + data?.price}</ProductPrice>
          <ToCartDiv>
            <ProductCounter>
              <CounterIconDiv>
                <img src={minus.src} />
              </CounterIconDiv>
              <Count>1</Count>
              <CounterIconDiv>
                <img src={plus.src} />
              </CounterIconDiv>
            </ProductCounter>
            <AddToCart onClick={addedProduct}>ADD TO CART</AddToCart>
          </ToCartDiv>
        </ShopingAreaDiv>
      </ShopingAreaContainer>
    </section>
  );
};

export default SectionOne;
