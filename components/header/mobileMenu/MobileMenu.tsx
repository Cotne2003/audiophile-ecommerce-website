import React from "react";
import { MobileMenuContainer, MobileMenuDiv } from "./MobileMenuStyle";
import ProductsShop from "@/components/productsShop/ProductsShop";
import {
  ProductsShopContainer,
  ProductShopContainer,
  ProductShopImg,
  ProductShopTitle,
  ProductShopButton,
  ProductShopImgEarphones,
} from "@/components/productsShop/ProductsShopStyle";
import Link from "next/link";

import vector from "../../../public/assets/shared/desktop/icon-arrow-right.svg";
import headphonesPreview from "../../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersPreview from "../../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earPhonesPreview from "../../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";

type Props = {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu: React.FC<Props> = ({ menu, setMenu }) => {
  const menuHandler = () => {
    setMenu(false);
  };

  return (
    <>
      <MobileMenuContainer onClick={menuHandler}></MobileMenuContainer>
      <MobileMenuDiv>
        <ProductsShopContainer>
          <ProductShopContainer>
            <Link href={"/headphones"} onClick={menuHandler}>
              <ProductShopImg src={headphonesPreview.src} />
              <ProductShopTitle>HEADPHONES</ProductShopTitle>
              <ProductShopButton>
                Shop <img src={vector.src} />
              </ProductShopButton>
            </Link>
          </ProductShopContainer>
          <ProductShopContainer>
            <Link href={"/speakers"} onClick={menuHandler}>
              <ProductShopImg src={speakersPreview.src} />
              <ProductShopTitle>SPEAKERS</ProductShopTitle>
              <ProductShopButton>
                Shop <img src={vector.src} />
              </ProductShopButton>
            </Link>
          </ProductShopContainer>
          <ProductShopContainer>
            <Link href={"/earphones"} onClick={menuHandler}>
              <ProductShopImgEarphones src={earPhonesPreview.src} />
              <ProductShopTitle>EARPHONES</ProductShopTitle>
              <ProductShopButton>
                Shop <img src={vector.src} />
              </ProductShopButton>
            </Link>
          </ProductShopContainer>
        </ProductsShopContainer>
      </MobileMenuDiv>
    </>
  );
};

export default MobileMenu;
