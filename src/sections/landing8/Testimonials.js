import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import imgT1 from "../../assets/image/l6/jpg/l6-testimonial-img1.jpg";
import imgT2 from "../../assets/image/l6/jpg/l6-testimonial-img2.jpg";
import imgT3 from "../../assets/image/l6/jpg/l6-testimonial-img3.jpg";

const Testimonials = () => {
  return (
    <>
      {/* <!-- Testimonials Area --> */}
      <div className="testimonial-section pt-15 pt-lg-22 pb-15 pb-lg-25 ">
        <Container>
          <Row className="justify-content-center dark-mode-texts">
            <Col md="8" lg="7" xl="6">
              <div className="section-title text-center mb-11 mb-lg-15">
                <h2 className="title-sm gr-text-5 mb-0 text-white">
                  <span className="strike-bottom green">
                    1,749 remote teams
                  </span>{" "}
                  have shared their experience with our app!
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col
              xs="10"
              lg="8"
              className="mb-7"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="testimonial-card d-flex flex-column flex-md-row align-items-md-center border rounded-12 bg-white pt-9 pb-8 px-9 gr-hover-opacity-full">
                <div className="card-image rounded-circle mr-9 mb-7 mb-md-0">
                  <img className="circle-xxl w-100" src={imgT1} alt="" />
                </div>
                <div className="testimonial-content">
                  <p className="review-text gr-text-7 text-blackish-blue mb-6">
                    “OMG! I cannot believe that I have got a brand new landing
                    page after getting Omega. It was super easy to edit and
                    publish.”
                  </p>
                  <span className="name gr-text-9 text-blackish-blue gr-opacity-7 mb-0">
                    Isaac Olson
                  </span>
                </div>
              </div>
            </Col>
            <Col
              xs="10"
              lg="8"
              className="mb-7"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="testimonial-card d-flex flex-column flex-md-row align-items-md-center border rounded-12 bg-white pt-9 pb-8 px-9 gr-opacity-7 gr-hover-opacity-full">
                <div className="card-image rounded-circle mr-9 mb-7 mb-md-0">
                  <img className="circle-xxl w-100" src={imgT2} alt="" />
                </div>
                <div className="testimonial-content">
                  <p className="review-text gr-text-7 text-blackish-blue mb-6">
                    “Simply the best. Better than all the rest. I’d recommend
                    this product to beginners and advanced users who want
                    success.”
                  </p>
                  <span className="name gr-text-9 text-blackish-blue gr-opacity-7 mb-0">
                    Barry Young
                  </span>
                </div>
              </div>
            </Col>
            <Col
              xs="10"
              lg="8"
              className="mb-7"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="testimonial-card d-flex flex-column flex-md-row align-items-md-center border rounded-12 bg-white pt-9 pb-8 px-9 gr-opacity-5 gr-hover-opacity-full">
                <div className="card-image rounded-circle mr-9 mb-7 mb-md-0">
                  <img className="circle-xxl w-100" src={imgT3} alt="" />
                </div>
                <div className="testimonial-content">
                  <p className="review-text gr-text-7 text-blackish-blue mb-6">
                    “Must have book for all, who want to be Product Designer or
                    Interaction Designer.”
                  </p>
                  <span className="name gr-text-9 text-blackish-blue gr-opacity-7 mb-0">
                    Esther Allison
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="7" className="text-center pt-10">
              <div className="more-btn testimonial-btn">
                <Link href="/#">
                  <a className="btn-link with-icon text-green font-weight-bold">
                    Read more reviews
                    <i className="icon icon-tail-right font-weight-bold"></i>
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Testimonials;
