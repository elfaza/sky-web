import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../../assets/image/conference/jpg/content-1-img.jpg";
import imgCR from "../../assets/image/conference/png/content-1-round.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section pt-13 pt-lg-29 pb-12 pb-lg-20 bg-default-6">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xs="11" lg="6" data-aos="fade-right" data-aos-duration="1200">
              <div className="content-img position-relative mb-11 mb-lg-0">
                <img
                  src={imgC1}
                  alt=""
                  className="w-100 w-sm-auto rounded-10 shadow-8 position-relative gr-z-index-1"
                />
                <div
                  className="gr-abs-tl-custom-3"
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="1200"
                >
                  <img src={imgCR} alt="" className="w-auto" />
                </div>
              </div>
            </Col>
            <Col xs="11" lg="6" xl="5" className="pl-lg-15">
              <div className="section-title content-text mb-13 mb-lg-15">
                <h2 className="title gr-text-4 mb-6">Easy to control</h2>
                <p className="gr-text-8 pr-lg-12 mb-0">
                  We share common trends and strategies for improving your
                  rental income.
                </p>
              </div>
              <div className="content-widget">
                <Row className="mb-n11">
                  <Col
                    md="6"
                    lg="10"
                    data-aos="fade-left"
                    data-aos-duration="750"
                  >
                    <div className="single-widget mb-11">
                      <h3 className="w-title gr-text-7 mb-4">
                        Project Based Groups
                      </h3>
                      <p className="gr-text-9 mb-0">
                        With lots of unique blocks, you can easily build a page
                        without coding.{" "}
                      </p>
                    </div>
                  </Col>
                  <Col
                    md="6"
                    lg="10"
                    data-aos="fade-left"
                    data-aos-duration="1100"
                  >
                    <div className="single-widget mb-11">
                      <h3 className="w-title gr-text-7 mb-4">
                        Unlimited Video Meetings
                      </h3>
                      <p className="gr-text-9 mb-0">
                        With lots of unique blocks, you can easily build a page
                        without coding.{" "}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
