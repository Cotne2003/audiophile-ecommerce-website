import styled from "styled-components";

export const StyledHeader = styled.header`
  position: absolute;
  left: 10%;
  width: 80%;
  padding: 3.5rem 0;
  margin: 0 auto;
  border-bottom: 1px solid #ffffff21;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1023px) {
    width: 90%;
    left: 5%;
  }
  @media (max-width: 767px) {
    width: 100%;
    left: 0;
    padding: 3.7rem 2.4rem;
  }
`;

export const LogoAndMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4.2rem;
  @media (max-width: 767px) {
    gap: 0;
  }
`;

type Props = {
  display?: string;
};

export const Logo = styled.img<Props>`
  width: 14.3rem;
  height: 2.5rem;
  @media (max-width: 767px) {
    display: ${(props) => (props.display === "footer" ? "block" : "none")};
    margin: ${(props) => (props.display === "footer" ? "0 auto" : "none")};
  }
`;

export const MobilieLogoHidder = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileLogo = styled.img`
  width: 14.3rem;
  height: 2.5rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuIcon = styled.img`
  width: 1.6rem;
  height: 1.5rem;
  @media (min-width: 1023px) {
    display: none;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.4rem;
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const NavText = styled.p`
  color: #fff;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const Cart = styled.img`
  width: 2.3rem;
  height: 2rem;
  cursor: pointer;
  &:hover {
    filter: brightness(0) saturate(100%) invert(45%) sepia(83%) saturate(384%)
      hue-rotate(338deg) brightness(105%) contrast(84%);
  }
`;
