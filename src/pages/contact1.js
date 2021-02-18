import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }}
      >
        <div className="inner-banner pt-29 pb-md-11 bg-default-2">
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
        <div className="contact-section pb-5 pb-md-29 bg-default-2 ">
          <Container>
            <Row className="justify-content-center">
              <Col
                sm="5"
                md="6"
                lg="5"
                xl="5"
                className="offset-lg-1 d-flex flex-column justify-content-center mb-9 order-sm-2"
              >
                <div className="single-contact-widget mb-13">
                  <h3 className="gr-text-6 mb-5">Call us</h3>
                  <p className="gr-text-7 mb-0">
                    +1-940-394-2948 <br />
                    +1-389-385-3807
                  </p>
                </div>
                <div className="single-contact-widget mb-13">
                  <h3 className="gr-text-6 mb-5">Email us</h3>
                  <p className="gr-text-7 mb-0">
                    support@grayic.com
                    <br />
                    contact@grayic.com
                  </p>
                </div>
                <div className="single-contact-widget">
                  <h3 className="gr-text-6 mb-5">Visit us</h3>
                  <p className="gr-text-7 mb-0">
                    34 Madison Street,
                    <br />
                    NY, USA 10005
                  </p>
                </div>
              </Col>
              <Col sm="7" md="6" lg="5" xl="4" className="order-sm-1">
                <div className="login-form bg-white border-gray-3 px-7 pt-8 pb-9 shadow-1 rounded-10">
                  <form
                    name="contact1"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    {/* You still need to add the hidden input with the form name to your JSX form */}
                    <input type="hidden" name="form-name" value="contact1" />
                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className="gr-text-11 font-weight-bold text-blackish-blue"
                      >
                        First &amp; Last Name
                      </label>
                      <input
                        className="form-control px-7 gr-text-11 border"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="i.e. John Doe"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className="gr-text-11 font-weight-bold text-blackish-blue"
                      >
                        Email
                      </label>
                      <input
                        className="form-control px-7 gr-text-11 border"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="i.e. john@mail.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className="gr-text-11 font-weight-bold text-blackish-blue"
                      >
                        Subject
                      </label>
                      <input
                        className="form-control px-7 gr-text-11 border"
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="i.e. I need a help"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className="gr-text-11 font-weight-bold text-blackish-blue"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control px-7 gr-text-11 border"
                        placeholder="Type you message"
                        required
                      ></textarea>
                    </div>
                    <div className="button-block mb-2">
                      <Button className="form-btn w-100" type="submit">
                        Send
                      </Button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Contact;
