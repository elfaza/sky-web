import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgM from "../../assets/image/job-site/jpg/content-img-main.jpg";
import imgO from "../../assets/image/job-site/jpg/content-img-opacity.jpg";
import imgN from "../../assets/image/job-site/png/notification-badge.png";

const Content = () => (
  <>
    {/* <!-- Content section --> */}
    <div className="content-section border-bottom pt-11 pb-7 pt-lg-24 pb-lg-28 bg-default-6">
      <Container>
        <Row className=" justify-content-center">
          <div className="col-xl-6 col-lg-8 col-sm-10">
            <div className="section-title text-center mb-12 mb-lg-23">
              <h2 className="title gr-text-4 mb-6">
                Find jobs with 3 easy steps
              </h2>
              <p className="gr-text-8 px-lg-7 px-xl-0">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
            </div>
          </div>
        </Row>
        <Row className="align-items-center">
          <Col lg="6">
            <div className="content-img-group text-center mb-8 mb-lg-0">
              <div className="main-image  w-xs-75 w-lg-85 w-xl-75 mx-auto position-relative gr-z-index-1">
                <img className="rounded-10 w-100" src={imgM} alt="" />
                <div
                  className="underlay-shadow-img gr-abs-tl-custom-2 h-100"
                  data-aos="fade-down-right"
                  data-aos-duration="900"
                  data-aos-delay="400"
                >
                  <img className="rounded-10 h-100" src={imgO} alt="" />
                </div>
                <div
                  className="notif-badge gr-abs-bl-custom-3"
                  data-aos="fade-right"
                  data-aos-duration="900"
                >
                  <img className="rounded-10 w-100" src={imgN} alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="content-widget mt-7 mt-lg-0 pr-lg-13 pl-xl-19">
              <Row className="align-items-center">
                <Col
                  md="6"
                  lg="12"
                  className=""
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-9 media">
                    <div className="media-icon circle-sm bg-blue mr-8">
                      <span className="count text-white gr-text-9">1</span>
                    </div>
                    <div className="media-body">
                      <h3 className="w-title mb-5 gr-text-7">
                        Search for a job
                      </h3>
                      <p className="gr-text-9 mb-0">
                        With lots of unique blocks, you can easily build a page
                        without coding.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col
                  md="6"
                  lg="12"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-9 media">
                    <div className="media-icon circle-sm bg-blue mr-8">
                      <span className="count text-white gr-text-9">2</span>
                    </div>
                    <div className="media-body">
                      <h3 className="w-title mb-5 gr-text-7">
                        Apply within our website
                      </h3>
                      <p className="gr-text-9 mb-0">
                        With lots of unique blocks, you can easily build a page
                        without coding.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col
                  md="6"
                  lg="12"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-9 media">
                    <div className="media-icon circle-sm bg-blue mr-8">
                      <span className="count text-white gr-text-9">3</span>
                    </div>
                    <div className="media-body">
                      <h3 className="w-title mb-5 gr-text-7">
                        Get interview call
                      </h3>
                      <p className="gr-text-9 mb-0">
                        With lots of unique blocks, you can easily build a page
                        without coding.
                      </p>
                    </div>
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

export default Content;
