import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing3/Hero";
import Fact from "../sections/landing3/Fact";
import Locations from "../sections/landing3/Locations";
import Content1 from "../sections/landing3/Content1";
import Feature from "../sections/landing3/Feature";
import Content2 from "../sections/landing3/Content2";
import CTA from "../sections/landing3/CTA";

const CoWorking = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "dark",
          align: "right",
          button: "cta", // cta, account, null
        }}
        footerConfig={{
          theme: "light",
          // style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Element name="elFact">
          <Fact />
        </Element>
        <Locations />
        <Content1 />
        <Feature />
        <Content2 />
        <CTA />
      </PageWrapper>
    </>
  );
};

export default CoWorking;
