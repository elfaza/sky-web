import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";

import imgS1 from "../../assets/image/l3/jpg/l3-service-img1.jpg";
import imgS2 from "../../assets/image/l3/jpg/l3-service-img2.jpg";
import imgS3 from "../../assets/image/l3/jpg/l3-service-img3.jpg";

const Services = () => {
  return (
    <>
      {/* <!-- Services Area --> */}
      <div className="service-section bg-default-2 pt-12 py-lg-23">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="8" md="10">
              <div className="section-title text-center mb-11 mb-lg-15">
                <h2 className="title gr-text-4 mb-6">
                  Services we offer for you
                </h2>
                <p className="gr-text-8 mb-0 px-lg-7 px-xl-0">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col lg="4" md="6" sm="10" className="mb-13 mb-lg-0">
              <div className="service-card">
                <h3 className="card-title gr-text-7 mb-7">Digital Marketing</h3>
                <div className="img-thumb mb-8">
                  <img className="rounded-10 w-100" src={imgS1} alt="" />
                </div>
                <p className="excerpt gr-text-9 mb-6">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
                <Link href="/#">
                  <a className="btn-link with-icon gr-text-9 font-weight-bold">
                    Learn more{" "}
                    <i className="icon icon-tail-right font-weight-bold"></i>
                  </a>
                </Link>
              </div>
            </Col>
            <Col lg="4" md="6" sm="10" className="mb-13 mb-lg-0">
              <div className="service-card">
                <h3 className="card-title gr-text-7 mb-7">Business Growth</h3>
                <div className="img-thumb mb-8">
                  <img className="rounded-10 w-100" src={imgS2} alt="" />
                </div>
                <p className="excerpt gr-text-9 mb-6">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
                <Link
                  href="/#"
                  className="btn-link with-icon gr-text-9 font-weight-bold"
                >
                  <a className="btn-link with-icon gr-text-9 font-weight-bold">
                    Learn more{" "}
                    <i className="icon icon-tail-right font-weight-bold"></i>
                  </a>
                </Link>
              </div>
            </Col>
            <Col lg="4" md="6" sm="10" className="mb-13 mb-lg-0">
              <div className="service-card">
                <h3 className="card-title gr-text-7 mb-7">Content Marketing</h3>
                <div className="img-thumb mb-8">
                  <img className="rounded-10 w-100" src={imgS3} alt="" />
                </div>
                <p className="excerpt gr-text-9 mb-6">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
                <Link
                  href="/#"
                  className="btn-link with-icon gr-text-9 font-weight-bold"
                >
                  <a className="btn-link with-icon gr-text-9 font-weight-bold">
                    Learn more{" "}
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

export default Services;
