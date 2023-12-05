import styled from "styled-components";

export const StyledSection = styled.section`
  margin-top: 16rem;
  @media (max-width: 1439px) {
    margin-top: 12rem;
  }
  @media (max-width: 767px) {
    margin-top: 8.8rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1439px) {
    flex-direction: column;
    gap: 12rem;
  }
  @media (max-width: 767px) {
    gap: 8.8rem;
  }
`;

export const ContentFirstDiv = styled.div`
  width: 63.5rem;
  @media (max-width: 1439px) {
    width: 100%;
  }
`;

export const ContentTitle = styled.h2`
  color: #000;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.857px;
  text-transform: uppercase;
  @media (max-width: 767px) {
    color: #000;
    font-size: 2.4rem;
    letter-spacing: 0.857px;
  }
`;

export const ContentFirstText = styled.p`
  color: #000;
  margin-top: 3.2rem;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
  @media (max-width: 767px) {
    margin-top: 2.4rem;
  }
`;

export const ContentSecondDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  li {
    display: flex;
    gap: 2.4rem;
    align-items: center;
    color: #000;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 25px;
    opacity: 0.5;
  }
  span {
    color: #d87d4a;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 25px;
  }
  @media (max-width: 1439px) {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
    ul {
      margin-right: 20rem;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 2.4rem;
    ul {
      margin-right: 0;
    }
  }
`;
