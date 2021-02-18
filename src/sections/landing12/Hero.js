import React, { useContext } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";

import imgHM from "../../assets/image/telemedicine/png/hero-img-main.png";
import imgHS from "../../assets/image/telemedicine/png/hero-img-sub.png";
import imgHC1 from "../../assets/image/telemedicine/png/hero-card-1.png";
import imgHC2 from "../../assets/image/telemedicine/png/hero-card-2.png";

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <div
        className="bg-default-8 pb-15 pt-24 pt-lg-32 pb-lg-28"
        id="hero-area-animation"
      >
        <Container id="animation-area-1">
          <Row className="align-items-center justify-content-center">
            <Col
              xs="9"
              md="7"
              lg="5"
              className="offset-xl-1 align-self-sm-end order-lg-2"
            >
              <div
                className="hero-img image-group-p12 position-relative mb-9 mb-sm-15 mb-lg-0"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <img className="w-100" src={imgHM} alt="" />
                <div className="image-bg-positioning">
                  <img src={imgHS} alt="" />
                </div>
              </div>
              <div className="hero-sm-card-1">
                <div
                  className="px-7 py-6 d-flex bg-white shadow-10 rounded-15 w-xs-75 w-lg-76 w-xl-68 hero-card-1-animation"
                  id="an-item-1p1"
                >
                  <p className="gr-text-11 mb-0 text-mirage-2">
                    “Use this sprey 3 times in a day when you have running
                    nose.”
                  </p>
                  <div className="small-card-img ml-6">
                    <img src={imgHC1} alt="" className="circle-42" />
                  </div>
                </div>
              </div>
              <div className="animation-item">
                <div
                  className="px-7 py-6 d-flex bg-red shadow-9 rounded-15 w-xs-80 w-xl-68 hero-sm-card-2 hero-card-2-animation"
                  id="an-item-1p2"
                >
                  <div className="small-card-img mr-6 text-white">
                    <img src={imgHC2} alt="" className="circle-42" />
                  </div>
                  <p className="gr-text-11 mb-0 text-white">
                    “Thanks Doctor! What should I do if I have fever in these
                    days?”
                  </p>
                </div>
              </div>
            </Col>
            <Col
              xs="12"
              md="9"
              lg="7"
              xl="6"
              className="order-lg-1"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
            >
              <div className="hero-content section-title text-center text-lg-left">
                <h1 className="gr-text-2 font-weight-bold mb-8">
                  Get treatment <br className="" />
                  from your home!
                </h1>
                <p className="gr-text-9 gr-text-color pr-md-7">
                  We've made telemedicine simple and easy for you. Create your
                  personal room and start practicing today.
                </p>
                <div className="hero-btns mt-11">
                  <Button className="with-icon gr-hover-y">
                    Book my appointment
                    <i className="icon icon-tail-right font-weight-bold"></i>
                  </Button>
                </div>
                <a
                  href="/#"
                  tabIndex="-1"
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleVideoModal();
                  }}
                  className="video-link gr-text-color mt-8 gr-flex-y-center justify-content-center justify-content-lg-start focus-reset"
                >
                  <span className="mr-2 gr-text-color circle-18 border border-black-dynamic">
                    <i className="icon icon-triangle-right-17-2 gr-text-14"></i>
                  </span>
                  <span className="gr-text-12 font-weight-bold text-uppercase">
                    How online treatment works
                  </span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
