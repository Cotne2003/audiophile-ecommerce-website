import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 70%;
  background-color: #fff;
  padding: 5.4rem 4.8rem 4.8rem;
  border-radius: 8px;
  justify-content: space-between;
  @media (max-width: 1439px) {
    width: 100%;
  }
`;

export const OrangeTxt = styled.p`
  color: #d87d4a;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.929px;
  text-transform: uppercase;
`;

export const OrangeTxtWrapper = styled.div`
  margin-top: 4.1rem;
  margin-bottom: 1.6rem;
`;

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  column-gap: 1.6rem;
  row-gap: 2.4rem;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const InputsContainerWrapper = styled.div`
  margin-top: 2.4rem;
`;

export const InputTitle = styled.h3`
  color: #000;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.214px;
  margin-bottom: 9px;
`;

export const StyledInput = styled.input`
  width: 100%;
  caret-color: #d87d4a;
  padding: 1.8rem 2.4rem;
  border: none;
  outline: 1px solid #cfcfcf;
  border-radius: 8px;
  color: #000;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.25px;
  &:focus {
    outline: 1px solid #d87d4a;
  }
  &::placeholder {
    opacity: 0.4;
  }
`;
