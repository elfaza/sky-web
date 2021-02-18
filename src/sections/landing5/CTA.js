import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import imgBG from "../../assets/image/l8/jpg/cta-bg.jpg";

const CTA = () => {
  return (
    <>
      {/* <!-- CTA Area --> */}
      <div
        className="pt-13 pt-md-35 pb-13 pb-md-35 bg-image mx-md-6 rounded-10 "
        css={`
          background-image: url(${imgBG});
        `}
      >
        <Container>
          <Row className="justify-content-center">
            <Col xs="10" sm="10" md="9" lg="8" xl="7">
              <div className="text-center dark-mode-texts">
                <h2 className="gr-text-2 font-weight-bold pb-8 pb-md-12">
                  Ready to have a decorated lifestyle?
                </h2>
                <Link href="/#">
                  <a className="btn btn-green gr-hover-y">Start Shopping</a>
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
