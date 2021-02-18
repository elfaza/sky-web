import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";

import imgV from "../../assets/image/l6/jpg/l6-video-img.jpg";
import imgP from "../../assets/image/l6/png/l6-video-pattern.png";
import imgVW from "../../assets/image/svg/l6-video-wave.svg";
import imgVWD from "../../assets/image/svg/l6-video-wave-dark.svg";

const Video = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <div className="shape">
        <img src={imgVW} alt="" className="w-100 light-shape default-shape" />
        <img src={imgVWD} alt="" className="w-100 dark-shape" />
      </div>
      {/* <!-- Video Area --> */}
      <div className="video-area position-relative gr-z-index-1 mt-n29 mt-lg-n35">
        <Container>
          <Row>
            <Col xs="12">
              <div className="video-image-pattern-bottom ">
                <img className="w-100 rounded-20" src={imgV} alt="" />
                <a
                  className="circle-xxl bg-white gr-abs-center gr-abs-hover-y gr-text-8"
                  href="#/"
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleVideoModal();
                  }}
                >
                  <i className="icon icon-triangle-right-17-2 text-red"></i>
                </a>
                <div
                  className="gr-abs-bl-custom pattern aos-init aos-animate"
                  data-aos="fade-down-left"
                  data-aos-duration="900"
                  data-aos-once="true"
                >
                  <img src={imgP} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Video;
