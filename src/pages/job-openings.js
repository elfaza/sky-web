import React, { useContext } from "react";
import Link from "next/link";
import GlobalContext from "../context/GlobalContext";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

import bgSection from "../assets/image/inner/video-bg-2.png";
import icon1 from "../assets/image/inner/icon-bubbles-blue.svg";
import icon2 from "../assets/image/inner/icon-doller-paste.svg";
import icon3 from "../assets/image/inner/icon-user-yellow.svg";
import icon4 from "../assets/image/inner/icon-watch-red.svg";
import icon5 from "../assets/image/inner/icon-keyhole-pink.svg";
import icon6 from "../assets/image/inner/icon-globe-blue.svg";

const JobOpenings = () => {
  const gContext = useContext(GlobalContext);
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }}
      >
        <div className="inner-banner bg-default-6 pt-24 pt-lg-30 pb-lg-15">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9">
                <div className="px-md-12 mb-13 text-center">
                  <h2 className="title gr-text-2 mb-8 mb-lg-12">
                    Join at Grayic
                  </h2>
                  <p className="gr-text-8 mb-0">
                    By accessing and placing an order with UXTheme, you confirm
                    that you are in agreement with and bound by the terms and
                    conditions
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div
          className="video-section bg-image py-28 py-lg-35 dark-mode-texts "
          css={`
            background-image: url(${bgSection});
          `}
        >
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col xl="6" lg="7" md="8">
                <div className="text-center video-content">
                  <a
                    className="video-play-icon mx-auto circle-120 bg-primary gr-text-7 text-white my-lg-8 gr-hover-y focus-reset"
                    href="#/"
                    onClick={(e) => {
                      e.preventDefault();
                      gContext.toggleVideoModal();
                    }}
                    tabIndex="-1"
                  >
                    <i className="icon icon-triangle-right-17-2"></i>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="pb-2 pb-lg-9 pt-13 pt-lg-24 bg-default-6 ">
          <Container>
            <Row className="justify-content-center">
              <Col xl="8" lg="9">
                <div className="px-md-15 text-center mb-13 mb-lg-22">
                  <h2 className="title gr-text-3 mb-9">
                    Why you should join us?
                  </h2>
                  <p className="gr-text-8 mb-0">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next consultancy website within
                    few minutes.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col
                lg="4"
                md="6"
                sm="6"
                xs="8"
                className="mb-md-12 mb-lg-19 mb-9"
              >
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-9 mb-9 mb-lg-0">
                    <img src={icon1} alt="" className="w-auto" />
                  </div>
                  <div className="card-texts pr-xl-10">
                    <h3 className="gr-text-6 mb-7 gr-text-exerpt">
                      Personal growth
                    </h3>
                    <p className="gr-text-9 mb-0">
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="4"
                md="6"
                sm="6"
                xs="8"
                className="mb-md-12 mb-lg-19 mb-9"
              >
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-9 mb-9 mb-lg-0">
                    <img src={icon2} alt="" className="w-auto" />
                  </div>
                  <div className="card-texts pr-xl-10">
                    <h3 className="gr-text-6 mb-7 gr-text-exerpt">
                      Competitive salary
                    </h3>
                    <p className="gr-text-9 mb-0">
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="4"
                md="6"
                sm="6"
                xs="8"
                className="mb-md-12 mb-lg-19 mb-9"
              >
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-9 mb-9 mb-lg-0">
                    <img src={icon3} alt="" className="w-auto" />
                  </div>
                  <div className="card-texts pr-xl-10">
                    <h3 className="gr-text-6 mb-7 gr-text-exerpt">
                      Casual dress code
                    </h3>
                    <p className="gr-text-9 mb-0">
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="4"
                md="6"
                sm="6"
                xs="8"
                className="mb-md-12 mb-lg-19 mb-9"
              >
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-9 mb-9 mb-lg-0">
                    <img src={icon4} alt="" className="w-auto" />
                  </div>
                  <div className="card-texts pr-xl-10">
                    <h3 className="gr-text-6 mb-7 gr-text-exerpt">
                      Unlimited time off
                    </h3>
                    <p className="gr-text-9 mb-0">
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="4"
                md="6"
                sm="6"
                xs="8"
                className="mb-md-12 mb-lg-19 mb-9"
              >
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-9 mb-9 mb-lg-0">
                    <img src={icon5} alt="" className="w-auto" />
                  </div>
                  <div className="card-texts pr-xl-10">
                    <h3 className="gr-text-6 mb-7 gr-text-exerpt">
                      Yearly bonuses
                    </h3>
                    <p className="gr-text-9 mb-0">
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="4"
                md="6"
                sm="6"
                xs="8"
                className="mb-md-12 mb-lg-19 mb-9"
              >
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-9 mb-9 mb-lg-0">
                    <img src={icon6} alt="" className="w-auto" />
                  </div>
                  <div className="card-texts pr-xl-10">
                    <h3 className="gr-text-6 mb-7 gr-text-exerpt">
                      Global community
                    </h3>
                    <p className="gr-text-9 mb-0">
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="bg-default-2 pt-15 pt-lg-23 pb-13 pb-lg-27">
          <Container>
            <div className="section-title text-center mb-13 mb-lg-20">
              <h2 className="gr-text-3 mb-0">Current job openings</h2>
            </div>
            <Row>
              <Col xs="12">
                <div className="px-md-13 px-xl-15">
                  <Link href="/">
                    <a className="d-flex justify-content-between bg-white rounded-10 px-8 pl-lg-13 pr-lg-11 py-9 py-lg-10 align-items-center mb-5 job-card-hover gr-hover-shadow-5">
                      <div className="texts">
                        <h3 className="gr-text-6 font-weight-bold text-blackish-blue mb-4">
                          Account Manager{" "}
                        </h3>
                        <p className="gr-text-9 mb-0 gr-color-blackish-blue-opacity-7">
                          Full Time, New York
                        </p>
                      </div>
                      <div className="card-icon">
                        <i className="fas fa-arrow-right gr-text-8 text-storm"></i>
                      </div>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="d-flex justify-content-between bg-white rounded-10 px-8 pl-lg-13 pr-lg-11 py-9 py-lg-10 align-items-center mb-5 job-card-hover gr-hover-shadow-5">
                      <div className="texts">
                        <h3 className="gr-text-6 font-weight-bold text-blackish-blue mb-4">
                          Full Stack Developer
                        </h3>
                        <p className="gr-text-9 mb-0 gr-color-blackish-blue-opacity-7">
                          Full Time, Remote
                        </p>
                      </div>
                      <div className="card-icon">
                        <i className="fas fa-arrow-right gr-text-8 text-storm"></i>
                      </div>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="d-flex justify-content-between bg-white rounded-10 px-8 pl-lg-13 pr-lg-11 py-9 py-lg-10 align-items-center mb-5 job-card-hover gr-hover-shadow-5">
                      <div className="texts">
                        <h3 className="gr-text-6 font-weight-bold text-blackish-blue mb-4">
                          Senior Project Manager
                        </h3>
                        <p className="gr-text-9 mb-0 gr-color-blackish-blue-opacity-7">
                          Full Time, New York
                        </p>
                      </div>
                      <div className="card-icon">
                        <i className="fas fa-arrow-right gr-text-8 text-storm"></i>
                      </div>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="d-flex justify-content-between bg-white rounded-10 px-8 pl-lg-13 pr-lg-11 py-9 py-lg-10 align-items-center mb-5 job-card-hover gr-hover-shadow-5">
                      <div className="texts">
                        <h3 className="gr-text-6 font-weight-bold text-blackish-blue mb-4">
                          UX Designer
                        </h3>
                        <p className="gr-text-9 mb-0 gr-color-blackish-blue-opacity-7">
                          Full Time, New York
                        </p>
                      </div>
                      <div className="card-icon">
                        <i className="fas fa-arrow-right gr-text-8 text-storm"></i>
                      </div>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="d-flex justify-content-between bg-white rounded-10 px-8 pl-lg-13 pr-lg-11 py-9 py-lg-10 align-items-center mb-5 job-card-hover gr-hover-shadow-5">
                      <div className="texts">
                        <h3 className="gr-text-6 font-weight-bold text-blackish-blue mb-4">
                          Software Engineer
                        </h3>
                        <p className="gr-text-9 mb-0 gr-color-blackish-blue-opacity-7">
                          Full Time, New York
                        </p>
                      </div>
                      <div className="card-icon">
                        <i className="fas fa-arrow-right gr-text-8 text-storm"></i>
                      </div>
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default JobOpenings;
