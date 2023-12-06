import React from "react";
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
import { DATA } from "@/DATA";

const SectionTwo = () => {
  const zx7 = DATA[4];
  return (
    <StyledSection>
      <ContentContainer>
        <ContentFirstDiv>
          <ContentTitle>FEATURES</ContentTitle>
          <ContentFirstText>{zx7.firstFeature}</ContentFirstText>
          <ContentFirstText>{zx7.secondFeature}</ContentFirstText>
        </ContentFirstDiv>
        <ContentSecondDiv>
          <ContentTitle>in the box</ContentTitle>
          <ul>
            <li>
              <span>{zx7.unitRating}</span>
              {zx7.unit}
            </li>
            <li>
              <span>{zx7.earcupsRating}</span>
              {zx7.earcups}
            </li>
            <li>
              <span>{zx7.userManualRating}</span>
              {zx7.userManual}
            </li>
            <li>
              <span>{zx7.cableRating}</span>
              {zx7.cable}
            </li>
            <li>
              <span>{zx7.travelOrCableRating}</span>
              {zx7.travelOrCable}
            </li>
          </ul>
        </ContentSecondDiv>
      </ContentContainer>

      <ProductImgContainer>
        <div>
          <ProductImgDesktop src={zx7.imgGallery1DesktopUrl} alt="" />
          <ProductImgDesktop src={zx7.imgGallery2DesktopUrl} alt="" />
          <ProductImgTablet src={zx7.imgGallery1TabletUrl} alt="" />
          <ProductImgTablet src={zx7.imgGallery2TabletUrl} alt="" />
          <ProductImgMobile src={zx7.imgGallery1MobileUrl} alt="" />
          <ProductImgMobile src={zx7.imgGallery2MobileUrl} alt="" />
        </div>
        <SecondProductImgDesktop src={zx7.imgGallery3DesktopUrl} alt="" />
        <SecondProductImgTablet src={zx7.imgGallery3TabletUrl} alt="" />
        <SecondProductImgMobile src={zx7.imgGallery3MobileUrl} alt="" />
      </ProductImgContainer>

      <AlsoLikeContainer>
        <ContentTitle>you may also like</ContentTitle>
        <AlsoLikeDiv>
          <div>
            <img src={zx7.alsoLikeImgUrl1} alt="" />
            <h2>XX99 MARK I</h2>
            <AddToCart>See Product</AddToCart>
          </div>
          <div>
            <img src={zx7.alsoLikeImgUrl2} alt="" />
            <h2>XX59</h2>
            <AddToCart>See Product</AddToCart>
          </div>
          <div>
            <img src={zx7.alsoLikeImgUrl3} alt="" />
            <h2>ZX9 SPEAKER</h2>
            <AddToCart>See Product</AddToCart>
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
