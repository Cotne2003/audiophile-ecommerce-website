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

export const ProductAndPhotoFirstDivSecond = styled.div`
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

export const ProductAndPhotoSecondDivContainer = styled.div`
  margin-top: 4.8rem;
  width: 100%;
  height: 32rem;
  border-radius: 8px;
  padding: 10.1rem 0 0 8%;
  background-image: url("/assets/home/desktop/image-speaker-zx7.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 1023px) {
    background-image: url("/assets/home/tablet/image-speaker-zx7.jpg");
    margin-top: 3.2rem;
  }
  @media (max-width: 767px) {
    background-image: url("/assets/home/mobile/image-speaker-zx7.jpg");
    margin-top: 2.4rem;
  }
`;

// THIRD DIV ///////////////////////////////////////////////

export const ProductAndPhotoThirdDivContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 32rem;
  margin-top: 4.8rem;
  @media (max-width: 1023px) {
    margin-top: 3.2rem;
  }
  @media (max-width: 767px) {
    margin-top: 2.4rem;
    flex-direction: column;
    height: 64rem;
    justify-content: start;
    gap: 2.4rem;
  }
`;

export const ProductAndPhotoThirdDivContainerFirstDiv = styled.div`
  background-image: url("/assets/home/desktop/image-earphones-yx1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 48%;
  border-radius: 8px;
  @media (max-width: 1023px) {
    background-image: url("/assets/home/tablet/image-earphones-yx1.jpg");
  }
  @media (max-width: 767px) {
    background-image: url("/assets/home/mobile/image-earphones-yx1.jpg");
    width: 100%;
    height: 48%;
  }
`;

export const ProductAndPhotoThirdDivContainerSecondDiv = styled.div`
  padding: 10.1rem 0 0 8%;
  width: 48%;
  background-color: #f1f1f1;
  border-radius: 8px;
  @media (max-width: 767px) {
    height: 48%;
    width: 100%;
  }
`;
