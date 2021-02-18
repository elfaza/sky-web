import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from "react-slick";

import { breakpoints } from "../../utils";

import imgSB1 from "../../assets/image/inner/slide-big-1.png";
import imgSS1 from "../../assets/image/inner/v-slide-1.jpg";
import imgSS2 from "../../assets/image/inner/v-slide-2.png";
import imgSS3 from "../../assets/image/inner/v-slide-3.png";
import imgSS4 from "../../assets/image/inner/v-slide-4.png";

const Products = ({ handleActiveShow }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: breakpoints.md,
        settings: {
          vertical: false,
          verticalSwiping: false,
          swipeToSlide: false,
        },
      },
      {
        breakpoint: breakpoints.sm,
        settings: {
          vertical: false,
          verticalSwiping: false,
          swipeToSlide: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="product-details-v-slider">
      <div
        className="single-slide focus-reset"
        role="button"
        tabIndex={0}
        onClick={() => handleActiveShow(imgSS1)}
        onKeyDown={() => handleActiveShow(imgSS1)}
        css={`
          cursor: pointer;
        `}
      >
        <img src={imgSS1} alt="" />
      </div>
      <div
        className="single-slide focus-reset"
        role="button"
        tabIndex={0}
        onClick={() => handleActiveShow(imgSS2)}
        onKeyDown={() => handleActiveShow(imgSS2)}
        css={`
          cursor: pointer;
        `}
      >
        <img src={imgSS2} alt="" />
      </div>
      <div
        className="single-slide focus-reset"
        role="button"
        tabIndex={0}
        onClick={() => handleActiveShow(imgSS3)}
        onKeyDown={() => handleActiveShow(imgSS3)}
        css={`
          cursor: pointer;
        `}
      >
        <img src={imgSS3} alt="" />
      </div>
      <div
        className="single-slide focus-reset"
        role="button"
        tabIndex={0}
        onClick={() => handleActiveShow(imgSS4)}
        onKeyDown={() => handleActiveShow(imgSS4)}
        css={`
          cursor: pointer;
        `}
      >
        <img src={imgSS4} alt="" />
      </div>
      <div
        className="single-slide focus-reset"
        role="button"
        tabIndex={0}
        onClick={() => handleActiveShow(imgSS2)}
        onKeyDown={() => handleActiveShow(imgSS2)}
        css={`
          cursor: pointer;
        `}
      >
        <img src={imgSS2} alt="" />
      </div>
    </Slider>
  );
};

const Showcase = () => {
  const [qty, setQty] = useState(2);
  const [activeImg, setActiveImg] = useState(imgSB1);

  const incQty = () => {
    setQty(qty + 1);
  };

  const decQty = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  return (
    <>
      <section className="pt-29 bg-default">
        <Container>
          <Row>
            <Col xl="7" lg="6">
              <Row>
                <Col
                  xl="2"
                  lg="3"
                  md="2"
                  className="order-md-1 order-2 mt-7 mt-md-0 mt-7"
                >
                  <Products handleActiveShow={setActiveImg} />
                </Col>
                <Col xl="10" lg="9" md="7" className="order-md-2 order-1">
                  <div className="product-details-slider">
                    <div className="single-slide">
                      <img src={activeImg} alt="" />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl="5" md="7" className="ml-n1 mt-12 mt-md-0">
              <div className="pl-lg-12">
                <div className="ratings d-flex">
                  <i className="fas fa-star mx-1 text-yellow gr-text-8"></i>
                  <i className="fas fa-star mx-1 text-yellow gr-text-8"></i>
                  <i className="fas fa-star mx-1 text-yellow gr-text-8"></i>
                  <i className="fas fa-star mx-1 text-yellow gr-text-8"></i>
                  <i className="far fa-star mx-1 text-yellow gr-text-8"></i>
                </div>
                <h3 className="gr-text-4 pt-5 font-weight-bold">
                  Apple AirPods with Wired Charging Case
                </h3>
                <p className="gr-text-9">
                  by <a href="/">Apple</a>
                </p>
                <p className="gr-text-8 mb-5">List Price: $90</p>
                <p className="gr-text-5 font-weight-bold gr-heading-opacity">
                  Price: <span className="gr-text-color"> $70</span>
                </p>
                <ul className="list-unstyled">
                  <li className="mt-3 gr-text-11 gr-text-color">
                    <i
                      className="rounded-circle bg-opposite d-inline-block mr-5"
                      css={`
                        width: 9px;
                        height: 9px;
                      `}
                    ></i>
                    Active noise cancellation for immersive sound
                  </li>
                  <li className="mt-3 gr-text-11 gr-text-color">
                    <i
                      className="rounded-circle bg-opposite d-inline-block mr-5"
                      css={`
                        width: 9px;
                        height: 9px;
                      `}
                    ></i>
                    Transparency mode for hearing and connecting
                  </li>
                  <li className="mt-3 gr-text-11 gr-text-color">
                    <i
                      className="rounded-circle bg-opposite d-inline-block mr-5"
                      css={`
                        width: 9px;
                        height: 9px;
                      `}
                    ></i>
                    Three sizes of soft, tapered silicone tips
                  </li>
                </ul>
                <div className="input--amount-control d-flex pt-5">
                  <button
                    className="amount-dec-btn btn-reset circle-xs bg-gray-3"
                    onClick={decQty}
                  >
                    -
                  </button>
                  <span className="py-6 px-8 position-relative mx-2">
                    <span className="py-1 border rounded-lg gr-abs-tl font-weight-bold h-100 w-100  pl-2 pr-2 text-center">
                      {qty}
                    </span>
                  </span>
                  <button
                    className="amount-inc-btn btn-reset circle-xs bg-gray-3"
                    onClick={incQty}
                  >
                    +
                  </button>
                </div>
                <div className="button-group mt-9">
                  <Button className=" mr-5">Buy now</Button>
                  <Button variant="light" className="btn-white">
                    Add to cart
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Showcase;
