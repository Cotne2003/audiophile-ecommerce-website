import styled from "styled-components";

type Props = {
  color?: string;
  fill?: string;
};

export const SeeProductButton = styled.button<Props>`
  background: ${(props) =>
    props.color === "black"
      ? "#000000"
      : props.fill === "none"
      ? "inherit"
      : "#D87D4A"};
  border: none;
  color: #fff;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 1.5rem 3rem;
  margin-top: ${(props) => (props.fill === "none" ? "3.2rem" : "4rem")};
  color: ${(props) => (props.fill === "none" ? "#000000" : "white")};
  border: ${(props) => (props.fill === "none" ? "1px solid #000" : "white")};
  cursor: pointer;
  &:active {
    background: ${(props) =>
      props.color === "black"
        ? "#4C4C4C"
        : props.fill === "none"
        ? "#000"
        : "#fbaf85"};
    color: ${(props) => (props.fill === "none" ? "#FFFFFF" : "")};
  }

  @media (max-width: 767px) {
    margin-top: 2.8rem;
  }
`;
