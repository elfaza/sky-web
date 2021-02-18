import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing6/Hero";
import Brands from "../sections/landing6/Brands";
import Features from "../sections/landing6/Features";
import Content1 from "../sections/landing6/Content1";
import Content2 from "../sections/landing6/Content2";
import Content3 from "../sections/landing6/Content3";
import Pricing from "../sections/landing6/Pricing";
import Testimonial from "../sections/landing6/Testimonial";

const WebApplication = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "dark",
          align: "right",
          button: "cta", // cta, account, null
          buttonText: "Start a free trial",
        }}
        footerConfig={{
          theme: "dark",
          // style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Brands />
        <Features />
        <Content1 />
        <Content2 />
        <Content3 />
        <Pricing />
        <Testimonial />
      </PageWrapper>
    </>
  );
};

export default WebApplication;
