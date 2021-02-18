import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";

const Alert = () => {
  return (
    <>
      {/* <!-- Alert Area --> */}
      <div className="alert-section py-9 bg-primary dark-mode-texts ">
        <Container>
          <Row className="justify-content-center">
            <Col xl="7" lg="8" md="9">
              <div className="alert-content d-flex flex-column flex-lg-row align-items-center text-center justify-content-lg-center">
                <span className="btn-badge rounded-pill bg-white gr-text-12 text-uppercase font-weight-bold text-blue py-1 px-6 mr-5 mb-6 mb-lg-0 d-inline-flex align-items-center">
                  New
                </span>
                <span className="alert-text gr-text-9 text-white">
                  We’ve added a new exciting feature in v3.0.{" "}
                  <Link href="/#">
                    <a className="action-link text-white gr-text-underline">
                      Get it now for $49.
                    </a>
                  </Link>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Alert;
