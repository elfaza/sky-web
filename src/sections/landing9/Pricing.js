import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import imgP1 from "../../assets/image/l7/jpg/product-thumb-img1.jpg";
import imgP2 from "../../assets/image/l7/jpg/product-thumb-img2.jpg";
import imgP3 from "../../assets/image/l7/jpg/product-thumb-img3.jpg";

const Pricing = () => {
  return (
    <>
      {/* <!-- Pricing Area --> */}
      <div className="pricing-section bg-default-4 pt-13 pb-5 pt-lg-26 pb-lg-29">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xl="6" lg="7" md="8">
              <div className="section-title text-center mb-15 mb-lg-19">
                <h2 className="title gr-text-3 mb-7">Get your airpod now.</h2>
                <p className="gr-text-8 mb-0 px-11">
                  We share common trends and strategies for improving your
                  rental income.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm="9" md="6" lg="4" className="mb-12 mb-lg-0">
              <div className="single-product d-flex flex-column px-7 text-center">
                <div className="product-img mb-9">
                  <img className="w-100 rounded-8" src={imgP1} alt="" />
                </div>
                <h4 className="gr-text-7 mb-6">Midnight Green</h4>
                <p className="gr-text-9 mb-9">
                  AirPods (2nd gen) iPhone Colors with Wireless Charging Case
                </p>
                <Button className="gr-hover-y gr-text-11 mw-75 mx-auto">
                  Buy now - $99
                </Button>
              </div>
            </Col>
            <Col sm="9" md="6" lg="4" className="mb-12 mb-lg-0">
              <div className="single-product d-flex flex-column px-7 text-center">
                <div className="product-img mb-9">
                  <img className="w-100 rounded-8" src={imgP2} alt="" />
                </div>
                <h4 className="gr-text-7 mb-6">Silver</h4>
                <p className="gr-text-9 mb-9">
                  AirPods (2nd gen) iPhone Colors with Wireless Charging Case
                </p>
                <Button className="gr-hover-y gr-text-11 mw-75 mx-auto">
                  Buy now - $99
                </Button>
              </div>
            </Col>
            <Col sm="9" md="6" lg="4" className="mb-12 mb-lg-0">
              <div className="single-product d-flex flex-column px-7 text-center">
                <div className="product-img mb-9">
                  <img className="w-100 rounded-8" src={imgP3} alt="" />
                </div>
                <h4 className="gr-text-7 mb-6">Gold</h4>
                <p className="gr-text-9 mb-9">
                  AirPods (2nd gen) iPhone Colors with Wireless Charging Case
                </p>
                <Button className="gr-hover-y gr-text-11 mw-75 mx-auto">
                  Buy now - $99
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Pricing;
