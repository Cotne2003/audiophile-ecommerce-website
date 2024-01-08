"use client";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

const RecoilWrapp = (props: { children: ReactNode }) => {
  return <RecoilRoot>{props.children}</RecoilRoot>;
};

export default RecoilWrapp;
