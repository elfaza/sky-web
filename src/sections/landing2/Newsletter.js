import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Newsletter = () => (
  <>
    {/* <!-- Newsletter section --> */}
    <div className="newsletter-section bg-default-4 pt-13 pb-11 py-lg-25 border-bottom ">
      <Container>
        <Row className="justify-content-center">
          <Col md="8" lg="7" xl="6">
            <div className="section-title text-center mb-11">
              <div
                className="circle-78 bg-green text-white gr-text-4 mx-auto mb-11"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                <i className="fas fa-envelope"></i>
              </div>
              <h2 className="title gr-text-4 mb-7">Get our latest updates</h2>
              <p className="px-4 gr-text-8 mb-0">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.{" "}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xl="6" lg="7" md="8" sm="11">
            <div className="subscribe-form mb-8">
              <form action="./">
                <div className="form-group position-relative">
                  <input
                    className="form-control gr-text-9 border mb-6 min-height-px-64"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                  <button className="form-btn btn btn-primary mr-2 gr-abs-md-cr min-height-px-50 w-100 w-md-auto">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="form-bottom excerpt text-center">
              <p className="gr-text-11 gr-text-color-opacity mb-0">
                We’ll never share your details with third parties.
                <br className="d-none d-xs-block" />
                View our Privacy Policy for more info.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Newsletter;
