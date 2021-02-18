import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../../assets/image/l5/png/l5-service-card1.png";
import imgC2 from "../../assets/image/l5/png/l5-service-card2.png";
import imgC3 from "../../assets/image/l5/png/l5-service-card3.png";

import imgDot from "../../assets/image/l5/png/l5-dot-shape2.png";

const Services = () => {
  return (
    <>
      {/* <!--Service section  -->*/}
      <div className="service-section bg-default-4 pt-15 pb-13 py-lg-25">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <div className="section-title text-center mb-11 mb-lg-19 px-lg-3">
                <h4 className="pre-title gr-text-12 text-red text-uppercase mb-7">
                  Our services
                </h4>
                <h2 className="title gr-text-4">
                  We provide great services for{" "}
                  <br className="d-none d-lg-block" /> our customers based on
                  needs
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center position-relative gr-z-index-1">
            <Col
              md="6"
              lg="4"
              className="mb-9 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 dark-mode-texts bg-green h-100">
                <div className="card-img mb-11">
                  <img src={imgC1} alt="..." />
                </div>
                <h3 className="card-title gr-text-6 mb-6">Graphic Design</h3>
                <p className="gr-text-9 mb-11">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
                <a
                  href="/"
                  className="gr-text-9 btn-link with-icon text-white mt-auto"
                >
                  Learn more{" "}
                  <i className="icon icon-tail-right font-weight-bold"></i>
                </a>
              </div>
            </Col>
            <Col
              md="6"
              lg="4"
              className="mb-9 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 dark-mode-texts bg-blue h-100">
                <div className="card-img mb-11">
                  <img src={imgC2} alt="..." />
                </div>
                <h3 className="card-title gr-text-6 mb-6">Web Development</h3>
                <p className="gr-text-9 mb-11">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
                <a
                  href="/"
                  className="gr-text-9 btn-link with-icon text-white mt-auto"
                >
                  Learn more{" "}
                  <i className="icon icon-tail-right font-weight-bold"></i>
                </a>
              </div>
            </Col>
            <Col
              md="6"
              lg="4"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <div className="service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 dark-mode-texts bg-red h-100">
                <div className="card-img mb-11">
                  <img src={imgC3} alt="..." />
                </div>
                <h3 className="card-title gr-text-6 mb-6">Content Writing</h3>
                <p className="gr-text-9 mb-11">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
                <a
                  href="/"
                  className="gr-text-9 btn-link with-icon text-white mt-auto"
                >
                  Learn more{" "}
                  <i className="icon icon-tail-right font-weight-bold"></i>
                </a>
              </div>
              <div
                className="gr-abs-br-custom gr-z-index-n1"
                data-aos="zoom-in-right"
                data-aos-duration="750"
              >
                <img src={imgDot} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
