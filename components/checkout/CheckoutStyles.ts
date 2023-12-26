import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-top: 3.8rem;
  @media (max-width: 1439px) {
    flex-direction: column;
  }
`;

export const ProductsWrapper = styled.div`
  background-color: #fff;
  padding: 3.2rem;
  border-radius: 8px;
  width: 30%;
  height: 100%;
  @media (max-width: 1439px) {
    width: 100%;
  }
`;

export const Summary = styled.h2`
  color: #000;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1.286px;
  text-transform: uppercase;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 3.2rem;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    color: #000;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 25px;
    opacity: 0.5;
  }
  p {
    color: #000;
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`;
