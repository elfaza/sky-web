import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing11/Hero";
import Fact from "../sections/landing11/Fact";
import Services from "../sections/landing11/Services";
import Content from "../sections/landing11/Content";
import Alert from "../sections/landing11/Alert";
import Testimonial from "../sections/landing11/Testimonial";
import CTA from "../sections/landing11/CTA";
import Newsletter from "../sections/landing11/Newsletter";

const Consultation = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "dark",
          align: "left",
          isFluid: true,
          button: "cta", // cta, account, null
          buttonText: "Get started free",
        }}
        footerConfig={{
          theme: "light",
        }}
      >
        <Hero />
        <Fact />
        <Services />
        <Content />
        <Alert />
        <Testimonial />
        <CTA />
        <Newsletter />
      </PageWrapper>
    </>
  );
};

export default Consultation;
