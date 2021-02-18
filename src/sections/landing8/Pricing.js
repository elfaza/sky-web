import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import imgW from "../../assets/image/svg/l6-footer-wave.svg";
import imgWD from "../../assets/image/svg/l6-footer-wave-dark.svg";
import imgP from "../../assets/image/l6/png/l6-footer-pattern.png";

const Pricing = () => {
  return (
    <>
      {/* <!-- Pricing Area --> */}
      <div className="pricing-section bg-default-2 pt-14 pt-lg-24 pb-23 pb-lg-31 position-relative gr-z-index-1">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" lg="7" xl="6">
              <div className="section-title text-center mb-12 mb-lg-17">
                <h2 className="title gr-text-3 mb-7">Pricing made easy</h2>
                <p className="px-4 gr-text-8 mb-0">
                  With lots of unique blocks, you can easily build a page easily
                  without any coding.{" "}
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col
              sm="10"
              md="6"
              lg="5"
              xl="4"
              className="mb-9"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              {/* <!-- .pricing card --> */}
              <div className="pricing-card bg-gray-2 gr-hover-shadow-1 text-center pt-9 pb-9 pr-9 pr-xl-9  pl-9 pl-xl-9 border rounded-10">
                <div className="price-content light-mode-texts">
                  <span className="small-title gr-text-12 text-uppercase text-red font-weight-bold">
                    Starter
                  </span>
                  <div className="d-flex align-items-end justify-content-center mt-9 ">
                    <span className="currency mr-2 gr-text-6 text-blackish-blue font-weight-bold line-spacing-none">
                      $
                    </span>
                    <h2 className="price-value gr-text-2 font-weight-bold line-spacing-none mb-0 text-blackish-blue">
                      19
                    </h2>
                    <span className="per gr-text-9 text-blackish-blue">
                      /mo
                    </span>
                  </div>
                  <ul className="card-list list-style-border text-center pl-0 mt-9 mb-3 mx-auto">
                    <li className="text-black gr-text-9 border-top mb-0 py-7 d-block">
                      Upto 100 Team Members
                    </li>
                    <li className="text-black gr-text-9 border-top mb-0 py-7 d-block">
                      100 GB Cloud Storage
                    </li>
                    <li className="text-black gr-text-9 border-top mb-0 py-7 d-block">
                      Unlimited Meetings
                    </li>
                    <li className="text-black gr-text-9 border-top mb-0 py-7 d-block">
                      Premium Support
                    </li>
                  </ul>
                </div>
                <Link href="/#">
                  <a className="btn btn-black rounded-8 gr-min-width-219">
                    Get Started Now
                  </a>
                </Link>
              </div>
              {/* <!-- /.pricing carde Ends--> */}
            </Col>
            <Col
              sm="10"
              md="6"
              lg="5"
              xl="4"
              className="mb-9"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              {/* <!-- .pricing card --> */}
              <div className="pricing-card gr-hover-shadow-1 gr-box-shadow-4 text-center pt-9 pb-9 pr-9 pr-xl-9  pl-9 pl-xl-9 bg-white rounded-10">
                <div className="price-content light-mode-texts">
                  <span className="small-title gr-text-12 text-uppercase text-red font-weight-bold">
                    Unlimited
                  </span>
                  <div className="d-flex align-items-end justify-content-center mt-9 ">
                    <span className="currency mr-2 gr-text-6 text-blackish-blue font-weight-bold line-spacing-none">
                      $
                    </span>
                    <h2 className="price-value gr-text-2 font-weight-bold line-spacing-none mb-0 text-blackish-blue">
                      99
                    </h2>
                    <span className="per gr-text-9 text-blackish-blue ">
                      /mo
                    </span>
                  </div>
                  <ul className="card-list list-style-border text-center pl-0 mt-9 mb-3 mx-auto">
                    <li className="text-black gr-text-9 border-top mb-0 py-7 d-block">
                      Unlimited Team Members
                    </li>
                    <li className="text-black gr-text-9 border-top mb-0 py-7 d-block">
                      Unlimited Cloud Storage
                    </li>
                    <li className="text-black gr-text-9 border-top mb-0 py-7 d-block">
                      Unlimited Meetings
                    </li>
                    <li className="text-black gr-text-9 border-top mb-0 py-7 d-block">
                      Premium Support
                    </li>
                  </ul>
                </div>
                <Link href="/#">
                  <a className="btn btn-red rounded-8 w-100 mx-auto">
                    Get Started Now
                  </a>
                </Link>
              </div>
              {/* <!-- /.pricing carde Ends--> */}
            </Col>
          </Row>
        </Container>
        <div className="wave-shape gr-abs-br">
          <img src={imgW} alt="" className="w-100 light-shape default-shape" />
          <img src={imgWD} alt="" className="w-100 dark-shape" />
        </div>
        <div
          className="pattern-shape gr-abs-br gr-z-index-n1"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="400"
        >
          <img src={imgP} alt="" />
        </div>
      </div>
    </>
  );
};

export default Pricing;
