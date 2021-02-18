import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgF1 from "../../assets/image/svg/l6-feature-icon1.svg";
import imgF2 from "../../assets/image/svg/l6-feature-icon2.svg";
import imgF3 from "../../assets/image/svg/l6-feature-icon3.svg";
import imgF4 from "../../assets/image/svg/l6-feature-icon4.svg";
import imgF5 from "../../assets/image/svg/l6-feature-icon5.svg";
import imgF6 from "../../assets/image/svg/l6-feature-icon6.svg";

const Features = () => {
  return (
    <>
      {/* <!-- Features Area --> */}
      <div className="feature-section pt-16 pt-lg-25 dark-mode-texts">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" lg="7" xl="6">
              <div className="section-title text-center mb-13 mb-lg-23">
                <h2 className="title gr-text-3">
                  We made this app to solve your problems.
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green mr-sm-9 mb-7 mb-lg-0">
                  <img className="" src={imgF1} alt="/" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5">Unlimited Projects</h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green mr-sm-9 mb-7 mb-lg-0">
                  <img className="" src={imgF2} alt="/" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5">Team Management</h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green mr-sm-9 mb-7 mb-lg-0">
                  <img className="" src={imgF3} alt="/" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5">File Sharing</h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green mr-sm-9 mb-7 mb-lg-0">
                  <img className="" src={imgF4} alt="/" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5">Video Meetings</h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green mr-sm-9 mb-7 mb-lg-0">
                  <img className="" src={imgF5} alt="/" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5">Time Tracking</h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-12">
              <div className="feature-widget d-sm-flex">
                <div className="widget-icon gr-text-4 text-green mr-sm-9 mb-7 mb-lg-0">
                  <img className="" src={imgF6} alt="/" />
                </div>
                <div className="content">
                  <h3 className="title gr-text-7 mb-5">Payment System</h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                </div>
              </div>
            </Col>
            <div className="col-12">
              <div className="border-sm-divider dark text-center mt-lg-13"></div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Features;
