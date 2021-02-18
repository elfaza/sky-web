import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import imgCL from "../../assets/image/l8/png/content-left-image.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="bg-blue dark-mode-texts pt-13 pt-md-25 pb-13 pb-md-25 mx-md-6 rounded-10 mb-6">
        <Container>
          <Row className="align-items-center">
            <Col
              md="6"
              lg="6"
              className="mb-n15"
              data-aos="zoom-in-down"
              data-aos-duration="1100"
            >
              <div className="content-img text-left pr-xl-13 ml-n8">
                <img src={imgCL} alt="" className="w-100" />
              </div>
            </Col>
            <Col xs="11" sm="12" md="6" lg="5">
              <div className="pl-lg-3 pl-xl-12 mt-12 mt-md-0">
                <h2 className="title gr-text-4 mb-7">
                  Track your progress with our advanced site.
                </h2>
                <p className="gr-text-8 gr-text-color-opacity">
                  We share common trends and strategies for improving your
                  rental income and making sure you stay in high demand.
                </p>
                <div className="pt-7">
                  <Link href="/#">
                    <a className="btn-link with-icon text-white btn-hover-translate-none gr-text-9 pl-0 pr-0 font-weight-bold">
                      Start shopping{" "}
                      <i className="icon icon-tail-right font-weight-bold"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
