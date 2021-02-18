import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgR from "../../assets/image/conference/png/five-star-rating.png";

const Rating = () => {
  return (
    <>
      {/* <!-- Rating Area --> */}
      <div className="rating-section bg-default-6">
        <Container>
          <div className="pt-13 pb-7 pt-lg-24 pb-lg-19 border-bottom">
            <Row>
              <Col lg="6" xl="5">
                <div className="section-title">
                  <h2 className="gr-text-4 gr-text-color">
                    Trusted by 25,000+ happy customers who are using Shade since
                    2019.
                  </h2>
                </div>
              </Col>
              <Col lg="6" xl="5" className="offset-xl-2">
                <div className="rating-wrapper mt-9 mt-lg-0">
                  <Row className="justify-content-md-between">
                    <Col md="5">
                      <div className="single-rating mb-9">
                        <h2 className="gr-text-2 mb-6">15k</h2>
                        <span className="gr-text-9 gr-text-color d-block">
                          Active downloads from the community
                        </span>
                      </div>
                    </Col>
                    <Col md="5">
                      <div className="single-rating mb-9">
                        <h2 className="gr-text-2 mb-6">4.9</h2>
                        <img className="mb-6" src={imgR} alt="" />
                        <span className="gr-text-9 gr-text-color d-block">
                          1,938 Rating
                        </span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Rating;
