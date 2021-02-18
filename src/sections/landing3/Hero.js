import React, { useContext } from "react";
import { Link } from "react-scroll";

import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import DatePicker from "../../components/DatePicker";
import { Select } from "../../components/Core";
import imgHero from "../../assets/image/coworking/jpg/hero-img.jpg";

const defaultOptions = [
  { value: "NY", label: "New York" },
  { value: "SI", label: "Singapore" },
  { value: "LN", label: "London" },
  { value: "DH", label: "Dhaka" },
];

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <div
        className="co-working bg-image bg-overlay overlay-2 pb-13 pt-24 pt-lg-32 pb-lg-28 d-lg-flex align-items-center lg:min-h-vh-100"
        css={`
          background-image: url(${imgHero});
        `}
      >
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg="10" xl="9" data-aos="fade-up" data-aos-duration="1000">
              <div className="hero-content section-title dark-mode-texts text-center">
                <h4 className="pre-title text-green gr-text-12 text-uppercase mb-10">
                  Shared space in your town
                </h4>
                <h1 className="gr-text-2 font-weight-bold mb-12">
                  Rent desk space in a shared office environment
                </h1>

                <div className="location-filter-form d-flex flex-wrap bg-white">
                  <div className="single-input w-100 w-sm-50 w-lg-35 px-5 py-3 py-md-7 d-flex align-items-center">
                    <div className="arrow-box-dropdown w-100 h-px-50 position-relative">
                      <Select
                        options={defaultOptions}
                        className="location-select text-blackish-blue w-100 pl-6"
                        accentColor="primary"
                        border={false}
                        bg="transparent"
                        indicator={false}
                      />
                    </div>
                  </div>
                  <div className="single-input border-right-0 w-100 w-sm-50 w-lg-35 px-5  d-flex align-items-center py-3 py-md-7">
                    <div className="h-px-50 position-relative date-picker w-100 arrow-box-dropdown">
                      <DatePicker
                        className="form-control date-picker-input
                border-0  rounded-0 h-100 pt-2 pb-1 bg-transparent"
                        placeholder="Select Date"
                      />
                      <i className="far fa-calendar date-picker-icon"></i>
                    </div>
                  </div>
                  <div className="single-input  w-100 w-lg-30 d-flex align-items-center justify-content-center border-0 py-4 py-md-7">
                    <button
                      type="submit"
                      className="btn btn-primary search-btn"
                    >
                      Search Place
                    </button>
                  </div>
                </div>
                <a
                  className="video-link gr-text-color  mt-11 d-block"
                  href="#/"
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleVideoModal();
                  }}
                >
                  <span className="d-inline-flex mr-2 gr-text-color">
                    <i className="far fa-play-circle gr-text-9"></i>
                  </span>
                  <span className="gr-text-9 mb-0">
                    Take virtual tour of our spaces
                  </span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <Link
          to="elFact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={1500}
          className="circle-40 border border-white gr-abs-bx-center mx-auto mt-13 goto"
          css={`
            cursor: pointer;
          `}
        >
          <i className="fas fa-chevron-down text-white mx-auto gr-text-8"></i>
        </Link>
      </div>
    </>
  );
};

export default Hero;
