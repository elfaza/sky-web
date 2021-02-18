import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgHeroBg from "../../assets/image/l8/png/hero-image.png";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div
        className="dark-mode-texts pt-19 pt-lg-29 pb-35  bg-image mt-19 rounded-10 mx-md-6"
        css={`
          background-image: url(${imgHeroBg});
        `}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <div className="text-center">
                <p className="gr-text-12 gr-text-color font-weight-bold text-uppercase mb-9">
                  Minimal Interior Design
                </p>
                <h1 className="gr-text-2 mb-8">
                  We minimize your waste in every step of the process.
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
