import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Pricing = () => {
  return (
    <>
      {/* <!-- Pricing Area --> */}
      <div className="pricing-section pt-14 pb-9 pt-lg-25 pb-lg-25 bg-default-2">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="8" md="10">
              <div className="section-title text-center mb-12 mb-lg-21">
                <h2 className="title gr-text-4 mb-6">
                  Get started your meeting
                </h2>
                <p className="gr-text-8 px-lg-7 px-xl-0">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="4" md="6" sm="10" className="mb-9">
              {/* <!-- .pricing card --> */}
              <div className="pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-10 pb-12 px-9 px-xl-15">
                <span className="badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase">
                  Basic
                </span>
                <h2 className="price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-8">
                  Free
                </h2>
                <p className="gr-text-9 mb-7 gr-color-blackish-blue-opacity-7">
                  Use forever
                </p>
                <ul className="card-list list-style-border text-center pl-0 mt-9 mb-3 mx-auto">
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    01 Admin account
                  </li>
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Upto 50 people
                  </li>
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    60 Minute meeting time
                  </li>
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Audio &amp; video meeting
                  </li>
                </ul>
                <Button className="gr-hover-y w-100 mt-7 gr-text-9">
                  Get started for free
                </Button>
                <span className="btn-bottom-text d-block gr-text-11 text-blackish-blue gr-opacity-7 mt-5">
                  No credit card required
                </span>
              </div>
              {/* <!-- /.pricing carde Ends--> */}
            </Col>
            <Col lg="4" md="6" sm="10" className="mb-9">
              {/* <!-- .pricing card --> */}
              <div className="pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-10 pb-12 px-9 px-xl-15">
                <span className="badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase">
                  Pro
                </span>
                <h2 className="price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-8">
                  $49
                </h2>
                <p className="gr-text-9 mb-7 gr-color-blackish-blue-opacity-7">
                  per year
                </p>
                <ul className="card-list list-style-border text-center pl-0 mt-9 mb-3 mx-auto">
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    03 Admin accounts
                  </li>
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Upto 150 people
                  </li>
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Unlimited meeting time
                  </li>
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Meeting Recordings
                  </li>
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Audio &amp; video meeting
                  </li>
                </ul>
                <Button className="gr-hover-y w-100 mt-7 gr-text-9">
                  Get started for free
                </Button>
              </div>
              {/* <!-- /.pricing carde Ends--> */}
            </Col>
            <Col lg="4" md="6" sm="10" className="mb-9">
              {/* <!-- .pricing card --> */}
              <div className="pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-10 pb-12 px-9 px-xl-15">
                <span className="badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase">
                  Team
                </span>
                <h2 className="price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-8">
                  $99
                </h2>
                <p className="gr-text-9 mb-7 gr-color-blackish-blue-opacity-7">
                  per year
                </p>
                <ul className="card-list list-style-border text-center pl-0 mt-9 mb-3 mx-auto">
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    10 Admin accounts
                  </li>
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Upto 1000 people
                  </li>
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Unlimited meeting time
                  </li>
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Meeting Recordings
                  </li>
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Audio &amp; video meeting
                  </li>
                </ul>
                <Button className="gr-hover-y w-100 mt-7 gr-text-9">
                  Get started for free
                </Button>
              </div>
              {/* <!-- /.pricing carde Ends--> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Pricing;
