import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-tilt";

import imgC from "../../assets/image/telemedicine/png/content-3-img.png";
import imgCS from "../../assets/image/telemedicine/png/content3-img-sub.png";

const Content3 = () => {
  return (
    <>
      {/* <!-- Content3 Area --> */}
      <div className="content-section pt-13 pt-lg-28 pb-11 pb-lg-22 bg-default-6 hover-tilt">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col sm="10" md="9" lg="6" xl="5" className="mb-n7 mb-lg-0">
              <div
                className="double-image-group position-relative"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <img className="main-img w-100 w-lg-auto" src={imgC} alt="" />
                <Tilt className="gr-abs-img-custom-2 animation-tilt">
                  <img src={imgCS} alt="" className="responsive-scaling" />
                </Tilt>
              </div>
            </Col>
            <Col sm="10" md="9" lg="6" xl="5" className="offset-xl-1">
              <div
                className="content-text pr-lg-7"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <h2 className="gr-text-4 mb-8">
                  Create your medical profile, control everything.
                </h2>
                <p className="gr-text-9 mb-0">
                  We've made telemedicine simple and easy for you. Create your
                  personal room and start practicing telemedicine today.{" "}
                </p>
                <div className="content-widget mt-8">
                  <Row>
                    <Col md="8">
                      <div className="single-widget d-flex align-items-center py-2">
                        <div className="widget-icon text-primary mr-6 gr-text-8 d-flex align-items-center">
                          <i className="icon icon-check-simple"></i>
                        </div>
                        <h3 className="w-title gr-text-8 mb-0">
                          Based on your needs
                        </h3>
                      </div>
                    </Col>
                    <Col md="8">
                      <div className="single-widget d-flex align-items-center py-2">
                        <div className="widget-icon text-primary mr-6 gr-text-8 d-flex align-items-center">
                          <i className="icon icon-check-simple"></i>
                        </div>
                        <h3 className="w-title gr-text-8 mb-0">
                          Custom funtionalities
                        </h3>
                      </div>
                    </Col>
                    <Col md="8">
                      <div className="single-widget d-flex align-items-center py-2">
                        <div className="widget-icon text-primary mr-6 gr-text-8 d-flex align-items-center">
                          <i className="icon icon-check-simple"></i>
                        </div>
                        <h3 className="w-title gr-text-8 mb-0">
                          Easy to edit every data
                        </h3>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content3;
