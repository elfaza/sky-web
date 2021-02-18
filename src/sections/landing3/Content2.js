import React, { useState } from "react";
import { Container, Row, Col, Collapse } from "react-bootstrap";

const Content = () => {
  const [openItem, setOpenItem] = useState(1);

  return (
    <>
      {/* <!-- Content section --> */}
      <div className="content-section pt-13 pt-lg-28 pb-15 pb-lg-29 bg-blackish-blue dark-mode-texts">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md="10" lg="6" xl="5">
              <div className="section-title content-text mb-13 mb-lg-16">
                <h2 className="title gr-text-3 mb-6">
                  We are always here for your backup.
                </h2>
                <p className="gr-text-8">
                  We share common trends and strategies for improving your
                  rental income.
                </p>
              </div>
              <div className="content-widget">
                <Row>
                  <Col
                    md="6"
                    lg="9"
                    xl="10"
                    data-aos="fade-right"
                    data-aos-duration="750"
                  >
                    <div className="single-widget media mb-9 mb-lg-12">
                      <div className="widget-icon circle-30 bg-green mr-7">
                        <i className="icon icon-check-2-2 text-white"></i>
                      </div>
                      <div className="widget-text">
                        <h3 className="w-title gr-text-7">
                          Noise Free Locations
                        </h3>
                        <p className="gr-text-9 mb-0">
                          With lots of unique blocks, you can easily build a
                          page without coding.{" "}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col
                    md="6"
                    lg="9"
                    xl="10"
                    data-aos="fade-right"
                    data-aos-duration="1300"
                  >
                    <div className="single-widget media mb-9 mb-lg-0">
                      <div className="widget-icon circle-30 bg-green mr-7">
                        <i className="icon icon-check-2-2 text-white"></i>
                      </div>
                      <div className="widget-text">
                        <h3 className="w-title gr-text-7">24/7 Hour Support</h3>
                        <p className="gr-text-9 mb-0">
                          With lots of unique blocks, you can easily build a
                          page without coding.{" "}
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col
              md="10"
              lg="6"
              xl="6"
              className="offset-xl-1 mt-9 mt-lg-0 "
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div
                className="accordion pl-9 pr-8 rounded-10 bg-white border-green border-top-5"
                id="accordionExample"
              >
                <div className="border-bottom overflow-hidden">
                  <div className="mb-0 border-bottom-0" id="heading2-1">
                    <button
                      className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue px-0 py-8 accordion-trigger arrow-icon w-100 collapsed"
                      type="button"
                      aria-controls="collapse2-1"
                      onClick={() => setOpenItem(1)}
                      aria-expanded={openItem === 1}
                    >
                      How to setup Shade Pro?
                    </button>
                  </div>

                  <Collapse in={openItem === 1}>
                    <div>
                      <div className="gr-color-blackish-blue-opacity-7 mt-n3 gr-text-9 pb-8 pr-8">
                        With lots of unique blocks, you can easily build a page
                        with coding. Build your next landing page. Integer ut
                        obe ryn. Sed feugiat vitae turpis a porta.
                      </div>
                    </div>
                  </Collapse>
                </div>
                <div className="border-bottom overflow-hidden">
                  <div className="mb-0 border-bottom-0" id="heading2-2">
                    <button
                      className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue px-0 py-8 accordion-trigger arrow-icon w-100 collapsed"
                      type="button"
                      data-target="#collapse2-2"
                      onClick={() => setOpenItem(2)}
                      aria-expanded={openItem === 2}
                    >
                      Can I use Shade Pro for my clients?
                    </button>
                  </div>

                  <Collapse in={openItem === 2}>
                    <div>
                      <div className="gr-color-blackish-blue-opacity-7 mt-n3 gr-text-9 pb-8 pr-8">
                        With lots of unique blocks, you can easily build a page
                        without coding. Build your next landing page.
                      </div>
                    </div>
                  </Collapse>
                </div>
                <div className="border-bottom overflow-hidden">
                  <div className="mb-0 border-bottom-0" id="heading2-3">
                    <button
                      className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue px-0 py-8 accordion-trigger arrow-icon w-100"
                      type="button"
                      data-target="#collapse2-3"
                      onClick={() => setOpenItem(3)}
                      aria-expanded={openItem === 3}
                    >
                      How often do you release update?
                    </button>
                  </div>

                  <Collapse in={openItem === 3}>
                    <div>
                      <div className="gr-color-blackish-blue-opacity-7 mt-n3 gr-text-9 pb-8 pr-8">
                        With lots of unique blocks, you can easily build a page
                        without coding. Build your next landing page.
                      </div>
                    </div>
                  </Collapse>
                </div>
                <div className="border-bottom overflow-hidden">
                  <div className="mb-0 border-bottom-0" id="heading2-3">
                    <button
                      className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue px-0 py-8 accordion-trigger arrow-icon w-100"
                      type="button"
                      data-target="#collapse2-4"
                      onClick={() => setOpenItem(4)}
                      aria-expanded={openItem === 4}
                    >
                      How can I access to old version?
                    </button>
                  </div>

                  <Collapse in={openItem === 4}>
                    <div>
                      <div className="gr-color-blackish-blue-opacity-7 mt-n3 gr-text-9 pb-8 pr-8">
                        With lots of unique blocks, you can easily build a page
                        without coding. Build your next landing page.
                      </div>
                    </div>
                  </Collapse>
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
