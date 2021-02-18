import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { Container, Row, Col, Button } from "react-bootstrap";

import imgP from "../../assets/image/l7/png/banner-product-img.png";

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="hero-area position-relative pt-25 pt-lg-31 pb-15 pb-lg-27 bg-default-6">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col
              xl="8"
              lg="9"
              md="11"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              <div className="hero-content text-center">
                <div className="hero-img mb-12">
                  <img src={imgP} alt="" className=" rounded-8" />
                </div>
                <h4 className="pre-title gr-text-12 text-red text-uppercase mb-9">
                  Non-stop music for long time
                </h4>
                <h1 className="title gr-text-2 mb-8">
                  Sound, that sounds better!
                </h1>
                <p className="gr-text-8 mb-10 px-lg-11 px-xl-15">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next consultancy website within few
                  minutes.
                </p>
                <div className="hero-btn mb-8">
                  <Button className="gr-hover-y">
                    Buy now - Starting at $99
                  </Button>
                </div>
                <a
                  href="#/"
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleVideoModal();
                  }}
                  className="video-link gr-text-color"
                >
                  <span className="d-inline-flex mr-lg-3 gr-text-color gr-text-12">
                    <i className="far fa-play-circle gr-text-11"></i>
                  </span>
                  <span className="gr-text-12 font-weight-bold text-uppercase">
                    Watch in action
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
