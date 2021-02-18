import React from "react";
import Link from "next/link";
import { Row, Col, Container, Button } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

const Pricing3 = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }}
      >
        <div className="inner-banner pt-25 pt-lg-31 pb-lg-11 bg-default-6">
          <Container>
            <Row className="justify-content-center">
              <Col xl="8" lg="9">
                <div className="px-md-12 text-center mb-11 mb-lg-13">
                  <h2 className="title gr-text-2 mb-9 mb-lg-12">
                    Pricing &amp; Plans
                  </h2>
                  <p className="gr-text-8 mb-0">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next consultancy website within
                    few minutes.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pricing-section pb-5 pb-lg-20 bg-default-6">
          <Container>
            <Row className="justify-content-center">
              <Col lg="4" md="6" sm="8" className="mb-9">
                <div className="pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-9 pb-6 pr-6 pl-6">
                  <span className="badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase">
                    Basic
                  </span>
                  <h2 className="price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-8">
                    $29
                  </h2>
                  <p className="gr-text-11 mb-7 mb-lg-11 gr-color-blackish-blue-opacity-7">
                    One time purchase
                  </p>
                  <p className="gr-text-9 px-5 gr-color-blackish-blue-opacity-7 mb-0">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                  <Button className="gr-hover-y w-100 mt-9 mt-lg-15 gr-text-9">
                    Get started for free
                  </Button>
                </div>
              </Col>
              <Col lg="4" md="6" sm="8" className="mb-9">
                <div className="pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-9 pb-6 pr-6 pl-6">
                  <span className="badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase">
                    Standard
                  </span>
                  <h2 className="price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-8">
                    $49
                  </h2>
                  <p className="gr-text-11 mb-7 mb-lg-11 gr-color-blackish-blue-opacity-7">
                    One time purchase
                  </p>
                  <p className="gr-text-9 px-5 gr-color-blackish-blue-opacity-7 mb-0">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                  <Button className="gr-hover-y w-100 mt-9 mt-lg-15 gr-text-9">
                    Get started for free
                  </Button>
                </div>
              </Col>
              <Col lg="4" md="6" sm="8" className="mb-9">
                <div className="pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-9 pb-6 pr-6 pl-6">
                  <span className="badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase">
                    Premium
                  </span>
                  <h2 className="price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-8">
                    $99
                  </h2>
                  <p className="gr-text-11 mb-7 mb-lg-11 gr-color-blackish-blue-opacity-7">
                    One time purchase
                  </p>
                  <p className="gr-text-9 px-5 gr-color-blackish-blue-opacity-7 mb-0">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                  <Button className="gr-hover-y w-100 mt-9 mt-lg-15 gr-text-9">
                    Get started for free
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="pb-13 pb-lg-24 bg-default-6">
          <Container>
            <Row className="justify-content-center">
              <Col xl="6" lg="6" className="pb-9 pb-lg-15">
                <div className="faq d-flex">
                  <div className="faq-icon mt-1 circle-xs bg-green text-white mr-5 mr-sm-7">
                    <i className="fas fa-question"></i>
                  </div>
                  <div className="faq-texts pr-md-7 pr-lg-0 pr-xl-7">
                    <h3 className="gr-text-7 font-weight-bold mb-7">
                      Can I use Albino for my clients?
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page. Integer ut
                      Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
                      sagittis interdum Melisandre.
                    </p>
                    <Link href="/">
                      <a className="btn-link with-icon font-weight-bold gr-text-9 mt-9">
                        Click to learn more{" "}
                        <i className="fas fa-arrow-right font-weight-bold"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xl="6" lg="6" className="pb-9 pb-lg-15">
                <div className="faq d-flex">
                  <div className="faq-icon mt-1 circle-xs bg-green text-white mr-5 mr-sm-7">
                    <i className="fas fa-question"></i>
                  </div>
                  <div className="faq-texts pr-md-7 pr-lg-0 pr-xl-7">
                    <h3 className="gr-text-7 font-weight-bold mb-7">
                      Does it work with WordPress?
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page. Integer ut
                      Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
                      sagittis interdum Melisandre.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl="6" lg="6" className="pb-9 pb-lg-15">
                <div className="faq d-flex">
                  <div className="faq-icon mt-1 circle-xs bg-green text-white mr-5 mr-sm-7">
                    <i className="fas fa-question"></i>
                  </div>
                  <div className="faq-texts pr-md-7 pr-lg-0 pr-xl-7">
                    <h3 className="gr-text-7 font-weight-bold mb-7">
                      Do I get free updates?
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page. Integer ut
                      Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
                      sagittis interdum Melisandre.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl="6" lg="6" className="pb-9 pb-lg-15">
                <div className="faq d-flex">
                  <div className="faq-icon mt-1 circle-xs bg-green text-white mr-5 mr-sm-7">
                    <i className="fas fa-question"></i>
                  </div>
                  <div className="faq-texts pr-md-7 pr-lg-0 pr-xl-7">
                    <h3 className="gr-text-7 font-weight-bold mb-7">
                      Will you provide support?
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page. Integer ut
                      Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam
                      sagittis interdum Melisandre.
                    </p>
                  </div>
                </div>
              </Col>
              <div className="col-12 text-center mt-lg-9 ">
                <p className="gr-text-9 gr-text-9 gr-text-color mb-0">
                  Haven’t got your answer? <br className="d-xs-none" />
                  <Link href="/">
                    <a className="btn-link">Contact our support now</a>
                  </Link>
                </p>
              </div>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Pricing3;
