import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import imgC from "../../assets/image/telemedicine/png/content-2-img-2.png";
import imgCS1 from "../../assets/image/telemedicine/png/content2-img-sub-1.png";
import imgCS from "../../assets/image/telemedicine/png/content2-img-sub.png";

const Content2 = () => {
  return (
    <>
      {/* <!-- Content2 Area --> */}
      <div className="content-section pt-11 pt-lg-22 pb-13 pb-lg-26 bg-default-6 hover-shadow-up">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col
              sm="10"
              md="7"
              lg="6"
              xl="5"
              className="offset-xl-2 order-lg-2 mb-9 mb-lg-0"
            >
              <div
                className="double-image-group tel-content-image-group-2"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <img
                  className="main-img position-relative gr-z-index-1"
                  src={imgC}
                  alt=""
                />
                <div
                  className="abs-image-1 gr-z-index-n1"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                >
                  <img
                    src={imgCS1}
                    alt=""
                    className="h-sm-100  anim-shadow-up rounded-10"
                  />
                </div>
                <div
                  className="abs-image-2"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                  css={`
                    z-index: initial !important;
                  `}
                >
                  <img src={imgCS} alt="" />
                </div>
              </div>
            </Col>
            <Col sm="10" md="9" lg="6" xl="5" className="order-lg-1">
              <div className="content-text">
                <h2 className="gr-text-4 mb-8">
                  Get your treatments online, without having any issues.
                </h2>
                <p className="gr-text-9 mb-0 pr-lg-10">
                  We've made telemedicine simple and easy for you. Create your
                  personal room and start practicing telemedicine today. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry.{" "}
                </p>
                <Link href="/#">
                  <a className="btn-link with-icon gr-text-blue gr-text-9 font-weight-bold mt-9">
                    Book my appointment<i className="fas fa-arrow-right"></i>
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

export default Content2;
