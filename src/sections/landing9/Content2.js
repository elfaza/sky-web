import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgCB from "../../assets/image/l7/jpg/content2-img-big.jpg";
import imgT from "../../assets/image/l7/jpg/testimonial-1.jpg";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section pt-15 pb-11 pt-lg-25 pb-lg-24 pt-xl-30 pb-xl-28 position-relative bg-blue dark-mode-texts overflow-hidden">
        <Container>
          <Row className="align-items-center justify-content-md-center">
            <Col sm="10" lg="5" className="order-lg-2 position-static">
              <div className="content-img position-relative gr-abs-lg gr-abs-lg-ry-center w-lg-50 text-center text-lg-right">
                <img className="h-100 w-100 w-lg-75" src={imgCB} alt="" />
              </div>
            </Col>
            <Col sm="11" lg="7" className="order-lg-1">
              <Row>
                <Col lg="10" xl="9">
                  <div className="content-text mb-9 mb-lg-18 mt-11 mt-lg-0">
                    <h2 className="title gr-text-3 mb-6">
                      Comfortable buds with better sound.
                    </h2>
                    <p className="gr-text-8 mb-9 pr-11">
                      We share common trends and strategies for improving your
                      rental income.
                    </p>
                  </div>
                  <div className="testimonial-wrapper mt-6 mt-md-0">
                    <div
                      className="single-testimonial media py-6"
                      data-aos="fade-left"
                      data-aos-duration="800"
                    >
                      <div className="media-icon mr-8">
                        <img className=" circle-sm-2" src={imgT} alt="" />
                      </div>
                      <div className="media-body">
                        <p className="gr-text-7 mb-0 pr-xl-6 gr-text-color mb-8">
                          “You made it so simple. My new site is so much faster
                          and easier to work with than my old site.”
                        </p>
                        <span className="name gr-text-11 gr-text-color-opacity">
                          Rhoda Brady
                        </span>
                      </div>
                    </div>
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
