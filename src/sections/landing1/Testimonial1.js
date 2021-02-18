import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgT from "../../assets/image/l5/jpg/l5-testimonial1.jpg";
import img5Star from "../../assets/image/l5/png/5-stars.png";

const Testimonial = () => (
  <>
    {/* <!-- testimonial section --> */}
    <div className="testimonial-section1 bg-default-4">
      <Container>
        <div className="review-wrapper pt-9 pb-lg-25 pb-14 border-bottom">
          <Row className="justify-content-center align-items-center">
            <Col lg="12" xl="11">
              <div className="review-widget media align-items-center px-lg-7 flex-column flex-sm-row">
                <div className="widget-image mr-12 mr-lg-19 mb-9 mb-md-0">
                  <img className="circle-xxxl" src={imgT} alt="" />
                </div>
                <div className="widget-text">
                  <img className="rating mb-11" src={img5Star} alt="" />
                  <h4 className="review-text gr-text-6 font-weight-bold mb-9">
                    “OMG! I cannot believe that I have got a brand new landing
                    page after getting Albino. It was super easy to edit and
                    publish.”
                  </h4>
                  <div className="reviewer-block d-flex flex-wrap">
                    <h5 className="name gr-text-9 mr-7 mb-md-0">
                      Franklin Hicks
                    </h5>
                    <span className="excerpt gr-text-9 mb-0 gr-text-color-opacity">
                      Web Developer
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  </>
);

export default Testimonial;
