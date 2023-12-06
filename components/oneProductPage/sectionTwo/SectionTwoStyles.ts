import styled from "styled-components";

export const StyledSection = styled.section`
  margin-top: 16rem;
  @media (max-width: 1439px) {
    margin-top: 12rem;
  }
  @media (max-width: 767px) {
    margin-top: 8.8rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1439px) {
    flex-direction: column;
    gap: 12rem;
  }
  @media (max-width: 767px) {
    gap: 8.8rem;
  }
`;

export const ContentFirstDiv = styled.div`
  width: 63.5rem;
  @media (max-width: 1439px) {
    width: 100%;
  }
`;

export const ContentTitle = styled.h2`
  color: #000;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.857px;
  text-transform: uppercase;
  @media (max-width: 767px) {
    color: #000;
    font-size: 2.4rem;
    letter-spacing: 0.857px;
  }
`;

export const ContentFirstText = styled.p`
  color: #000;
  margin-top: 3.2rem;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
  @media (max-width: 767px) {
    margin-top: 2.4rem;
  }
`;

export const ContentSecondDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  li {
    display: flex;
    gap: 2.4rem;
    align-items: center;
    color: #000;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 25px;
    opacity: 0.5;
  }
  span {
    color: #d87d4a;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 25px;
  }
  @media (max-width: 1439px) {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
    ul {
      margin-right: 20rem;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 2.4rem;
    ul {
      margin-right: 0;
    }
  }
`;

export const ProductImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16rem;
  div {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  @media (max-width: 1439px) {
    div {
      gap: 2rem;
    }
    margin-top: 12rem;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 2rem;
    margin-top: 8.8rem;
  }
`;

export const ProductImgDesktop = styled.img`
  border-radius: 8px;
  width: 44.5rem;
  height: 28rem;
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const ProductImgTablet = styled.img`
  border-radius: 8px;
  width: 27.7rem;
  height: 17.4rem;
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const ProductImgMobile = styled.img`
  border-radius: 8px;
  width: 32.7rem;
  height: 17.4rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SecondProductImgDesktop = styled.img`
  border-radius: 8px;
  width: 63.5rem;
  height: 59.2rem;
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const SecondProductImgTablet = styled.img`
  border-radius: 8px;
  width: 39.5rem;
  height: 36.8rem;
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const SecondProductImgMobile = styled.img`
  border-radius: 8px;
  width: 32.7rem;
  height: 36.8rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const AlsoLikeContainer = styled.div`
  text-align: center;
  margin-top: 16rem;
  @media (max-width: 1439px) {
    margin-top: 12rem;
  }
`;

export const AlsoLikeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6.4rem;
  img {
    width: 35rem;
    height: 31.8rem;
    border-radius: 8px;
  }
  h2 {
    color: #000;
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: 1.714px;
    text-transform: uppercase;
    margin-top: 4rem;
    margin-bottom: 3.2rem;
  }
  @media (max-width: 1439px) {
    img {
      width: 20rem;
      height: 21.8rem;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 5.6rem;
    h2 {
      margin-top: 3.2rem;
    }
  }
`;

export const ProductsShopContainer = styled.div`
  margin-top: 24rem;
  @media (max-width: 1439px) {
    margin-top: 17.2rem;
  }
`;
