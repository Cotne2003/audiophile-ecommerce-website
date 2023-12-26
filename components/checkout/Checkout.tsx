import React from "react";
import { GoBack } from "../oneProductPage/sectionOne/SectionOneStyles";
import { useRouter } from "next/navigation";
import { StyledMain } from "../oneProductPage/OneProductPageStyles";
import InputsAndPayment from "./inputsAndPayment/InputsAndPayment";
import { Product, cartData } from "../../app/states";
import { useRecoilValue } from "recoil";
import CartProduct from "../header/cartSpace/CartProduct/CartProduct";
import { ProductsContainer } from "../header/cartSpace/CartSpaceStyles";

const Checkout = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const products = useRecoilValue<Product[]>(cartData);
  return (
    <StyledMain>
      <GoBack onClick={goBack}>Go Back</GoBack>
      <div style={{ display: "flex", alignItems: "center" }}>
        <InputsAndPayment />
        <ProductsContainer>
          {products.map((product) => (
            <CartProduct
              key={product.id}
              imgUrl={product.imgUrl}
              title={product.title}
              price={product.price}
              quantity={product.count}
            />
          ))}
        </ProductsContainer>
      </div>
    </StyledMain>
  );
};

export default Checkout;
