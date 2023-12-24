import styled from "styled-components";

export const GoBack = styled.p`
  color: #000;
  width: 7ch;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
  cursor: pointer;
`;

export const ShopingAreaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5.6rem;
  @media (max-width: 1439px) {
    margin: 2.4rem;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 3.2rem;
  }
`;

export const ProductImg = styled.img`
  width: 54rem;
  height: 56rem;
  border-radius: 8px;
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const ProductImgTablet = styled.img`
  width: 28.1rem;
  height: 48rem;
  border-radius: 8px;
  @media (min-width: 1440px) {
    display: none;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const ProductImgMobile = styled.img`
  width: 32.7rem;
  height: 32.7rem;
  border-radius: 8px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ShopingAreaDiv = styled.div`
  width: 44.5rem;
  @media (max-width: 1439px) {
    width: 33.9rem;
  }
`;

export const ProductTitle = styled.h2`
  color: #000;
  font-size: 4rem;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 1.429px;
  text-transform: uppercase;
  @media (max-width: 1439px) {
    font-size: 2.8rem;
    line-height: 32px;
    letter-spacing: 1px;
  }
  @media (min-width: 768px) {
    line-height: normal;
  }
`;

export const ProductText = styled.p`
  color: #000;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
  margin-top: 3.2rem;
  @media (min-width: 768px) {
    margin-top: 2.4rem;
  }
`;

export const ProductPrice = styled.p`
  color: #000;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1.286px;
  text-transform: uppercase;
  margin-top: 3.2rem;
  @media (min-width: 768px) {
    margin-top: 2.4rem;
  }
`;

export const ToCartDiv = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  margin-top: 4.7rem;
  @media (max-width: 1439px) {
    margin-top: 3.1rem;
  }
`;

export const ProductCounter = styled.div`
  display: flex;
  align-items: center;
  background: #f1f1f1;
  height: 4.5rem;
  gap: 2rem;
  width: 110px;
`;

export const Count = styled.p`
  color: #000;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const CounterIconDiv = styled.div`
  width: 3.2rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    img {
      filter: brightness(0) saturate(100%) invert(45%) sepia(83%) saturate(384%)
        hue-rotate(338deg) brightness(105%) contrast(84%);
    }
  }
`;

export const AddToCart = styled.button`
  cursor: pointer;
  padding: 1.5rem 3rem 1.5rem 3.4rem;
  background-color: #d87d4a;
  border: none;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  &:active {
    background-color: #fbaf85;
  }
`;
