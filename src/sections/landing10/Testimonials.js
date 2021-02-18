import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgT1 from "../../assets/image/l3/jpg/l3-testimonial1.jpg";
import imgT2 from "../../assets/image/l3/jpg/l3-testimonial2.jpg";
import imgT3 from "../../assets/image/l3/jpg/l3-testimonial3.jpg";

const Testimonials = () => {
  return (
    <>
      {/* <!-- Testimonials Area --> */}
      <div className="testimonial-section pt-lg-21 pb-lg-21 pt-12 pb-8 ">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="8" md="10">
              <div className="section-title text-center mb-11 mb-lg-14">
                <h2 className="title gr-text-4 mb-6">
                  What people say about us
                </h2>
                <p className="gr-text-8 mb-0 px-lg-7 px-xl-0">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-around">
            <Col lg="4" md="6" className="mb-9">
              <div className="card rounded-10 border p-9 h-100">
                <div className="customer-img circle-sm-2 mb-9 mb-lg-14">
                  <img src={imgT1} alt="" className="w-100" />
                </div>
                <p className="review-text gr-text-7 text-blackish-blue mb-7 mb-lg-8">
                  “You made it so simple. My new site is so much faster and
                  easier to work with than my old site.”
                </p>
                <div className="customer-identity d-md-flex align-items-center mt-auto">
                  <h3 className="name gr-text-9 mb-2 mb-md-0 mr-3 text-blackish-blue">
                    Isabella Chavez
                  </h3>
                  <p className="rank gr-text-9 mb-0 gr-color-blackish-blue-opacity-7">
                    Graphic Designer
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="mb-9">
              <div className="card rounded-10 border p-9 h-100">
                <div className="customer-img circle-sm-2 mb-9 mb-lg-14">
                  <img src={imgT2} alt="" />
                </div>
                <p className="review-text gr-text-7 text-blackish-blue mb-7 mb-lg-8">
                  “Simply the best. Better than all the rest. I’d recommend this
                  product to beginners and advanced users.”
                </p>
                <div className="customer-identity d-md-flex align-items-center mt-auto">
                  <h3 className="name gr-text-9 mb-2 mb-md-0 mr-3 text-blackish-blue">
                    Curtis Rhodes
                  </h3>
                  <p className="rank gr-text-9 mb-0 gr-color-blackish-blue-opacity-7">
                    Digital Marketer
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="mb-9">
              <div className="card rounded-10 border p-9 h-100">
                <div className="customer-img circle-sm-2 mb-9 mb-lg-14">
                  <img src={imgT3} alt="" />
                </div>
                <p className="review-text gr-text-7 text-blackish-blue mb-7 mb-lg-8">
                  “Must have book for all, who want to be Product Designer or
                  Interaction Designer.”
                </p>
                <div className="customer-identity d-md-flex align-items-center mt-auto">
                  <h3 className="name gr-text-9 mb-2 mb-md-0 mr-3 text-blackish-blue">
                    Lucas Mann
                  </h3>
                  <p className="rank gr-text-9 mb-0 gr-color-blackish-blue-opacity-7">
                    Co Founder
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

export default Testimonials;
