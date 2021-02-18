import React from "react";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import { Container, Row, Col, Button } from "react-bootstrap";

import imgC from "../../assets/image/l3/jpg/l3-content-img.jpg";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section pt-12 pb-10 bg-default-6 py-xl-25 ">
        <Container>
          <Row className="align-items-center justify-content-md-center">
            <Col lg="4" md="10">
              <div className="content-text text-center text-lg-left mb-9 mb-lg-0 pr-xl-11">
                <h2 className="title gr-text-5 mb-8">
                  Experienced experts are giving advices.
                </h2>
                <p className="gr-text-8 mb-9">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
                <Button className="gr-hover-y">Learn how we work</Button>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="content-img rounded-8">
                <img className="w-100 rounded-8" src={imgC} alt="" />
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="stats-wrapper mt-6 mt-md-0 pl-xl-9">
                <div
                  className="single-stat py-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <h3 className="title gr-text-5 mb-5">1M+</h3>
                  <p className="gr-text-8 mb-0">
                    Customers visit Albino every month to get their service
                    done.
                  </p>
                </div>
                <div
                  className="single-stat py-6"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <h3 className="title gr-text-5 mb-5">
                    <LazyLoad>
                      <span className="counter">
                        <CountUp duration={3} end={92} />%
                      </span>
                    </LazyLoad>
                  </h3>
                  <p className="gr-text-8 mb-0">
                    Satisfaction rate comes from our awesome customers.
                  </p>
                </div>
                <div
                  className="single-stat py-6"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <h3 className="title gr-text-5 mb-5">
                    <LazyLoad>
                      <span className="counter">
                        <CountUp
                          duration={3}
                          decimal="."
                          decimals={1}
                          end={4.9}
                        />
                      </span>
                      /5.0
                    </LazyLoad>
                  </h3>
                  <p className="gr-text-8 mb-0">
                    Average customer ratings we have got all over internet.
                  </p>
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
