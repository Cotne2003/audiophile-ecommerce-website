import styled from "styled-components";

export const ProductsShopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rem 10%;
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
`;

export const ProductShopTitle = styled.h2`
  color: #000;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1.286px;
  text-transform: uppercase;
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
`;

export const ProductShopImg = styled.img`
  position: absolute;
  bottom: 7rem;
  left: 5rem;
  width: 25rem;
  height: 25rem;
`;

export const ProductShopImgEarphones = styled(ProductShopImg)`
  width: 29rem;
  left: 3rem;
`;
