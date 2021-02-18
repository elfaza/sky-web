import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Newsletter = () => {
  return (
    <>
      {/* <!-- Newsletter Area --> */}
      <div className="newsltr-section pt-12 pb-10 pt-lg-19 pb-lg-17 bg-default-6 border-bottom ">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg="6" md="10" className="pr-lg-9">
              <div className="nwsltr-text">
                <h2 className="title gr-text-5">
                  Subscribe to our newsletter to get latest news on your inbox.
                </h2>
              </div>
            </Col>
            <Col lg="6" md="10" className="pl-xl-13">
              <form className="newsletter-form d-flex justify-content-lg-end mt-6 mt-lg-0">
                <div className="form-group mr-7 w-100">
                  <input
                    type="email"
                    className="form-control"
                    id="leadEmail1"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="cta-btn">
                  <Button type="submit" className="with-icon gr-hover-y">
                    Subscribe<i className="icon icon-tail-right"></i>
                  </Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Newsletter;
