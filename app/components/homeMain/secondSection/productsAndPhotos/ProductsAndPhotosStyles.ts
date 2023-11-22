import styled from "styled-components";

export const ProductsAndPhotosContainer = styled.div`
  margin-top: 16.8rem;
`;

export const ProductAndPhotoFirstDivContainer = styled.div``;

export const ProductAndPhotoFirstDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #d87d4a;
  height: 56rem;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  padding: 0 20% 0;
  @media (max-width: 1699px) {
    padding: 0 10% 0;
  }
  @media (max-width: 1199px) {
    padding: 0 5% 0;
  }
  @media (max-width: 1023px) {
    height: 72rem;
    text-align: center;
    flex-direction: column;
    padding: 0;
    justify-content: start;
    gap: 1rem;
  }
  @media (max-width: 767px) {
    height: 60rem;
  }
`;

export const ProductAndPhotoFirstDivSeconst = styled.div`
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ZX9img = styled.img`
  width: 40rem;
  height: 49rem;
  margin-top: 9rem;
  @media (max-width: 1023px) {
    width: 19.7rem;
    height: 23.7rem;
    margin-top: 5.2rem;
  }
  @media (max-width: 767px) {
    width: 17rem;
    height: 20.7rem;
    margin-top: 5.5rem;
  }
`;

// SECOND DIV //////////////////////////////////////////////

export const ProductAndPhotoSecondDivContainer = styled.div``;

export const ProductAndPhotoSecondDiv = styled.div``;
