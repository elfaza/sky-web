import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing12/Hero";
import Brands from "../sections/landing12/Brands";
import Features from "../sections/landing12/Features";
import Content1 from "../sections/landing12/Content1";
import Content2 from "../sections/landing12/Content2";
import Team from "../sections/landing12/Team";
import Content3 from "../sections/landing12/Content3";
import CTA from "../sections/landing12/CTA";

const Ecommerce = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "light",
          align: "left",
          isFluid: true,
          button: "account", // cta, account, null
        }}
        footerConfig={{
          theme: "light",
          // style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Brands />
        <Features />
        <Content1 />
        <Content2 />
        <Team />
        <Content3 />
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Ecommerce;
