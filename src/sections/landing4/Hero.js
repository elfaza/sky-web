import React from "react";
import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";

import imgHero from "../../assets/image/l1/png/l1-hero-img.png";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="pb-11 pb-lg-14 pt-25 pt-lg-29 bg-default-1 position-relative">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col
              sm="10"
              md="9"
              lg="7"
              xl="6"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
            >
              <div className="hero-content text-center">
                <h1 className="gr-text-3 mb-8">
                  Get things done by awesome remote team
                </h1>
                <p className="gr-text-8">
                  We share common trends and strategies for improving your
                  rental income and making sure you stay in high demand.
                </p>
                <div className="hero-btns d-flex flex-column flex-md-row justify-content-md-center mt-11">
                  <Button className="btn btn-primary with-icon gr-hover-y mb-6 mb-md-0 mr-md-7">
                    Get started for free
                    <i className="fas fa-arrow-right gr-text-11"></i>
                  </Button>
                  <Link href="/">
                    <a className="btn btn-white gr-hover-y">Learn more</a>
                  </Link>
                </div>
              </div>
            </Col>
            <Col sm="10" className="mt-15 mt-lg-23">
              <div
                className="hero-img"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <img className="img-fluid" src={imgHero} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
