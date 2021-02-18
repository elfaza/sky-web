import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing4/Hero";
import Features from "../sections/landing4/Features";
import Content1 from "../sections/landing4/Content1";
import Fact from "../sections/landing4/Fact";
import Content2 from "../sections/landing4/Content2";
import Testimonial from "../sections/landing4/Testimonial";
import Pricing from "../sections/landing4/Pricing";
import Faq from "../sections/landing4/Faq";
import CTA from "../sections/landing4/CTA";

const SaasSubscription = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "center",
          isFluid: true,
        }}
        footerConfig={{
          theme: "light",
          style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Features />
        <Content1 />
        <Fact />
        <Content2 />
        <Testimonial />
        <Pricing />
        <Faq />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default SaasSubscription;
