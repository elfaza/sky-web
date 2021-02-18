import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgQuote from "../../assets/image/l4/png/quote.png";

const Testimonial = () => {
  return (
    <>
      {/* <!-- Testimonial Area --> */}
      <div className="testimonial-section pt-9 pt-lg-20 pb-lg-25 bg-default-5">
        <Container>
          <Row className="justify-content-center">
            <Col
              md="6"
              className="mb-13 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              <div className="testimonial-card">
                <div className="quote-icon pb-14">
                  <img src={imgQuote} alt="" />
                </div>
                <p className="review-text gr-text-6 font-weight-bold gr-text-color pr-xl-11 mb-0">
                  “OMG! I cannot believe that I have got a brand new landing
                  page after getting Omega. It was super easy to edit and
                  publish.”
                </p>
                <div className="customer-identity d-flex pt-8">
                  <h3 className="name gr-text-9 font-weight-bold mb-0">
                    Diego Morata
                  </h3>
                  <p className="rank gr-text-9 pl-5 gr-text-color-opacity mb-0">
                    Web Developer
                  </p>
                </div>
              </div>
            </Col>
            <Col
              md="6"
              className="mb-13 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="1100"
              data-aos-delay="500"
            >
              <div className="testimonial-card">
                <div className="quote-icon pb-14">
                  <img src={imgQuote} alt="" />
                </div>
                <p className="review-text gr-text-6 font-weight-bold gr-text-color pr-xl-11 mb-0">
                  “Simply the best. Better than all the rest. I’d recommend this
                  product to beginners and advanced users.”
                </p>
                <div className="customer-identity d-flex pt-8">
                  <h3 className="name gr-text-9 font-weight-bold mb-0">
                    Franklin Hicks
                  </h3>
                  <p className="rank gr-text-9 pl-5 gr-text-color-opacity mb-0">
                    Digital Marketer
                  </p>
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
