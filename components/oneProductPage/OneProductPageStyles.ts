import styled from "styled-components";

export const HeaderColor = styled.div`
  background-color: black;
  height: 9.7rem;
  @media (max-width: 1023px) {
    height: 9rem;
  }
`;

export const StyledMain = styled.main`
  padding: 7.9rem 10% 16rem;
  @media (max-width: 1023px) {
    padding: 3.3rem 5% 12rem;
  }
  @media (max-width: 767px) {
    padding: 1.6rem 5% 12rem;
  }
`;
