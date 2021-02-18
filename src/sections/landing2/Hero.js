import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Select } from "../../components/Core";

import imgHB from "../../assets/image/job-site/png/hero-img-big.png";
import imgDot from "../../assets/image/job-site/png/hero-dot-pattern.png";
import imgSO from "../../assets/image/job-site/png/hero-oval-shape.png";

const defaultOptions = [
  { value: "NY", label: "New York" },
  { value: "SI", label: "Singapore" },
  { value: "LN", label: "London" },
  { value: "DH", label: "Dhaka" },
];

const Hero = () => (
  <>
    {/* <!-- Hero section --> */}
    <div className="hero-area position-relative overflow-hidden bg-default-7 bg-pattern pattern-5 pt-24 pt-md-15 pt-lg-25">
      <Container>
        <Row className="justify-content-sm-end">
          <Col lg="6" md="8" className="py-md-16 py-lg-20 z-index-99">
            <div className="hero-content pr-xl-16 mb-9 mb-md-12">
              <h1 className="title gr-text-2 mb-8">
                Find a dream job that changes life.
              </h1>
              <p className="gr-text-8 mb-0">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next job website.
              </p>
            </div>
            {/* <!-- Search Component starts --> */}
            <div className="search-box bg-green shadow-7 rounded-10 px-8 pt-7 pb-7 mr-lg-n34 mr-xl-n33">
              <form action="/" className="search-form">
                <div className="row mx-n5 justify-content-center">
                  <div className="w-100 w-sm-50 w-md-100 w-lg-35 w-xl-37 px-3 mb-7 mb-lg-0">
                    <div className="form-group mb-0 min-height-px-50">
                      <input
                        className="form-control gr-text-9 border h-100"
                        type="text"
                        id="keyword"
                        placeholder="Job title or keyword"
                      />
                    </div>
                  </div>
                  {/* <!-- .select-city starts --> */}
                  <div className="w-100 w-sm-50 w-md-100 w-lg-35 w-xl-37 px-3 mb-7 mb-lg-0">
                    <Select options={defaultOptions} />
                  </div>
                  {/* <!-- ./select-city ends --> */}
                  <div className="w-100 w-lg-30 w-xl-25 px-3">
                    <button className="btn btn-blackish-blue w-100 min-height-px-50 line-height-reset">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* <!-- Search Component ends --> */}
            <p className="gr-text-11 mb-0 mt-6">
              Try Product Designer, Software Engineer etc.
            </p>
          </Col>
          <Col lg="5" md="4" sm="7" className="offset-lg-1 align-self-sm-end">
            <div
              className="hero-img position-relative z-index-1"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <img className="w-100" src={imgHB} alt="" />
              <div
                className="pattern-sub-img gr-abs-tr-custom-2"
                data-aos="fade-up-right"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                <img src={imgDot} alt="" />
              </div>
              <div
                className="shape-sub-img gr-abs-bl-custom-2"
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-delay="1000"
              >
                <img src={imgSO} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Hero;
