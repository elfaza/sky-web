import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing8/Hero";
import Content1 from "../sections/landing8/Content1";
import Content2 from "../sections/landing8/Content2";
import Process from "../sections/landing8/Process";
import Video from "../sections/landing8/Video";
import Features from "../sections/landing8/Features";
import Testimonials from "../sections/landing8/Testimonials";
import Pricing from "../sections/landing8/Pricing";

const MobileApp = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "dark",
          align: "right",
          variant: "danger",
          isFluid: true,
          button: "cta", // cta, account, null
        }}
        footerConfig={{
          style: "style3", //style1, style2
        }}
      >
        <Hero />
        <Content1 />
        <Content2 />
        <Process />
        <div className="gradient-sections-wrapper bg-gradient-1">
          <Video />
          <Features />
          <Testimonials />
        </div>
        <Pricing />
      </PageWrapper>
    </>
  );
};
export default MobileApp;
