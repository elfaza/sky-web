import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing2/Hero";
import Brand from "../sections/landing2/Brand";
import Category from "../sections/landing2/Category";
import Content from "../sections/landing2/Content";
import Jobs from "../sections/landing2/Job";
import News from "../sections/landing2/News";
import Newsletter from "../sections/landing2/Newsletter";

const JobDirectory = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "center",
          isFluid: true,
          button: "account", // cta, account, null
        }}
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Brand />
        <Category />
        <Content />
        <Jobs />
        <News />
        <Newsletter />
      </PageWrapper>
    </>
  );
};
export default JobDirectory;
