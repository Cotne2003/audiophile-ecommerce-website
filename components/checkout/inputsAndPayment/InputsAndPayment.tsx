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
    <CheckoutContainer>
      <SecondTitle>CHECKOUT</SecondTitle>
      <form>
        <div>
          <OrangeTxtWrapper>
            <OrangeTxt>billing details</OrangeTxt>
          </OrangeTxtWrapper>
          <InputsContainer>
            <div>
              <InputTitle>Name</InputTitle>
              <StyledInput
                type="text"
                placeholder="Cotne Basiashvili"
                name="name"
              />
            </div>
            <div>
              <InputTitle>Email Address</InputTitle>
              <StyledInput
                type="email"
                placeholder="basiashvilic@gmail.com"
                name="email"
              />
            </div>
            <div>
              <InputTitle>Phone Number</InputTitle>
              <StyledInput
                type="number"
                placeholder="+1 202-555-0136"
                name="phone"
              />
            </div>
          </InputsContainer>
        </div>

        <div>
          <OrangeTxtWrapper>
            <OrangeTxt>shipping info</OrangeTxt>
          </OrangeTxtWrapper>
          <div>
            <InputTitle>Address</InputTitle>
            <StyledInput
              type="text"
              placeholder="1137 Williams Avenue"
              name="addres"
            />
          </div>
          <InputsContainerWrapper>
            <InputsContainer>
              <div>
                <InputTitle>ZIP Code</InputTitle>
                <StyledInput type="number" placeholder="10001" name="zip" />
              </div>
              <div>
                <InputTitle>City</InputTitle>
                <StyledInput type="text" placeholder="Tbilisi" name="city" />
              </div>
              <div>
                <InputTitle>Country</InputTitle>
                <StyledInput type="text" placeholder="Georgia" name="country" />
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
              <StyledInput
                type="number"
                placeholder="238521993"
                name="e-money"
              />
            </div>
            <div>
              <InputTitle>e-Money PIN</InputTitle>
              <StyledInput type="number" placeholder="6891" name="e-money" />
            </div>
          </InputsContainer>
        </div>
      </form>
    </CheckoutContainer>
  );
};

export default InputsAndPayment;
