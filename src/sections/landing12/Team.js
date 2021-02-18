import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import imgT1 from "../../assets/image/telemedicine/png/team-1.png";
import imgT2 from "../../assets/image/telemedicine/png/team-2.png";
import imgT3 from "../../assets/image/telemedicine/png/team-3.png";
import imgT4 from "../../assets/image/telemedicine/png/team-4.png";
import imgT5 from "../../assets/image/telemedicine/png/team-5.png";
import imgT6 from "../../assets/image/telemedicine/png/team-6.png";
import imgT7 from "../../assets/image/telemedicine/png/team-7.png";
import imgT8 from "../../assets/image/telemedicine/png/team-8.png";
import imgT9 from "../../assets/image/telemedicine/png/team-9.png";

const Team = () => {
  return (
    <>
      {/* <!-- Team Area --> */}
      <div className="team-section pt-13 pt-lg-24 pb-3 pb-lg-20 bg-default-2">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="7" md="9">
              <div className="section-title text-center mb-13 mb-lg-23 px-lg-7">
                <h2 className="title gr-text-4 mb-6">Meet our doctors</h2>
                <p className="gr-text-8 mb-0">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link href="/#">
                  <a className="widget-img mr-7">
                    <img src={imgT1} alt="" className=" circle-96" />
                  </a>
                </Link>
                <div className="widget-text">
                  <Link href="/#">
                    <a>
                      <h3 className="name gr-text-7 mb-6">Dr. Eugene Tucker</h3>
                    </a>
                  </Link>
                  <p className="gr-text-11 mb-0">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link href="/#">
                  <a className="widget-img mr-7">
                    <img src={imgT2} alt="" className=" circle-96" />
                  </a>
                </Link>
                <div className="widget-text">
                  <Link href="/#">
                    <a>
                      <h3 className="name gr-text-7 mb-6">
                        Dr. Nannie Roberts
                      </h3>
                    </a>
                  </Link>
                  <p className="gr-text-11 mb-0">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link href="/#">
                  <a className="widget-img mr-7">
                    <img src={imgT3} alt="" className=" circle-96" />
                  </a>
                </Link>
                <div className="widget-text">
                  <Link href="/#">
                    <a>
                      <h3 className="name gr-text-7 mb-6">Dr. Henry Hampton</h3>
                    </a>
                  </Link>
                  <p className="gr-text-11 mb-0">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link href="/#">
                  <a className="widget-img mr-7">
                    <img src={imgT4} alt="" className=" circle-96" />
                  </a>
                </Link>
                <div className="widget-text">
                  <Link href="/#">
                    <a>
                      <h3 className="name gr-text-7 mb-6">
                        Dr. Hannah Stanley
                      </h3>
                    </a>
                  </Link>
                  <p className="gr-text-11 mb-0">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link href="/#">
                  <a className="widget-img mr-7">
                    <img src={imgT5} alt="" className=" circle-96" />
                  </a>
                </Link>
                <div className="widget-text">
                  <Link href="/#">
                    <a>
                      <h3 className="name gr-text-7 mb-6">
                        Dr. Melvin Carpenter
                      </h3>
                    </a>
                  </Link>
                  <p className="gr-text-11 mb-0">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link href="/#">
                  <a className="widget-img mr-7">
                    <img src={imgT6} alt="" className=" circle-96" />
                  </a>
                </Link>
                <div className="widget-text">
                  <Link href="/#">
                    <a>
                      <h3 className="name gr-text-7 mb-6">Dr. Nancy Watkins</h3>
                    </a>
                  </Link>
                  <p className="gr-text-11 mb-0">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link href="/#">
                  <a className="widget-img mr-7">
                    <img src={imgT7} alt="" className=" circle-96" />
                  </a>
                </Link>
                <div className="widget-text">
                  <Link href="/#">
                    <a>
                      <h3 className="name gr-text-7 mb-6">
                        Dr. Roger McDonald
                      </h3>
                    </a>
                  </Link>
                  <p className="gr-text-11 mb-0">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link href="/#">
                  <a className="widget-img mr-7">
                    <img src={imgT8} alt="" className=" circle-96" />
                  </a>
                </Link>
                <div className="widget-text">
                  <Link href="/#">
                    <a>
                      <h3 className="name gr-text-7 mb-6">Dr. Ella Gonzales</h3>
                    </a>
                  </Link>
                  <p className="gr-text-11 mb-0">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              xs="9"
              md="6"
              className="mb-13 mb-lg-17 px-xs-6 px-md-6 px-lg-0 px-xl-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="team-widget media">
                <Link href="/#">
                  <a className="widget-img mr-7">
                    <img src={imgT9} alt="" className=" circle-96" />
                  </a>
                </Link>
                <div className="widget-text">
                  <Link href="/#">
                    <a>
                      <h3 className="name gr-text-7 mb-6">Dr. Olive Farmer</h3>
                    </a>
                  </Link>
                  <p className="gr-text-11 mb-0">
                    MBBS, MD (Cardiology) <br />
                    Senior Consultant
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

export default Team;
