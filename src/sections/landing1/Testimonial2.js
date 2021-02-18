import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgTesti from "../../assets/image/l5/jpg/l5-testimonial2.jpg";

const Testimonial = () => (
  <>
    {/* <!-- testimonial section --> */}
    <div className="testimonial-section2 position-relative bg-blue dark-mode-texts bg-pattern pattern-4 pt-14 pt-lg-26 pb-14 pb-lg-26 ">
      <Container>
        <Row className="justify-content-center">
          <Col md="8" lg="7" xl="6">
            <div className="section-title text-center mb-9">
              <h4 className="pre-title gr-text-12 text-green text-uppercase mb-0">
                Testimonial
              </h4>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-around">
          <Col lg="7" md="9">
            <div className="single-testimonial text-center">
              <h3 className="review-text gr-text-5 mb-11">
                “Simply the best. Better than all the rest. I’d recommend this
                product to beginners and advanced users.”
              </h3>
              <div className="reviewer-img mb-7">
                <img className="circle-lg mx-auto" src={imgTesti} alt="" />
              </div>
              <h3 className="username gr-text-9 mb-1">Ian Klein</h3>
              <span className="rank gr-text-11 gr-text-color-opacity">
                Digital Marketer
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Testimonial;
