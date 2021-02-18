import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";

const Fact = () => (
  <>
    {/* <!-- Fact section --> */}
    <div className="fact-section bg-default-4 border-bottom pt-13 pt-lg-18 pb-7 pb-lg-17 ">
      <Container>
        <Row className="justify-content-center">
          <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
            <div className="single-fact text-center px-md-9 px-lg-6 px-xl-11">
              <h3 className="title mb-7 gr-text-3 counter">
                <LazyLoad>
                  <CountUp duration={9} end={6} />
                </LazyLoad>
              </h3>
              <p className="gr-text-8 mb-0">
                Offices are available on different countries
              </p>
            </div>
          </Col>
          <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
            <div className="single-fact text-center px-md-9 px-lg-6 px-xl-11">
              <h3 className="title mb-7 gr-text-3 counter">
                <LazyLoad>
                  <CountUp duration={3} end={238} />
                </LazyLoad>
              </h3>
              <p className="gr-text-8 mb-0">
                Seats are available right now with dedicated support
              </p>
            </div>
          </Col>
          <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
            <div className="single-fact text-center px-md-9 px-lg-6 px-xl-11">
              <h3 className="title mb-7 gr-text-3 counter">
                <LazyLoad>
                  <CountUp separator="," duration={3} end={1395} />
                </LazyLoad>
              </h3>
              <p className="gr-text-8 mb-0">
                People are using our co-work spaces right now
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Fact;
