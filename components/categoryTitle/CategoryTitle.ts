import styled from "styled-components";

export const CategoryDiv = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  padding: 19.5rem 0 9.7rem;
  @media (max-width: 767px) {
    padding: 12.2rem 0 3.2rem;
  }
`;

export const CategoryTitle = styled.h2`
  color: #fff;
  font-size: 4rem;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 1.429px;
  text-transform: uppercase;
  @media (max-width: 767px) {
    font-size: 2.8rem;
    font-weight: 700;
    letter-spacing: 2px;
  }
`;
