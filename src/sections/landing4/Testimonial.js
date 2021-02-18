import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import imgT1 from "../../assets/image/l1/jpg/l1-testimonial-img1.jpg";
import imgT2 from "../../assets/image/l1/jpg/l1-testimonial-img2.jpg";

const Testimonial = () => {
  return (
    <>
      {/* <!-- Testimonial Area --> */}
      <div className="testimonial-section pt-13 pt-lg-24 pb-lg-19 bg-default-2">
        <Container>
          <Row className="align-items-center justify-content-around">
            <Col lg="5" xl="4">
              <div className="testimonial-widget-1 text-center mb-13 mb-lg-0">
                <div className="reviewer-img d-flex justify-content-center mb-7 mb-lg-12">
                  <img className="img-fluid circle-lg" src={imgT1} alt="" />
                </div>
                <div className="review">
                  <h3 className="gr-text-6 mb-6 mb-lg-8">
                    “You made it so simple”
                  </h3>
                  <p className="gr-text-8 mb-lg-8">
                    My new site is so much faster and easier to work with than
                    my old site.
                  </p>
                  <p className="name gr-text-color gr-text-9 font-weight-bold mb-0">
                    Corey Valdez
                  </p>
                  <p className="job gr-text-11">Founder at Zenix</p>
                </div>
              </div>
            </Col>
            <Col lg="1">
              <div className="separator-line d-none d-lg-block"></div>
            </Col>
            <Col lg="5" xl="4">
              <div className="testimonial-widget-1 text-center mb-13 mb-lg-0">
                <div className="reviewer-img d-flex justify-content-center mb-7 mb-lg-12">
                  <img className="img-fluid circle-lg" src={imgT2} alt="" />
                </div>
                <div className="review">
                  <h3 className="gr-text-6 mb-6 mb-lg-8">“Simply the best”</h3>
                  <p className="gr-text-8 mb-lg-8">
                    Better than all the rest. I’d recommend this product to
                    beginners.
                  </p>
                  <p className="name gr-text-color gr-text-9 font-weight-bold mb-0">
                    Ian Klein
                  </p>
                  <p className="job gr-text-11">Digital Marketer</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Testimonial;
