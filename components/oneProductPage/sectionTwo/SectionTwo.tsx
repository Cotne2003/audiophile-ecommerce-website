import React, { useEffect, useState } from "react";
import {
  AlsoLikeContainer,
  AlsoLikeDiv,
  ContentContainer,
  ContentFirstDiv,
  ContentFirstText,
  ContentSecondDiv,
  ContentTitle,
  ProductImgContainer,
  ProductImgDesktop,
  ProductImgMobile,
  ProductImgTablet,
  ProductsShopContainer,
  SecondProductImgDesktop,
  SecondProductImgMobile,
  SecondProductImgTablet,
  StyledSection,
} from "./SectionTwoStyles";
import { AddToCart } from "../sectionOne/SectionOneStyles";
import XX99markI from "@/public/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import ProductsShop from "@/components/productsShop/ProductsShop";
import BestGear from "@/components/best audio gear/BestGear";
import { DATA, ProductType } from "@/DATA";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SectionTwo = () => {
  const pathName = usePathname();
  const [data, setData] = useState<ProductType | null>(null);
  useEffect(() => {
    const product = DATA.filter((product) => product.link === pathName);
    setData(product[0]);
  }, []);
  return (
    <StyledSection>
      <ContentContainer>
        <ContentFirstDiv>
          <ContentTitle>FEATURES</ContentTitle>
          <ContentFirstText>{data?.firstFeature}</ContentFirstText>
          <ContentFirstText>{data?.secondFeature}</ContentFirstText>
        </ContentFirstDiv>
        <ContentSecondDiv>
          <ContentTitle>in the box</ContentTitle>
          <ul>
            <li>
              <span>{data?.unitRating}</span>
              {data?.unit}
            </li>
            <li>
              <span>{data?.earcupsRating}</span>
              {data?.earcups}
            </li>
            <li>
              <span>{data?.userManualRating}</span>
              {data?.userManual}
            </li>
            <li>
              <span>{data?.cableRating}</span>
              {data?.cable}
            </li>
            <li>
              <span>{data?.travelOrCableRating}</span>
              {data?.travelOrCable}
            </li>
          </ul>
        </ContentSecondDiv>
      </ContentContainer>

      <ProductImgContainer>
        <div>
          <ProductImgDesktop src={data?.imgGallery1DesktopUrl} alt="" />
          <ProductImgDesktop src={data?.imgGallery2DesktopUrl} alt="" />
          <ProductImgTablet src={data?.imgGallery1TabletUrl} alt="" />
          <ProductImgTablet src={data?.imgGallery2TabletUrl} alt="" />
          <ProductImgMobile src={data?.imgGallery1MobileUrl} alt="" />
          <ProductImgMobile src={data?.imgGallery2MobileUrl} alt="" />
        </div>
        <SecondProductImgDesktop src={data?.imgGallery3DesktopUrl} alt="" />
        <SecondProductImgTablet src={data?.imgGallery3TabletUrl} alt="" />
        <SecondProductImgMobile src={data?.imgGallery3MobileUrl} alt="" />
      </ProductImgContainer>

      <AlsoLikeContainer>
        <ContentTitle>you may also like</ContentTitle>
        <AlsoLikeDiv>
          <div>
            <img src={data?.alsoLikeImgUrl1} alt="" />
            <h2>{data?.alsoLikeTitle1}</h2>
            <Link href={data?.alsoLikeLink1 || ""}>
              <AddToCart>See Product</AddToCart>
            </Link>
          </div>
          <div>
            <img src={data?.alsoLikeImgUrl2} alt="" />
            <h2>{data?.alsoLikeTitle2}</h2>
            <Link href={data?.alsoLikeLink2 || ""}>
              <AddToCart>See Product</AddToCart>
            </Link>
          </div>
          <div>
            <img src={data?.alsoLikeImgUrl3} alt="" />
            <h2>{data?.alsoLikeTitle3}</h2>
            <Link href={data?.alsoLikeLink3 || ""}>
              <AddToCart>See Product</AddToCart>
            </Link>
          </div>
        </AlsoLikeDiv>
      </AlsoLikeContainer>

      <ProductsShopContainer>
        <ProductsShop />
      </ProductsShopContainer>

      <BestGear />
    </StyledSection>
  );
};

export default SectionTwo;
