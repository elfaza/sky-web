import React, { useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import imgC from "../../assets/image/l2/jpg/l2-content2-img.jpg";

const Content = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section2 pt-12 pb-9 pt-lg-21 pb-lg-25 bg-default-2">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="8" sm="10">
              <div className="section-title text-center mb-12 mb-lg-17">
                <h2 className="title gr-text-4 mb-7">
                  Why you should choose us?
                </h2>
                <p className="gr-text-8 px-lg-7 px-xl-0">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg="6">
              <div className="content-video-thumb rounded-8 gr-hover-shadow-2">
                <img className="w-100 rounded-8" src={imgC} alt="" />
                <a
                  className="video-play-trigger circle-xl bg-white gr-abs-center gr-abs-hover-y focus-reset"
                  tabIndex="-1"
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleVideoModal();
                  }}
                >
                  <i className="icon icon-triangle-right-17-2 text-green"></i>
                </a>
              </div>
            </Col>
            <Col lg="5">
              <div className="content-widget mt-7 mt-lg-0 pl-xl-13">
                <Row className="align-items-center">
                  <Col
                    md="6"
                    lg="12"
                    data-aos="fade-left"
                    data-aos-duration="750"
                  >
                    <div className="single-widget my-7 media">
                      <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                        <span className="count text-primary--light-only gr-text-9">
                          1
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">Easy Booking</h3>
                        <p className="gr-text-9 mb-0">
                          With lots of unique blocks, you can easily build a
                          page without coding.{" "}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col
                    md="6"
                    lg="12"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <div className="single-widget my-7 media">
                      <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                        <span className="count text-primary--light-only gr-text-9">
                          2
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          Free Expert Opinion
                        </h3>
                        <p className="gr-text-9 mb-0">
                          With lots of unique blocks, you can easily build a
                          page without coding.{" "}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col
                    md="6"
                    lg="12"
                    data-aos="fade-left"
                    data-aos-duration="1800"
                  >
                    <div className="single-widget my-7 media">
                      <div className="media-icon circle-sm gr-bg-blue-opacity-1 mr-8">
                        <span className="count text-primary--light-only gr-text-9">
                          3
                        </span>
                      </div>
                      <div className="media-body">
                        <h3 className="w-title mb-5 gr-text-7">
                          Get Your Results
                        </h3>
                        <p className="gr-text-9 mb-0">
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
        </Container>
      </div>
    </>
  );
};

export default Content;
