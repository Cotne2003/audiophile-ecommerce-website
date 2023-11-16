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
  @media (max-width: 768px) {
    width: 90%;
    left: 5%;
  }
`;

export const LogoAndMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4.2rem;
`;

export const Logo = styled.img`
  width: 14.3rem;
  height: 2.5rem;
`;

export const MenuIcon = styled.img`
  width: 1.6rem;
  height: 1.5rem;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.4rem;
  @media (max-width: 768px) {
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
  transition: ease 0.3s;
  &:hover {
    color: #d87d4a;
  }
`;

export const Cart = styled.img`
  width: 2.3rem;
  height: 2rem;
  cursor: pointer;
`;
