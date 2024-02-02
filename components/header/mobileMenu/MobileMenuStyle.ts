import styled from "styled-components";

export const MobileMenuContainer = styled.div`
  height: 150vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.425);
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MobileMenuDiv = styled.div`
  padding: 8.4rem 5% 3.5rem;
  background-color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 100%;
  position: absolute;
  top: 9rem;
  left: 0;
  z-index: 999;
  background-color: #fff;
  @media (min-width: 1024px) {
    display: none;
  }
`;
