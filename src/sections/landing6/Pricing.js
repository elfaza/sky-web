import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <>
      {/* <!-- Pricing Area --> */}
      <div className="pricing-section bg-default-5 pt-14 pt-lg-21">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="8" md="10">
              <div className="section-title text-center mb-lg-7">
                <h2 className="gr-text-4 font-weight-bold mb-7">
                  Pricing &amp; Plans
                </h2>
                <p className="gr-text-8 mb-0 px-lg-7 px-xl-0">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </Col>
          </Row>
          <div className="pricing-section pb-7 pb-lg-20">
            <Container>
              <div className="text-center pt-9">
                <div
                  className="mb-13 d-inline-flex position-relative"
                  id="pricing-dynamic-deck--head"
                >
                  <span className="period month gr-text-8 gr-text-color ">
                    Monthly
                  </span>
                  <a
                    href="/#"
                    className={`btn-toggle mx-3 price-deck-trigger ${
                      isMonthly ? "" : "active"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMonthly(!isMonthly);
                    }}
                  >
                    <span className="round"></span>
                  </a>
                  <span className="period year gr-text-8 gr-text-color">
                    Yearly
                  </span>
                  <span className="badge gr-badge text-primary gr-text-12 gr-bg-blue-opacity-1 rounded-pill ml-5 text-uppercase">
                    Save 25%
                  </span>
                </div>
                <Row className="justify-content-center">
                  <Col lg="4" md="6" sm="10" className="mb-9">
                    <div className="pricing-card bg-white gr-hover-shadow-1 border text-left pt-9 pb-9 pr-9 pr-xl-13  pl-9 pl-xl-13 bg-white rounded-10">
                      <div className="price-content">
                        <span className="small-title gr-text-12 text-primary font-weight-bold text-uppercase">
                          Starter
                        </span>
                        <div className="d-flex align-items-end mt-11 ">
                          <span className="currency mr-2 gr-text-6 font-weight-bold line-spacing-none text-blackish-blue">
                            $
                          </span>
                          <h2 className="price-value gr-text-2 font-weight-bold line-spacing-none mb-0 text-blackish-blue">
                            {isMonthly ? "49" : "19"}
                            <span className="d-none">.</span>
                          </h2>
                          <span className="per gr-text-9 text-blackish-blue">
                            /month
                          </span>
                        </div>
                        <span className="price-bottom-text gr-text-11 mt-5 text-blackish-blue gr-opacity-7 d-inline-flex">
                          {isMonthly ? "billed monthly" : "billed yearly"}
                        </span>
                        <ul className="card-list list-style-check pl-0 mt-7 mt-lg-11">
                          <li className="gr-text-9">
                            <i className="icon icon-check-simple"></i>Commercial
                            License
                          </li>
                          <li className="gr-text-9">
                            <i className="icon icon-check-simple"></i>100+ HTML
                            UI Elements
                          </li>
                          <li className="gr-text-9">
                            <i className="icon icon-check-simple"></i>Unlimited
                            Domain Support
                          </li>
                          <li className="disabled gr-text-9">
                            <i className="icon icon-simple-remove"></i>6 months
                            premium support
                          </li>
                          <li className="disabled gr-text-9">
                            <i className="icon icon-simple-remove"></i>Lifetime
                            updates
                          </li>
                        </ul>
                      </div>
                      <Button className="with-icon gr-hover-y px-xl-8 px-lg-4 px-sm-8 px-4">
                        Start Free Trial
                        <i className="icon icon-tail-right font-weight-bold"></i>
                      </Button>
                      <span className="btn-bottom-text d-block gr-text-11 text-blackish-blue gr-opacity-7 mt-5">
                        No credit card required
                      </span>
                    </div>
                  </Col>
                  <Col lg="4" md="6" sm="10" className="mb-9">
                    <div className="pricing-card bg-white gr-hover-shadow-1 border text-left pt-9 pb-9 pr-9 pr-xl-13  pl-9 pl-xl-13 bg-white rounded-10">
                      <div className="price-content">
                        <span className="small-title gr-text-12 text-primary font-weight-bold text-uppercase">
                          Standard
                        </span>
                        <div className="d-flex align-items-end mt-11 ">
                          <span className="currency mr-2 gr-text-6 font-weight-bold line-spacing-none text-blackish-blue">
                            $
                          </span>
                          <h2 className="price-value gr-text-2 font-weight-bold line-spacing-none mb-0 text-blackish-blue">
                            {isMonthly ? "99" : "49"}
                            <span className="d-none">.</span>
                          </h2>
                          <span className="per gr-text-9 text-blackish-blue">
                            /month
                          </span>
                        </div>
                        <span className="price-bottom-text gr-text-11 mt-5 text-blackish-blue gr-opacity-7 d-inline-flex">
                          {" "}
                          {isMonthly ? "billed monthly" : "billed yearly"}
                        </span>
                        <ul className="card-list list-style-check pl-0 mt-7 mt-lg-11">
                          <li className="gr-text-9">
                            <i className="icon icon-check-simple"></i>Commercial
                            License
                          </li>
                          <li className="gr-text-9">
                            <i className="icon icon-check-simple"></i>100+ HTML
                            UI Elements
                          </li>
                          <li className="gr-text-9">
                            <i className="icon icon-check-simple"></i>Unlimited
                            Domain Support
                          </li>
                          <li className="gr-text-9">
                            <i className="icon icon-check-simple"></i>6 months
                            premium support
                          </li>
                          <li className="disabled gr-text-9">
                            <i className="icon icon-simple-remove"></i>Lifetime
                            updates
                          </li>
                        </ul>
                      </div>
                      <Button className="with-icon gr-hover-y px-xl-8 px-lg-4 px-sm-8 px-4">
                        Start Free Trial
                        <i className="icon icon-tail-right font-weight-bold"></i>
                      </Button>
                      <span className="btn-bottom-text d-block gr-text-11 text-blackish-blue gr-opacity-7 mt-5">
                        No credit card required
                      </span>
                    </div>
                  </Col>
                  <Col lg="4" md="6" sm="10" className="mb-9">
                    <div className="pricing-card bg-white gr-hover-shadow-1 border text-left pt-9 pb-9 pr-9 pr-xl-13  pl-9 pl-xl-13 bg-white rounded-10">
                      <div className="price-content">
                        <span className="small-title gr-text-12 text-primary font-weight-bold text-uppercase">
                          Premium
                        </span>
                        <div className="d-flex align-items-end mt-11">
                          <span className="currency mr-2 gr-text-6 font-weight-bold line-spacing-none text-blackish-blue">
                            $
                          </span>
                          <h2 className="price-value gr-text-2 font-weight-bold line-spacing-none mb-0  text-blackish-blue">
                            {isMonthly ? "129" : "99"}
                            <span className="d-none">.</span>
                          </h2>
                          <span className="per gr-text-9 text-blackish-blue">
                            /month
                          </span>
                        </div>
                        <span className="price-bottom-text gr-text-11 mt-5 text-blackish-blue gr-opacity-7 d-inline-flex">
                          {" "}
                          {isMonthly ? "billed monthly" : "billed yearly"}
                        </span>
                        <ul className="card-list list-style-check pl-0 mt-7 mt-lg-11">
                          <li className="gr-text-9">
                            <i className="icon icon-check-simple"></i>Commercial
                            License
                          </li>
                          <li className="gr-text-9">
                            <i className="icon icon-check-simple"></i>100+ HTML
                            UI Elements
                          </li>
                          <li className="gr-text-9">
                            <i className="icon icon-check-simple"></i>Unlimited
                            Domain Support
                          </li>
                          <li className="gr-text-9">
                            <i className="icon icon-check-simple"></i>6 months
                            premium support
                          </li>
                          <li className="gr-text-9">
                            <i className="icon icon-check-simple"></i>Lifetime
                            updates
                          </li>
                        </ul>
                      </div>
                      <Button className="with-icon gr-hover-y px-xl-8 px-lg-4 px-sm-8 px-4">
                        Start Free Trial
                        <i className="icon icon-tail-right font-weight-bold"></i>
                      </Button>
                      <span className="btn-bottom-text d-block gr-text-11 text-blackish-blue gr-opacity-7 mt-5">
                        No credit card required
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Pricing;
