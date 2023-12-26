import React, { useEffect, useState } from "react";
import { GoBack } from "../oneProductPage/sectionOne/SectionOneStyles";
import { useRouter } from "next/navigation";
import { StyledMain } from "../oneProductPage/OneProductPageStyles";
import InputsAndPayment from "./inputsAndPayment/InputsAndPayment";
import { Product, cartData } from "../../app/states";
import { useRecoilValue } from "recoil";
import CartProduct from "../header/cartSpace/CartProduct/CartProduct";
import {
  ChekCoutBtn,
  ProductsContainer,
} from "../header/cartSpace/CartSpaceStyles";
import {
  FlexContainer,
  ProductsWrapper,
  StyledUl,
  Summary,
} from "./CheckoutStyles";

const Checkout = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const cart = useRecoilValue<Product[]>(cartData);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartModel = [...cart];
    const sumOfProducts = cartModel.reduce(
      (sum, product) => Number(product.price) * product.count + sum,
      0
    );
    setTotal(sumOfProducts);
  }, [cart]);

  return (
    <StyledMain>
      <GoBack onClick={goBack}>Go Back</GoBack>
      <FlexContainer>
        <InputsAndPayment />
        <ProductsWrapper>
          <Summary>Summary</Summary>
          <ProductsContainer>
            {cart.map((product) => (
              <CartProduct
                key={product.id}
                imgUrl={product.imgUrl}
                title={product.title}
                price={product.price}
                quantity={product.count}
              />
            ))}
          </ProductsContainer>
          <StyledUl>
            <li>
              <span>total</span>
              <p>$ {total}</p>
            </li>
            <li>
              <span>Shipping</span>
              <p>$ 50</p>
            </li>
            <li style={{ marginTop: "16px", marginBottom: "32px" }}>
              <span>grand total</span>
              <p style={{ color: "#D87D4A" }}>$ {total + 50}</p>
            </li>
          </StyledUl>
          <ChekCoutBtn>CONTINUE & PAY</ChekCoutBtn>
        </ProductsWrapper>
      </FlexContainer>
    </StyledMain>
  );
};

export default Checkout;
