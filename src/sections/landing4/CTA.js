import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const CTA = () => {
  return (
    <>
      {/* <!-- CTA Area --> */}
      <div className="cta-section-1 py-12 pt-lg-20 pb-lg-18 border-bottom border-gray-3 ">
        <Container>
          <Row className="align-items-center ">
            <Col lg="6">
              <div className="section-title cta-text pr-lg-5">
                <h2 className="gr-text-5 mb-7">
                  Build better landing page fast
                </h2>
                <p className="gr-text-8">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </Col>
            <Col lg="6" xl="5" className="offset-xl-1">
              <div className="cta-btn d-flex flex-column flex-sm-row justify-content-lg-end mt-5 mt-lg-0">
                <Link href="/">
                  <a className="btn gr-bg-blue-opacity-1 text-primary--light-only gr-hover-y with-icon mr-sm-7 mb-6 mb-sm-0">
                    Learn more
                    <i className="icon icon-tail-right font-weight-bold"></i>
                  </a>
                </Link>
                <Link href="/">
                  <a className="btn btn-primary with-icon gr-hover-y">
                    Get it now
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

export default CTA;
