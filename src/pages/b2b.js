import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing10/Hero";
import Alert from "../sections/landing10/Alert";
import Content1 from "../sections/landing10/Content1";
import Services from "../sections/landing10/Services";
import Content2 from "../sections/landing10/Content2";
import Video from "../sections/landing10/Video";
import Testimonials from "../sections/landing10/Testimonials";
import CTA from "../sections/landing10/CTA";

const B2B = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "center",
          isFluid: true,
          button: "cta", // cta, account, null
          buttonText: "Get A Free Quote",
        }}
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Alert />
        <Content1 />
        <Services />
        <Content2 />
        <Video />
        <Testimonials />
        <CTA />
      </PageWrapper>
    </>
  );
};

export default B2B;
