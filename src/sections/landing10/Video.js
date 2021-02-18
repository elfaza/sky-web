import React, { useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import imgBG from "../../assets/image/l3/jpg/l3-video-bg.jpg";

const Video = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Video Area --> */}
      <div
        className="video-section bg-image bg-overlay overlay-1 py-23 py-lg-31 dark-mode-texts "
        css={`
          background-image: url(${imgBG});
        `}
      >
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xl="6" lg="8" md="10">
              <div className="text-center video-content">
                <a
                  href="/#"
                  className="video-play-icon mx-auto circle-md bg-white mb-9 gr-hover-y focus-reset"
                  tabIndex="-1"
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleVideoModal();
                  }}
                >
                  <i className="icon icon-triangle-right-17-2"></i>
                </a>
                <div className="section-title">
                  <h2 className="title gr-text-4 mb-5">
                    How do we help you to grow?
                  </h2>
                  <p className="gr-text-8 mb-0 px-lg-7 px-xl-0">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
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

export default Video;
