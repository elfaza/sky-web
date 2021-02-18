import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import iconF1 from "../../assets/image/svg/l4-feature-icon1.svg";
import iconF2 from "../../assets/image/svg/l4-feature-icon2.svg";
import iconF3 from "../../assets/image/svg/l4-feature-icon3.svg";

const Fearures = () => {
  return (
    <>
      {/* <!-- Fearures Area --> */}
      <div className="feature-section border-top bg-default-2 pt-15 pt-lg-22 pb-9 pb-md-0 pb-lg-17">
        <Container>
          <Row className="justify-content-center">
            <Col lg="4" md="6" className="mb-8 mb-md-13 mb-lg-0">
              <div
                className="feature-widget media"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="500"
              >
                <div className="widget-icon mr-8">
                  <img src={iconF1} alt="" />
                </div>
                <div className="widget-texts">
                  <h3 className="title gr-text-7 font-weight-bold mb-6">
                    Organize your campaigns
                  </h3>
                  <p className="gr-text-9 mb-0">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="mb-8 mb-md-13 mb-lg-0">
              <div
                className="feature-widget media"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="1000"
              >
                <div className="widget-icon mr-8">
                  <img src={iconF2} alt="" />
                </div>
                <div className="widget-texts">
                  <h3 className="title gr-text-7 font-weight-bold mb-6">
                    Manage customers
                  </h3>
                  <p className="gr-text-9 mb-0">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="mb-8 mb-md-13 mb-lg-0">
              <div
                className="feature-widget media"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="1500"
              >
                <div className="widget-icon mr-8">
                  <img src={iconF3} alt="" />
                </div>
                <div className="widget-texts">
                  <h3 className="title gr-text-7 font-weight-bold mb-6">
                    Track progress fast
                  </h3>
                  <p className="gr-text-9 mb-0">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Fearures;
