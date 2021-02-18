import React, { useState } from "react";
import Link from "next/link";
import { Row, Col, Container, Button, Collapse } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

const Pricing2 = () => {
  const [openItem, setOpenItem] = useState(1);

  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }}
      >
        <div className="inner-banner bg-default-2 pt-25 pt-lg-29">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col lg="9" xl="8">
                <div className="px-md-15 text-center mb-5 mb-lg-13">
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

        <div className="pricing-section bg-default-2 pt-lg-9 pb-5 pb-md-19">
          <Container>
            <Row className="justify-content-center">
              <Col
                lg="4"
                md="6"
                sm="8"
                className="col-lg-4 col-md-6 col-sm-8 mb-9"
              >
                <div className="pricing-card gr-hover-shadow-1 text-center pt-9 pb-9 pr-9 pr-xl-9 pl-9 pl-xl-9 bg-white rounded-10">
                  <div className="price-content light-mode-texts">
                    <span className="small-title gr-text-12 text-uppercase text-red font-weight-bold">
                      Starter
                    </span>
                    <div className="d-flex align-items-end justify-content-center mt-9 ">
                      <span className="currency mr-2 gr-text-6 text-blackish-blue font-weight-bold line-spacing-none">
                        $
                      </span>
                      <h2 className="price-value gr-text-2 text-blackish-blue font-weight-bold line-spacing-none mb-0">
                        19
                      </h2>
                      <span className="per gr-text-9 text-blackish-blue">
                        /mo
                      </span>
                    </div>
                    <ul className="card-list list-style-border text-center pl-0 mt-9 mb-3 mx-auto">
                      <li className="text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block">
                        Upto 100 Team Members
                      </li>
                      <li className="text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block">
                        100 GB Cloud Storage
                      </li>
                      <li className="text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block">
                        Unlimited Meetings
                      </li>
                      <li className="text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block">
                        Premium Support
                      </li>
                    </ul>
                  </div>
                  <Button
                    variant="dark"
                    className="btn-black gr-hover-y gr-min-width-219 mx-auto"
                  >
                    Get Started Now
                  </Button>
                </div>
              </Col>
              <Col
                lg="4"
                md="6"
                sm="8"
                className="col-lg-4 col-md-6 col-sm-8 mb-9"
              >
                <div className="pricing-card gr-hover-shadow-1 text-center pt-9 pb-9 pr-9 pr-xl-9  pl-9 pl-xl-9 bg-white rounded-10">
                  <div className="price-content light-mode-texts">
                    <span className="small-title gr-text-12 text-uppercase text-red font-weight-bold">
                      Unlimited
                    </span>
                    <div className="d-flex align-items-end justify-content-center mt-9 ">
                      <span className="currency mr-2 gr-text-6 text-blackish-blue font-weight-bold line-spacing-none">
                        $
                      </span>
                      <h2 className="price-value gr-text-2 text-blackish-blue font-weight-bold line-spacing-none mb-0">
                        99
                      </h2>
                      <span className="per gr-text-9 text-blackish-blue ">
                        /mo
                      </span>
                    </div>
                    <ul className="card-list list-style-border text-center pl-0 mt-9 mb-3 mx-auto">
                      <li className="text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block">
                        Unlimited Team Members
                      </li>
                      <li className="text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block">
                        Unlimited Cloud Storage
                      </li>
                      <li className="text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block">
                        Unlimited Meetings
                      </li>
                      <li className="text-black gr-text-8 border-top border-gray-3 mb-0 py-7 d-block">
                        Premium Support
                      </li>
                    </ul>
                  </div>
                  <Button variant="danger" className="gr-hover-y w-100 mx-auto">
                    Get Started Now
                  </Button>
                </div>
              </Col>
              <Col
                lg="4"
                md="6"
                sm="8"
                className="col-lg-4 col-md-6 col-sm-8 mb-9"
              >
                <div className="pricing-card h-100 gr-hover-shadow-1 text-center pt-9 pb-9 pr-9 pr-xl-9 pl-9 pl-xl-9 bg-blue rounded-10 dark-mode-texts d-lg-flex flex-column">
                  <div className="price-content">
                    <span className="small-title gr-text-12 text-uppercase text-red font-weight-bold text-gray-2 pb-9 d-block">
                      Enterprise
                    </span>
                    <p className="gr-text-9 gr-color-white-opacity-6">
                      Advanced features for large teams with complex projects.
                    </p>
                    <ul className="card-list list-style-border text-center pl-0 mt-9 mb-3 mx-auto">
                      <li className="gr-text-color gr-text-8 border-top border-gray-opacity mb-0 py-7 d-block">
                        Unlimited Team Members
                      </li>
                      <li className="gr-text-color gr-text-8 border-top border-gray-opacity mb-0 py-7 d-block">
                        5TB Cloud Storage
                      </li>
                      <li className="gr-text-color gr-text-8 border-top border-gray-opacity mb-0 py-7 d-block">
                        Unlimited Meetings
                      </li>
                      <li className="gr-text-color gr-text-8 border-top border-gray-opacity mb-0 py-7 d-block">
                        Premium Support
                      </li>
                    </ul>
                  </div>
                  <Button
                    variant="success"
                    className="gr-hover-y gr-min-width-219 text-white mx-auto mt-auto"
                  >
                    Contact Sales
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="bg-default-2 pt-lg-7 pb-9 pb-lg-22">
          <Container>
            <Row className="justify-content-center">
              <Col xl="8" lg="9">
                <div className="px-md-12 text-center mb-9 mb-lg-18">
                  <h2 className="title gr-text-3 mb-8">
                    Frequently Asked Questions
                  </h2>
                  <p className="gr-text-8 mb-0">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next consultancy website within
                    few minutes.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col xl="8" lg="9">
                <div className="accordion" id="accordionExample">
                  <div className="border rounded-10 mb-3 bg-white overflow-hidden">
                    <div
                      className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                      id="heading4-1"
                    >
                      <button
                        className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100"
                        type="button"
                        aria-controls="collapse-1"
                        onClick={() => setOpenItem(1)}
                        aria-expanded={openItem === 1}
                      >
                        Can I use Albino for my clients?
                      </button>
                    </div>
                    <Collapse in={openItem === 1}>
                      <div>
                        <div className="card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9">
                          With lots of unique blocks, you can easily build a
                          page without coding. Build your next landing page.
                          Integer ut Oberyn massa. Sed feugiat vitae turpis a
                          porta. Aliquam sagittis interdum Melisandre.
                        </div>
                      </div>
                    </Collapse>
                  </div>
                  <div className="border rounded-10 mb-3 bg-white overflow-hidden">
                    <div
                      className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                      id="heading4-2"
                    >
                      <button
                        className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100"
                        type="button"
                        aria-controls="collapse-2"
                        onClick={() => setOpenItem(2)}
                        aria-expanded={openItem === 2}
                      >
                        Does it work with WordPress?
                      </button>
                    </div>
                    <Collapse in={openItem === 2}>
                      <div>
                        <div className="card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9">
                          With lots of unique blocks, you can easily build a
                          page without coding. Build your next landing page.
                        </div>
                      </div>
                    </Collapse>
                  </div>
                  <div className="border rounded-10 mb-3 bg-white overflow-hidden">
                    <div
                      className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                      id="heading4-3"
                    >
                      <button
                        className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100"
                        type="button"
                        aria-controls="collapse-3"
                        onClick={() => setOpenItem(3)}
                        aria-expanded={openItem === 3}
                      >
                        Do I get free updates?
                      </button>
                    </div>
                    <Collapse in={openItem === 3}>
                      <div>
                        <div className="card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9">
                          With lots of unique blocks, you can easily build a
                          page without coding. Build your next landing page.
                        </div>
                      </div>
                    </Collapse>
                  </div>
                  <div className="border rounded-10 mb-3 bg-white overflow-hidden">
                    <div
                      className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                      id="heading4-4"
                    >
                      <button
                        className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100"
                        type="button"
                        aria-controls="collapse-4"
                        onClick={() => setOpenItem(4)}
                        aria-expanded={openItem === 4}
                      >
                        Organize your campaigns
                      </button>
                    </div>
                    <Collapse in={openItem === 4}>
                      <div>
                        <div className="card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9">
                          With lots of unique blocks, you can easily build a
                          page without coding. Build your next landing page.
                        </div>
                      </div>
                    </Collapse>
                  </div>
                  <div className="border rounded-10 mb-3 bg-white overflow-hidden">
                    <div
                      className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white"
                      id="heading4-5"
                    >
                      <button
                        className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100"
                        type="button"
                        aria-controls="collapse-5"
                        onClick={() => setOpenItem(5)}
                        aria-expanded={openItem === 5}
                      >
                        Will you provide support?
                      </button>
                    </div>
                    <Collapse in={openItem === 5}>
                      <div>
                        <div className="card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9">
                          With lots of unique blocks, you can easily build a
                          page without coding. Build your next landing page.
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </Col>
              <div className="col-12 text-center pt-11">
                <p className="gr-text-9 gr-text-9 gr-text-color">
                  Haven’t got your answer?{" "}
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
export default Pricing2;
