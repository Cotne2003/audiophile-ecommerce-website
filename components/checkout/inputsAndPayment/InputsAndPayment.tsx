import React, { useState } from "react";
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
import { useForm } from "react-hook-form";
import { CheckoutBtn } from "@/components/header/cartSpace/CartSpaceStyles";
import FinalCheck from "../finalCheck/FinalCheck";

type DataType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: number;
  city: string;
  country: string;
  eMoneyNum: number;
  eMoneyPin: number;
};

const InputsAndPayment = () => {
  const [finalCheck, setFinalCheck] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataType>();
  const onSubmit = () => {
    if (
      errors.name?.message === undefined &&
      errors.email?.message === undefined &&
      errors.phone?.message === undefined &&
      errors.address?.message === undefined &&
      errors.zip?.message === undefined &&
      errors.city?.message === undefined &&
      errors.country?.message === undefined &&
      errors.eMoneyNum?.message === undefined &&
      errors.eMoneyPin?.message === undefined
    ) {
      setFinalCheck(true);
    }
  };
  return (
    <>
      <CheckoutContainer>
        <SecondTitle>CHECKOUT</SecondTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("name", {
                    required: {
                      value: true,
                      message: "name cannot be empty",
                    },
                  })}
                  style={
                    errors.name?.message ? { outline: "2px solid #FF7979" } : {}
                  }
                />
              </div>
              <div>
                <InputTitle>Email Address</InputTitle>
                <StyledInput
                  type="email"
                  placeholder="basiashvilic@gmail.com"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email cannot be empty",
                    },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Looks like this is not an email",
                    },
                  })}
                  style={
                    errors.email?.message
                      ? { outline: "2px solid #FF7979" }
                      : {}
                  }
                />
              </div>
              <div>
                <InputTitle>Phone Number</InputTitle>
                <StyledInput
                  type="number"
                  placeholder="+1 202-555-0136"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "phone cannot be empty",
                    },
                  })}
                  style={
                    errors.phone?.message
                      ? { outline: "2px solid #FF7979" }
                      : {}
                  }
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
                {...register("address", {
                  required: {
                    value: true,
                    message: "address cannot be empty",
                  },
                })}
                style={
                  errors.address?.message
                    ? { outline: "2px solid #FF7979" }
                    : {}
                }
              />
            </div>
            <InputsContainerWrapper>
              <InputsContainer>
                <div>
                  <InputTitle>ZIP Code</InputTitle>
                  <StyledInput
                    type="number"
                    placeholder="10001"
                    {...register("zip", {
                      required: {
                        value: true,
                        message: "zip cannot be empty",
                      },
                    })}
                    style={
                      errors.zip?.message
                        ? { outline: "2px solid #FF7979" }
                        : {}
                    }
                  />
                </div>
                <div>
                  <InputTitle>City</InputTitle>
                  <StyledInput
                    type="text"
                    placeholder="Tbilisi"
                    {...register("city", {
                      required: {
                        value: true,
                        message: "city cannot be empty",
                      },
                    })}
                    style={
                      errors.city?.message
                        ? { outline: "2px solid #FF7979" }
                        : {}
                    }
                  />
                </div>
                <div>
                  <InputTitle>Country</InputTitle>
                  <StyledInput
                    type="text"
                    placeholder="Georgia"
                    {...register("country", {
                      required: {
                        value: true,
                        message: "country cannot be empty",
                      },
                    })}
                    style={
                      errors.country?.message
                        ? { outline: "2px solid #FF7979" }
                        : {}
                    }
                  />
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
                  {...register("eMoneyNum", {
                    required: {
                      value: true,
                      message: "eMoneyNum cannot be empty",
                    },
                  })}
                  style={
                    errors.eMoneyNum?.message
                      ? { outline: "2px solid #FF7979" }
                      : {}
                  }
                />
              </div>
              <div>
                <InputTitle>e-Money PIN</InputTitle>
                <StyledInput
                  type="number"
                  placeholder="6891"
                  {...register("eMoneyPin", {
                    required: {
                      value: true,
                      message: "eMoneyPin cannot be empty",
                    },
                  })}
                  style={
                    errors.eMoneyPin?.message
                      ? { outline: "2px solid #FF7979" }
                      : {}
                  }
                />
              </div>
            </InputsContainer>
          </div>
          <CheckoutBtn style={{ marginTop: "50px" }}>
            CONTINUE & PAY
          </CheckoutBtn>
        </form>
      </CheckoutContainer>
      {finalCheck && <FinalCheck />}
    </>
  );
};

export default InputsAndPayment;
