import styled from "styled-components";

export const ProductsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 3.1rem;
`;

export const ProductDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgAndPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ProductImg = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 8px;
`;

export const TitleAndPriceDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.h2`
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 25px;
`;

export const Price = styled.p`
  color: #000;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 25px;
  opacity: 0.5;
`;

// product counter //////////////////////////////////////////////////////////

export const ProductCounter = styled.div`
  display: flex;
  align-items: center;
  background: #f1f1f1;
  height: 4.5rem;
  gap: 1rem;
`;

export const Count = styled.p`
  color: #000;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const CounterIconDiv = styled.div`
  width: 3rem;
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
