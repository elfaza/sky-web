import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgCB from "../../assets/image/l7/jpg/content1-img-big.jpg";
import iconC1 from "../../assets/image/l7/png/content1-icon1.png";
import iconC2 from "../../assets/image/l7/png/content1-icon2.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section position-relative overflow-hidden pt-15 pb-11 pb-lg-25 pt-lg-27 bg-default-2">
        <Container>
          <Row className="align-items-center justify-content-md-center">
            <Col sm="10" lg="5" className="position-static">
              <div className="content-img position-relative gr-abs-lg gr-abs-lg-ly-center w-lg-50 text-center text-lg-left">
                <img className="h-100 w-100 w-lg-75" src={imgCB} alt="" />
              </div>
            </Col>
            <Col sm="11" lg="7">
              <Row>
                <Col lg="10" xl="9">
                  <div className="content-text mb-9 mb-lg-17 mb-xl-22 mt-11 mt-lg-0">
                    <h2 className="title gr-text-3 mb-7">
                      Listen music <br className="d-none d-lg-block" />
                      anytime, anywhere.
                    </h2>
                    <p className="gr-text-8 mb-9 pr-11">
                      We share common trends and strategies for improving your
                      rental income.
                    </p>
                  </div>
                </Col>
                <Col xs="12">
                  <div className="features-wrapper mt-6 mt-md-0">
                    <Row>
                      <Col md="12">
                        <div
                          className="single-feature media py-6"
                          data-aos="fade-left"
                          data-aos-duration="800"
                        >
                          <div className="media-icon mr-6">
                            <img src={iconC1} alt="" />
                          </div>
                          <div className="media-body">
                            <h3 className="title gr-text-7 mb-6">
                              Comfortable Buds
                            </h3>
                            <p className="gr-text-9 mb-0 pr-xl-6">
                              With lots of unique blocks, you can easily build a
                              page without coding.{" "}
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col md="12">
                        <div
                          className="single-feature media py-6"
                          data-aos="fade-left"
                          data-aos-duration="1200"
                        >
                          <div className="media-icon mr-6">
                            <img src={iconC2} alt="" />
                          </div>
                          <div className="media-body">
                            <h3 className="title gr-text-7 mb-6">
                              Powerful Bass
                            </h3>
                            <p className="gr-text-9 mb-0 pr-xl-6">
                              With lots of unique blocks, you can easily build a
                              page without coding.{" "}
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
