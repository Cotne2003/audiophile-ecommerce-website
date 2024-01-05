import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.425);
  z-index: 100;
  left: 0;
  top: 0;
  position: fixed;
`;

export const CartDiv = styled.div`
  border-radius: 8px;
  background: #fff;
  padding: 3.2rem 3.2rem 3.1rem 3.3rem;
  width: 37.7rem;
  position: absolute;
  top: 15rem;
  right: 0;
  z-index: 999;
  @media (max-width: 767px) {
    width: 90%;
    left: 5%;
    right: 5%;
  }
`;

export const TitleAndRemove = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartTitle = styled.h2`
  color: #000;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1.286px;
  text-transform: uppercase;
`;

export const Remove = styled.p`
  color: #000;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 25px;
  text-decoration-line: underline;
  opacity: 0.5;
  cursor: pointer;
  &:active {
    color: #d87d4a;
  }
`;

export const TotalAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 2.4rem;
`;
export const TotalAndFullPriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Total = styled.p`
  color: #000;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
`;

export const FullPrice = styled.p`
  color: #000;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const CheckoutBtn = styled.button`
  width: 100%;
  background: #d87d4a;
  border: none;
  padding: 1.5rem 0;
  text-align: center;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  &:active {
    background-color: #fbaf85;
  }
`;

export const ProductsContainer = styled.div`
  overflow-y: scroll;
  max-height: 32rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;
