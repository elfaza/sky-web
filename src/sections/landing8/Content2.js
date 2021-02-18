import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgC from "../../assets/image/l6/png/l6-content2-img.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section pt-6 pt-lg-19 pb-7 bg-default-4">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col
              lg="6"
              className="order-lg-2"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <div className="content-img text-right">
                <img src={imgC} alt="" className="w-100" />
              </div>
            </Col>
            <Col xs="10" lg="6" xl="5" className="pr-xl-13 order-lg-1">
              <div className="section-title content-text mb-13">
                <h2 className="title gr-text-3 mb-6">
                  Organize remote team fast &amp; easily.
                </h2>
                <p className="gr-text-8">
                  We share common trends and strategies for improving your
                  rental income.
                </p>
              </div>
              <div className="content-widget">
                <Row className="mb-n9">
                  <Col
                    md="6"
                    lg="9"
                    xl="10"
                    data-aos="fade-right"
                    data-aos-duration="500"
                  >
                    <div className="single-widget mb-9">
                      <h3 className="w-title gr-text-7">
                        Create Unlimited Teams
                      </h3>
                      <p className="gr-text-9 mb-0">
                        With lots of unique blocks, you can easily build a page
                        without coding.{" "}
                      </p>
                    </div>
                  </Col>
                  <Col
                    md="6"
                    lg="9"
                    xl="10"
                    data-aos="fade-right"
                    data-aos-duration="1100"
                  >
                    <div className="single-widget mb-9">
                      <h3 className="w-title gr-text-7">
                        Hasslefree Chat with Everyone
                      </h3>
                      <p className="gr-text-9 mb-0">
                        With lots of unique blocks, you can easily build a page
                        without coding.{" "}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
