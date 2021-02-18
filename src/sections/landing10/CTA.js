import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const CTA = () => {
  return (
    <>
      {/* <!-- CTA Area --> */}
      <div className="cta-section bg-green dark-mode-texts pt-12 pb-13 pt-md-15 pb-md-15 ">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg="10">
              <div
                className="cta-text d-flex flex-column flex-sm-row align-items-center justify-content-center"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <h2 className="title gr-text-5 mb-6 mb-sm-0 mr-sm-9 ">
                  Ready to get started?
                </h2>
                <div
                  className="cta-btn"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  data-aos-delay="500"
                >
                  <Link href="/#">
                    <a className="btn btn-white bg-white gr-hover-y">
                      Get A Free Quote
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

export default CTA;
