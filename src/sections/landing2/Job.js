import React, { useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";

import imgL1 from "../../assets/image/job-site/png/circle-logo-1.png";
import imgL2 from "../../assets/image/job-site/png/circle-logo-2.png";
import imgL3 from "../../assets/image/job-site/png/circle-logo-3.png";
import imgL4 from "../../assets/image/job-site/png/circle-logo-4.png";

const SliderStyled = styled(Slider)`
  .slick-slide div {
    &:focus {
      outline: nnone !important;
    }
  }
`;

const items = [
  {
    title: "Senior Software Engineer",
    type: "Full-time",
    location: "New York, USA",
    brandLogo: imgL1,
    brandName: "Dorfus",
  },
  {
    title: "Product Designer",
    type: "Remote",
    location: "Lake Colby, UK",
    brandLogo: imgL2,
    brandName: "Coworks",
  },
  {
    title: "UX Designer",
    type: "Full-time",
    location: "California, USA",
    brandLogo: imgL3,
    brandName: "Askimat",
  },
  {
    title: "Full-stack Web Developer",
    type: "Part-time",
    location: "Katlynburgh, Sweden",
    brandLogo: imgL4,
    brandName: "Greener",
  },
  {
    title: "Product Designer",
    type: "Remote",
    location: "Lake Colby, UK",
    brandLogo: imgL2,
    brandName: "Coworks",
  },
];

const Jobs = () => {
  const elSlider = useRef();

  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    className: "single-slide",

    responsive: [
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* <!-- Jobs section --> */}
      <div className="job-site-page feature-section bg-default-6 bg-pattern pattern-5 pt-13 pt-lg-24 pb-2 pb-lg-22">
        <Container>
          <Row className="justify-content-lg-between align-items-center pb-9 pb-sm-0">
            <Col sm="8" md="6" lg="6" xl="5">
              <div className="section-title mb-9 mb-sm-13 mb-lg-21">
                <h2 className="title gr-text-4 mb-6">Featured jobs</h2>
                <p className="gr-text-8">
                  With lots of unique blocks, you can easily{" "}
                  <br className="d-none d-lg-block" /> build a page without
                  coding.
                </p>
              </div>
            </Col>
            <Col sm="4" md="6" lg="4" xl="3">
              <div className="job-feature-slider-arrows ml-auto">
                <button
                  className="slick-prev slick-arrow"
                  aria-label="Previous"
                  type="button"
                  onClick={() => {
                    elSlider.current.slickPrev();
                  }}
                >
                  Previous
                </button>
                <button
                  className="slick-next slick-arrow"
                  aria-label="Next"
                  type="button"
                  onClick={() => {
                    elSlider.current.slickNext();
                  }}
                >
                  Next
                </button>
              </div>
            </Col>
          </Row>
          <div
            className="job-feature-slider"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <SliderStyled ref={elSlider} {...slickSettings}>
              {items.map(
                (
                  { link = "/#", title, type, location, brandLogo, brandName },
                  index
                ) => (
                  <div key={index}>
                    <Link href={link}>
                      <a className="feature-widget focus-reset bg-white d-flex flex-column min-height-px-297 border rounded-10 pt-8 pb-8 pl-7 mx-6 pl-lg-9 pr-md-8 pr-lg-10 gr-hover-shadow-1">
                        <div className="mb-auto">
                          <h5 className="gr-text-12 pb-1 text-green text-uppercase">
                            {type}
                          </h5>
                          <h3 className="gr-text-7 text-blackish-blue">
                            {title}
                          </h3>
                          <p className="gr-text-11 gr-color-blackish-blue-opacity-7 mb-0">
                            {location}
                          </p>
                        </div>
                        <div className="d-flex">
                          <div className="circle-32 pr-5">
                            <img src={brandLogo} alt="" />
                          </div>
                          <div className="text">
                            <h3 className="gr-text-8 text-blackish-blue">
                              {brandName}
                            </h3>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                )
              )}
            </SliderStyled>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Jobs;
