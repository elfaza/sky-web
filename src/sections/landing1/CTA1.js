import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CTA = () => (
  <>
    {/* <!-- CTA section --> */}
    <div className="cta-section bg-default-2 ">
      <Container>
        <div className="cta-wrapper pt-13 pb-14 py-lg-19 border-top ">
          <Row className="align-items-center justify-content-center">
            <Col lg="6" md="10">
              <div className="cta-text section-title">
                <h2 className="title gr-text-5 mb-7">
                  Ready to launch your next project?
                </h2>
                <p className="gr-text-8 mb-8 mb-lg-0">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </Col>
            <div className="col-lg-4 offset-lg-2 col-md-10">
              <div className="cta-btn text-lg-right">
                <Button className="gr-hover-y rounded-8">
                  Get started on a project
                </Button>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  </>
);

export default CTA;
