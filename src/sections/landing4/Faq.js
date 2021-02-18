import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const Faq = () => {
  return (
    <>
      {/* <!-- Faq Area --> */}
      <div className="faq-section pb-12 pb-lg-24 bg-blackish-blue dark-mode-texts">
        <Container>
          <Row>
            <Col md="6" className="mb-9 pr-xl-12 mb-lg-15">
              <div className="single-faq media">
                <div className="count circle-xs bg-green mr-8">
                  <i className="fas fa-question text-white"></i>
                </div>
                <div className="faq-text">
                  <h3 className="faq-title mb-7 gr-text-7 gr-text-color">
                    Can I use Albino for my clients?
                  </h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page. Integer ut
                    Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
                    sagittis interdum Melisandre.
                  </p>
                  <Link href="/">
                    <a className="btn-link with-icon mt-6 text-green h6">
                      Click to learn more{" "}
                      <i className="fas fa-arrow-right gr-text-12"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md="6" className="mb-9 pr-xl-12 mb-lg-15">
              <div className="single-faq media">
                <div className="count circle-xs bg-green mr-8">
                  <i className="fas fa-question text-white"></i>
                </div>
                <div className="faq-text">
                  <h3 className="faq-title mb-7 gr-text-7 gr-text-color">
                    Does it work with WordPress?
                  </h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page. Integer ut
                    Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
                    sagittis interdum Melisandre.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6" className="mb-9 pr-xl-12 mb-lg-15">
              <div className="single-faq media">
                <div className="count circle-xs bg-green mr-8">
                  <i className="fas fa-question text-white"></i>
                </div>
                <div className="faq-text">
                  <h3 className="faq-title mb-7 gr-text-7 gr-text-color">
                    Do I get free updates?
                  </h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page. Integer ut
                    Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
                    sagittis interdum Melisandre.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6" className="mb-9 pr-xl-12 mb-lg-15">
              <div className="single-faq media">
                <div className="count circle-xs bg-green mr-8">
                  <i className="fas fa-question text-white"></i>
                </div>
                <div className="faq-text">
                  <h3 className="faq-title mb-7 gr-text-7 gr-text-color">
                    Will you provide support?
                  </h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page. Integer ut
                    Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
                    sagittis interdum Melisandre.
                  </p>
                </div>
              </div>
            </Col>
            <div className="col-12 text-center mt-3 ">
              <p className="more-support gr-text-9 gr-text-color">
                Haven’t got your answer?{" "}
                <Link href="/">
                  <a className="support-link text-green">
                    Contact our support now
                  </a>
                </Link>
              </p>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Faq;
