import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import iconF1 from "../../assets/image/svg/feature8-icon1.svg";
import iconF2 from "../../assets/image/svg/feature8-icon2.svg";
import iconF3 from "../../assets/image/svg/feature8-icon3.svg";

const Features = () => {
  return (
    <>
      {/* <!-- Features Area --> */}
      <div className="feature-section pt-14 pt-lg-21 pb-7 bg-default-6">
        <Container>
          <Row className="justify-content-center">
            <Col xl="5" lg="6" md="8">
              <div className="section-title text-center mb-13 mb-lg-21">
                <h2 className="title gr-text-4 mb-6">How does it work?</h2>
                <p className="gr-text-9 mb-0">
                  We've made telemedicine simple and easy for you. Create your
                  personal room and start practicing today.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col
              lg="4"
              md="6"
              className="mb-11 mb-lg-19 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="feature-widget text-center">
                <div className="widget-icon square-80 rounded-15 mx-auto mb-9 mb-lg-12 bg-blue shadow-blue">
                  <img src={iconF1} alt="" />
                </div>
                <div className="widget-text">
                  <h3 className="title gr-text-6 mb-7">Get Appointment</h3>
                  <p className="gr-text-11 mb-0">
                    We've made telemedicine simple and easy for you. Create your
                    personal room and start practicing telemedicine today.
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              md="6"
              className="mb-11 mb-lg-19 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="feature-widget text-center">
                <div className="widget-icon square-80 rounded-15 mx-auto mb-9 mb-lg-12 bg-red shadow-red">
                  <img src={iconF2} alt="" />
                </div>
                <div className="widget-text">
                  <h3 className="title gr-text-6 mb-7">Meet Your Doctor</h3>
                  <p className="gr-text-11 mb-0">
                    We've made telemedicine simple and easy for you. Create your
                    personal room and start practicing telemedicine today.
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              md="6"
              className="mb-11 mb-lg-19 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <div className="feature-widget text-center">
                <div className="widget-icon square-80 rounded-15 mx-auto mb-9 mb-lg-12 bg-green shadow-green">
                  <img src={iconF3} alt="" />
                </div>
                <div className="widget-text">
                  <h3 className="title gr-text-6 mb-7">Get Better Treatment</h3>
                  <p className="gr-text-11 mb-0">
                    We've made telemedicine simple and easy for you. Create your
                    personal room and start practicing telemedicine today.
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

export default Features;
