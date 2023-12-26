import React from "react";
import {
  CheckoutContainer,
  InputTitle,
  InputsContainer,
  InputsContainerWrapper,
  OrangeTxt,
  OrangeTxtWrapper,
  StyledInput,
} from "./InputsAndPaymentStyles.ts";
import { SecondTitle } from "@/components/texts/Titles";

const InputsAndPayment = () => {
  return (
    <CheckoutContainer style={{ width: "60%" }}>
      <SecondTitle>CHECKOUT</SecondTitle>
      <form>
        <div>
          <OrangeTxtWrapper>
            <OrangeTxt>billing details</OrangeTxt>
          </OrangeTxtWrapper>
          <InputsContainer>
            <div>
              <InputTitle>Name</InputTitle>
              <StyledInput type="text" placeholder="Cotne Basiashvili" />
            </div>
            <div>
              <InputTitle>Email Address</InputTitle>
              <StyledInput type="email" placeholder="basiashvilic@gmail.com" />
            </div>
            <div>
              <InputTitle>Phone Number</InputTitle>
              <StyledInput type="number" placeholder="+1 202-555-0136" />
            </div>
          </InputsContainer>
        </div>

        <div>
          <OrangeTxtWrapper>
            <OrangeTxt>shipping info</OrangeTxt>
          </OrangeTxtWrapper>
          <div>
            <InputTitle>Address</InputTitle>
            <StyledInput type="text" placeholder="1137 Williams Avenue" />
          </div>
          <InputsContainerWrapper>
            <InputsContainer>
              <div>
                <InputTitle>ZIP Code</InputTitle>
                <StyledInput type="number" placeholder="10001" />
              </div>
              <div>
                <InputTitle>City</InputTitle>
                <StyledInput type="text" placeholder="Tbilisi" />
              </div>
              <div>
                <InputTitle>Country</InputTitle>
                <StyledInput type="text" placeholder="Georgia" />
              </div>
            </InputsContainer>
          </InputsContainerWrapper>
        </div>

        <div>
          <OrangeTxtWrapper>
            <OrangeTxt>payment details</OrangeTxt>
          </OrangeTxtWrapper>
          <InputsContainer>
            <div>
              <InputTitle>e-Money Number</InputTitle>
              <StyledInput type="number" placeholder="238521993" />
            </div>
            <div>
              <InputTitle>e-Money PIN</InputTitle>
              <StyledInput type="number" placeholder="6891" />
            </div>
          </InputsContainer>
        </div>
      </form>
    </CheckoutContainer>
  );
};

export default InputsAndPayment;
