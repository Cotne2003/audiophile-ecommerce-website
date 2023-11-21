import styled from "styled-components";

type Props = {
  color?: string;
};

export const SeeProductButton = styled.button<Props>`
  background: ${(props) => (props.color === "black" ? "#000000" : "#D87D4A")};
  border: none;
  color: #fff;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 1.5rem 3rem;
  margin-top: 4rem;
  cursor: pointer;
  &:active {
    background: ${(props) => (props.color === "black" ? "#4C4C4C" : "#fbaf85")};
  }
  @media (max-width: 767px) {
    margin-top: 2.8rem;
  }
`;
