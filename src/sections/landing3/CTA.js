import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CTA = () => (
  <>
    {/* <!-- CTA section --> */}
    <div
      className="newsletter-section bg-default-4 py-13 py-lg-24 border-bottom"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <Container>
        <Row className="justify-content-center">
          <Col md="8" lg="7" xl="6">
            <div className="section-title text-center mb-12">
              <h2 className="title gr-text-3 mb-6">Get latest updates</h2>
              <p className="px-4 gr-text-8 mb-0">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.{" "}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="10" md="7" lg="6" xl="4">
            <div className="subscribe-form mb-9">
              <form action="./">
                <div className="form-group">
                  <input
                    className="form-control gr-text-9 border mb-6"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="button-block">
                  <button className="form-btn btn btn-primary w-100">
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

export default CTA;
