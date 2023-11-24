import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20rem;
  width: 100%;
  height: 58.8rem;
  @media (max-width: 1339px) {
    flex-direction: column-reverse;
    margin-top: 9.6rem;
    gap: 6.3rem;
    height: auto;
  }
  @media (max-width: 767px) {
    margin-top: 12rem;
    gap: 4rem;
  }
`;

export const FirstDiv = styled.div`
  width: 44.5rem;
  @media (max-width: 1339px) {
    width: 100%;
    text-align: center;
    padding: 0 10% 0;
  }
  @media (max-width: 767px) {
    padding: 0;
  }
`;

export const SpanOfBest = styled.span`
  color: #d87d4a;
`;

export const PrimaryText = styled.p`
  color: #000;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
  margin-top: 3.2rem;
`;

export const SecondDiv = styled.div`
  background-image: url("/assets/shared/desktop/image-best-gear.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 58.8rem;
  height: 100%;
  border-radius: 8px;
  @media (max-width: 1339px) {
    width: 100%;
    background-image: url("/assets/shared/tablet/image-best-gear.jpg");
    height: 30rem;
  }
  @media (max-width: 767px) {
    background-image: url("/assets/shared/mobile/image-best-gear.jpg");
  }
`;
