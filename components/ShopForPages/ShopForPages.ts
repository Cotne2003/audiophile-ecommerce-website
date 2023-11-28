import styled from "styled-components";

type Props = {
  height?: string;
  direction?: string;
};

export const ShopContainer = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${(props) => (props.height === "enable" ? "16rem" : "")};
  @media (max-width: 1249px) {
    flex-direction: ${(props) =>
      props.direction === "reverse" ? "column-reverse" : "column"};
    margin-top: ${(props) => (props.height === "enable" ? "12rem" : "")};
    text-align: center;
    gap: 5.2rem;
  }
`;

export const ShopImg = styled.img`
  width: 54rem;
  height: 56rem;
  border-radius: 8px;
  @media (max-width: 1249px) {
    width: 100%;
    height: auto;
  }
`;

export const ShopDiv = styled.div`
  width: 44.5rem;
  @media (max-width: 1249px) {
    width: 100%;
  }
`;

export const ShopNewProduct = styled.p`
  color: #d87d4a;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 10px;
  text-transform: uppercase;
`;

export const ShopTitle = styled.h2`
  margin-top: 1.6rem;
  color: #000;
  font-size: 4rem;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 1.429px;
  text-transform: uppercase;
  @media (max-width: 1249px) {
    width: 44.5rem;
    margin: 1.6rem auto 0;
  }

  @media (max-width: 767px) {
    margin-top: 2.4rem;
    width: 30rem;
  }
`;

export const ShopText = styled.p`
  margin-top: 3.2rem;
  color: #000;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
  @media (max-width: 767px) {
    margin-top: 2.4rem;
  }
`;
