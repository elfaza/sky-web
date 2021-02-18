import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

import MapGoogle from "../components/MapGoogle";

const Contact = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }}
      >
        <div className="inner-banner pt-29 pb-md-11">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col lg="9" xl="8">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-9">Contact us</h2>
                  <p className="gr-text-8 mb-13">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next consultancy website within
                    few minutes.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className=" pb-5 pb-md-0 ">
          <Container>
            <Row className="justify-content-center">
              <Col md="6" lg="5" xl="4" className="order-md-2 mt-lg-11">
                <Row className="justify-content-center">
                  <Col xs="6" md="12" lg="10" className="mb-13">
                    <div className="single-contact-widget d-flex">
                      <div className="widget-icon gr-text-6 text-primary mr-7 mt-1">
                        <i className="icon icon-email-83"></i>
                      </div>
                      <div className="widget-text">
                        <p className="gr-text-7 mb-0">
                          support@grayic.com
                          <br />
                          contact@grayic.com
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs="6" md="12" lg="10" className="mb-13">
                    <div className="single-contact-widget d-flex">
                      <div className="widget-icon  gr-text-6 text-primary mr-7 mt-1">
                        <i className="icon icon-pin-3-2"></i>
                      </div>
                      <div className="widget-text">
                        <p className="gr-text-7 mb-0">
                          34 Madison Street,
                          <br />
                          NY, USA 10005
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md="6" lg="5" xl="4" className="order-md-1 ">
                <div className="login-form bg-white border-gray-3 px-8 pt-8 py-9 shadow-1 rounded-10 gr-abs-md z-index-99 mb-9">
                  <form
                    name="contact3"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    {/* You still need to add the hidden input with the form name to your JSX form */}
                    <input type="hidden" name="form-name" value="contact3" />
                    <Row>
                      <Col xs="12">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="name"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            First &amp; Last Name
                          </label>
                          <input
                            className="form-control gr-text-11 border"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="i.e. John Doe"
                            required
                          />
                        </div>
                      </Col>
                      <Col xs="12">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="name"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Email
                          </label>
                          <input
                            className="form-control gr-text-11 border"
                            type="text"
                            id="email"
                            name="email"
                            placeholder="i.e. john@mail.com"
                            required
                          />
                        </div>
                      </Col>
                      <Col xs="12">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="name"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Subject
                          </label>
                          <input
                            className="form-control gr-text-11 border"
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="i.e. I need a help"
                            required
                          />
                        </div>
                      </Col>
                      <Col xs="12">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="name"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            className="form-control gr-text-11 border-gray-3 gr-textarea-height"
                            required
                          ></textarea>
                        </div>
                      </Col>
                      <Col xs="12">
                        <div className="button-block mt-3 ">
                          <Button
                            className="form-btn btn btn-primary w-100"
                            type="submit"
                          >
                            Send
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="google-map fluid-map-height position-relative overflow-hidden"
          id="googleMap"
          css={`
            position: relative;
            overflow: hidden;
          `}
        >
          <div
            css={`
              height: 100%;
              width: 100%;
              position: absolute;
              top: 0px;
              left: 0px;
              background-color: rgb(229, 227, 223);
            `}
          >
            <MapGoogle />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Contact;
