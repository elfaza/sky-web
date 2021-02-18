import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../../assets/image/telemedicine/png/content-1-img1.png";
import imgC2 from "../../assets/image/telemedicine/png/content-1-img2.png";
import imgCS from "../../assets/image/telemedicine/png/content1-img-sub.png";

const Content1 = () => {
  return (
    <>
      {/* <!-- Content1 Area --> */}
      <div className="content-section pt-11 pt-lg-20 pb-11 pb-lg-20 bg-default-6">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col
              xs="11"
              sm="10"
              md="9"
              lg="6"
              className="mb-6 mb-md-13 mb-lg-0"
            >
              <div
                className="tel-content-image-group-1"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                <div className="abs-image-1 responsive-scaling-2">
                  <div className="animation-item">
                    <img
                      className="main-img"
                      src={imgC1}
                      alt=""
                      id="an-item-2p1"
                    />
                  </div>
                </div>
                <div className="abs-image-2 responsive-scaling-2">
                  <div className="animation-item">
                    <img
                      className="main-img"
                      src={imgC2}
                      alt=""
                      id="an-item-2p2"
                    />
                  </div>
                </div>
                <div className="gr-abs-center gr-z-index-n1">
                  <img src={imgCS} alt="" className="responsive-scaling-2" />
                </div>
              </div>
            </Col>
            <Col sm="10" md="9" lg="6" xl="5" className="offset-xl-1">
              <div className="content-text pr-lg-10">
                <h2 className="gr-text-4 mb-9">
                  Make video call with your doctors, get treatment.
                </h2>
                <p className="gr-text-9 mb-0">
                  We've made telemedicine simple and easy for you. Create your
                  personal room and start practicing telemedicine today. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry.{" "}
                </p>
                <Link href="/#">
                  <a className="btn-link with-icon gr-text-blue gr-text-9 font-weight-bold mt-10">
                    Check available doctors
                    <i className="fas fa-arrow-right"></i>
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

export default Content1;
