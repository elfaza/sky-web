import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing5/Hero";
import Categories from "../sections/landing5/Categories";
import Products from "../sections/landing5/Products";
import Content from "../sections/landing5/Content";
import Testimonial from "../sections/landing5/Testimonial";
import CTA from "../sections/landing5/CTA";

const Ecommerce = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "light",
          align: "center",
          isFluid: true,
          button: "cart", // cta, account, null
        }}
        footerConfig={{
          theme: "light",
          // style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Categories />
        <Products />
        <Content />
        <Testimonial />
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Ecommerce;
