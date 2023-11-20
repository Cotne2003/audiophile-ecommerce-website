import styled from "styled-components";

export const MainStyledSection = styled.section`
  padding: 30vh 10% 0;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/assets/home/desktop/image-hero.jpg");
  background-position: center;
  @media (max-width: 1023px) {
    background-image: url("/assets/home/tablet/image-header.jpg");
    text-align: center;
  }
  @media (max-width: 767px) {
    background-image: url("/assets/home/mobile/image-header.jpg");
    background-position: center;
    padding-top: 30vh;
  }
`;

export const DivProduct = styled.div`
  max-width: 41rem;
  @media (max-width: 1023px) {
    width: auto;
    margin: 0 auto;
  }
`;

export const NewProduct = styled.h2`
  color: #fff;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 10px;
  text-transform: uppercase;
  opacity: 0.4964;
`;

type Props = {
  widthsize?: string;
};

export const MainHeadphone = styled.h2<Props>`
  color: #fff;
  font-size: 5.6rem;
  font-weight: 700;
  line-height: 5.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 2.4rem;
  width: ${(props) => (props.widthsize === "small" ? "3ch" : "")};
  @media (max-width: 767px) {
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 4rem;
    letter-spacing: 1.286px;
  }
`;

export const ProductText = styled.p<Props>`
  color: #fff;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.5rem;
  margin-top: 2.4rem;
  opacity: 0.75;
  width: ${(props) => (props.widthsize === "small" ? "35ch" : "40ch")};
  @media (max-width: 767px) {
    width: auto;
  }
`;
