import styled from "styled-components";

export const ProductsShopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 6.8rem;
  }
`;

export const ProductShopContainer = styled.div`
  background-color: #f1f1f1;
  width: 35rem;
  height: 20.4rem;
  text-align: center;
  padding-top: 11.6rem;
  position: relative;
  border-radius: 8px;
  &:hover {
    button {
      color: #d87d4a;
    }
  }
  cursor: pointer;
  @media (max-width: 1439px) {
    width: 27rem;
    padding-top: 11.6rem;
  }
  @media (max-width: 1023px) {
    width: 22.3rem;
    height: 16.5rem;
    padding-top: 8.8rem;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ProductShopTitle = styled.h2`
  color: #000;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1.286px;
  text-transform: uppercase;
  @media (max-width: 1023px) {
    font-size: 1.5rem;
  }
`;

export const ProductShopButton = styled.button`
  color: #000;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 1.3rem;
  border: none;
  margin: 1.5rem auto;
  cursor: pointer;
  transition: ease 0.3s;
`;

export const ProductShopImg = styled.img`
  position: absolute;
  bottom: 7rem;
  left: 5rem;
  width: 25rem;
  height: 25rem;
  @media (max-width: 1439px) {
    left: 1rem;
  }
  @media (max-width: 1023px) {
    width: 13rem;
    height: 13rem;
    left: 4.5rem;
    bottom: 8rem;
  }
  @media (max-width: 767px) {
    position: static;
    margin-top: -30rem;
  }
`;

export const ProductShopImgEarphones = styled(ProductShopImg)`
  width: 29rem;
  left: 3rem;
  @media (max-width: 1439px) {
    left: -1rem;
  }
  @media (max-width: 1023px) {
    width: 14rem;
    height: 12rem;
    left: 4rem;
  }
`;
