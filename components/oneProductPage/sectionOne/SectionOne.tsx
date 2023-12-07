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
            <AddToCart>ADD TO CART</AddToCart>
          </ToCartDiv>
        </ShopingAreaDiv>
      </ShopingAreaContainer>
    </section>
  );
};

export default SectionOne;
