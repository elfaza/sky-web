import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import imgH from "../../assets/image/l2/jpg/l2-hero-bg.jpg";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div
        className="bg-image bg-gradient bg-gradient-black pb-17 pt-24 pt-lg-32 pb-lg-28"
        css={`
          background-image: url(${imgH});
        `}
      >
        <Container>
          <Row className="align-items-center">
            <Col
              md="9"
              lg="7"
              xl="6"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
            >
              <div className="hero-content section-title dark-mode-texts">
                <h1 className="gr-text-2 font-weight-bold mb-8">
                  Get help from the expert consultants.
                </h1>
                <p className="gr-text-8 pr-sm-7 pr-md-12">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next consultancy website within few
                  minutes.
                </p>
                <div className="hero-btns mt-10">
                  <Button className="with-icon gr-hover-y">
                    Get started now
                    <i className="icon icon-tail-right font-weight-bold"></i>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
