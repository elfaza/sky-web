import React from "react";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import { Container, Row, Col } from "react-bootstrap";

const Fact = () => {
  return (
    <>
      {/* <!-- Fact Area --> */}
      <div className="fact-section pt-12 pb-6 pt-lg-19 pb-lg-17 border-bottom border-gray-3 bg-default-6 ">
        <Container>
          <Row className="justify-content-center">
            <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
              <div className="single-fact d-flex px-md-5 px-lg-2 px-xl-9">
                <h3 className="gr-text-3 mr-9">1M+</h3>
                <p className="gr-text-9 mb-0">
                  Customers visit Albino every months
                </p>
              </div>
            </Col>
            <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
              <div className="single-fact d-flex px-md-5 px-lg-2 px-xl-9">
                <h3 className="gr-text-3 mr-9">
                  <LazyLoad>
                    <span className="counter">
                      <CountUp duration={3} end={93} />%
                    </span>
                  </LazyLoad>
                </h3>
                <p className="gr-text-9 mb-0">
                  Satisfaction rate from our customers.
                </p>
              </div>
            </Col>
            <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
              <div className="single-fact d-flex px-md-5 px-lg-2 px-xl-9">
                <h3 className="gr-text-3 mr-9">
                  <LazyLoad>
                    <span className="counter">
                      <CountUp
                        duration={3}
                        decimal="."
                        decimals={1}
                        end={4.9}
                      />
                    </span>
                  </LazyLoad>
                </h3>
                <p className="gr-text-9 mb-0">
                  Average customer ratings out of 5.00!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Fact;
