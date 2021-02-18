import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

const Pricing = () => {
  return (
    <>
      {/* <!-- Pricing Area --> */}
      <div
        className="pricing-section bg-blackish-blue pt-12 pb-7 pt-lg-22 pb-lg-17"
        id="pricing"
      >
        <Container>
          <Row className="justify-content-center">
            <Col xl="7" lg="8" md="10">
              <div className="section-title text-center mb-12 mb-lg-16">
                <h2 className="gr-text-4 mb-7 text-white">
                  Pricing &amp; Plans
                </h2>
                <p className="gr-text-8 px-lg-8 gr-color-white-opacity-7 mb-0">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="4" md="6" sm="8" className="mb-9">
              <div className="pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-9 pb-6 pr-6 pl-6">
                <span className="badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase">
                  Basic
                </span>
                <h2 className="price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-8">
                  $29
                </h2>
                <p className="gr-text-11 mb-7 mb-lg-11 gr-color-blackish-blue-opacity-7">
                  One time purchase
                </p>
                <p className="gr-text-9 px-5 gr-color-blackish-blue-opacity-7 mb-0">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
                <Button className="gr-hover-y w-100 mt-9 mt-lg-15 gr-text-9">
                  Get started for free
                </Button>
              </div>
            </Col>
            <Col lg="4" md="6" sm="8" className="mb-9">
              <div className="pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-9 pb-6 pr-6 pl-6">
                <span className="badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase">
                  Standard
                </span>
                <h2 className="price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-8">
                  $49
                </h2>
                <p className="gr-text-11 mb-7 mb-lg-11 gr-color-blackish-blue-opacity-7">
                  One time purchase
                </p>
                <p className="gr-text-9 px-5 gr-color-blackish-blue-opacity-7 mb-0">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
                <Button className="gr-hover-y w-100 mt-9 mt-lg-15 gr-text-9">
                  Get started for free
                </Button>
              </div>
            </Col>
            <Col lg="4" md="6" sm="8" className="mb-9">
              <div className="pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-9 pb-6 pr-6 pl-6">
                <span className="badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase">
                  Premium
                </span>
                <h2 className="price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-8">
                  $99
                </h2>
                <p className="gr-text-11 mb-7 mb-lg-11 gr-color-blackish-blue-opacity-7">
                  One time purchase
                </p>
                <p className="gr-text-9 px-5 gr-color-blackish-blue-opacity-7 mb-0">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
                <Button className="gr-hover-y w-100 mt-9 mt-lg-15 gr-text-9">
                  Get started for free
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Pricing;
