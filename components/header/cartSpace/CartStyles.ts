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
  height: 100px;
  width: 100px;
  position: absolute;
  top: 15rem;
  right: 10%;
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
