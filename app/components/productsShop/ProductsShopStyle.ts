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
  border-radius: 8px;
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
