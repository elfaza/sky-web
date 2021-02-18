import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing7/Hero";
import Rating from "../sections/landing7/Rating";
import Content1 from "../sections/landing7/Content1";
import Content2 from "../sections/landing7/Content2";
import Content3 from "../sections/landing7/Content3";
import Pricing from "../sections/landing7/Pricing";

const VideoConference = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          isFluid: true,
          button: "account", // cta, account, null
        }}
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Rating />
        <Content1 />
        <Content2 />
        <Content3 />
        <Pricing />
      </PageWrapper>
    </>
  );
};
export default VideoConference;
