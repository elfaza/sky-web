import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgL from "../../assets/image/l7/png/product-left.png";
import imgR from "../../assets/image/l7/png/product-right.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section-3 pt-13 pb-15 py-lg-23 py-xl-29 bg-pattern pattern-3 bg-blackish-blue dark-mode-texts">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xl="6" lg="7" md="8">
              <div className="text-center content-3">
                <div className="section-title">
                  <h2 className="title gr-text-3 mb-7">
                    Trendy designs with better sound quality.
                  </h2>
                  <p className="gr-text-8 mb-17 px-11">
                    We share common trends and strategies for improving your
                    rental income.
                  </p>
                </div>
                <div className="two-side-image d-flex">
                  <div
                    className="left-side-image"
                    data-aos="fade-right"
                    data-aos-duration="750"
                  >
                    <img src={imgL} alt="" className="w-100" />
                  </div>
                  <div
                    className="right-side-image mt-25"
                    data-aos="fade-left"
                    data-aos-duration="750"
                  >
                    <img src={imgR} alt="" className="w-100" />
                  </div>
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
