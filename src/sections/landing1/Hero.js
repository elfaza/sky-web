import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import imgL1Hero from "../../assets/image/l5/png/l5-hero-img.png";
import imgDot from "../../assets/image/l5/png/l5-dot-shape.png";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="position-relative bg-default-2 bg-pattern pattern-2 pt-27 pt-lg-32 pb-15 pb-lg-27">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col
              xs="9"
              md="7"
              lg="5"
              className="offset-xl-1 align-self-sm-end order-lg-2"
            >
              <div
                className="hero-img position-relative"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <img className="w-100" src={imgL1Hero} alt="" />
                <div
                  className="gr-abs-tl gr-z-index-n1"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                  data-aos-duration="1000"
                >
                  <img src={imgDot} alt="" />
                </div>
              </div>
            </Col>
            <Col
              xs="11"
              md="9"
              lg="7"
              xl="6"
              className="order-lg-1"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
            >
              <div className="hero-content mt-11 mt-lg-0">
                <h4 className="pre-title gr-text-12 text-red text-uppercase mb-7">
                  Let’s shift your business
                </h4>
                <h1 className="title gr-text-2 mb-8">
                  Shift your business fast with Shade Pro.
                </h1>
                <p className="gr-text-8 mb-11 pr-md-12">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next consultancy website within few
                  minutes.
                </p>
                <div className="hero-btn">
                  <Button href="#" className="gr-hover-y">
                    Get started a project
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
