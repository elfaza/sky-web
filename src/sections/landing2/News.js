import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import imgN1 from "../../assets/image/job-site/jpg/news-card-img1.jpg";
import imgN2 from "../../assets/image/job-site/jpg/news-card-img2.jpg";
import imgN3 from "../../assets/image/job-site/jpg/news-card-img3.jpg";

const News = () => (
  <>
    {/* <!-- News section --> */}
    <div className="news-section pt-12 pb-8 py-lg-23 bg-default-2">
      <Container>
        <Row className="justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="section-title text-center mb-11 mb-lg-18">
              <h2 className="title gr-text-4 mb-6">News that helps</h2>
              <p className="gr-text-8 px-lg-8 mb-0">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
            </div>
          </div>
        </Row>
        <Row
          className="justify-content-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Col md="6" lg="4">
            <div className="location-card mb-9 gr-hover-shadow-1">
              <Link href="/">
                <a className="card-img">
                  <img src={imgN1} alt="" className="w-100 rounded-top-10" />
                </a>
              </Link>
              <div className="card-content px-9 py-8 bg-white rounded-bottom-10">
                <Link href="/">
                  <a>
                    <p className="gr-text-11 mb-4 d-inline-block gr-color-blackish-blue-opacity-7">
                      Career
                    </p>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <h3 className="title text-blackish-blue gr-text-7 mb-0">
                      How to win any job you want. Get started with 5 steps.
                    </h3>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
          <Col md="6" lg="4">
            <div className="location-card mb-9 gr-hover-shadow-1">
              <Link href="/">
                <a className="card-img">
                  <img src={imgN2} alt="" className="w-100 rounded-top-10" />
                </a>
              </Link>
              <div className="card-content px-9 py-8 bg-white rounded-bottom-10">
                <Link href="/">
                  <a>
                    <p className="gr-text-11 mb-4 d-inline-block gr-color-blackish-blue-opacity-7">
                      Lifestyle
                    </p>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <h3 className="title text-blackish-blue gr-text-7 mb-0">
                      10 ways to reduce your office work depression.
                    </h3>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
          <Col md="6" lg="4">
            <div className="location-card mb-9 gr-hover-shadow-1">
              <Link href="/">
                <a className="card-img">
                  <img src={imgN3} alt="" className="w-100 rounded-top-10" />
                </a>
              </Link>
              <div className="card-content px-9 py-8 bg-white rounded-bottom-10">
                <Link href="/">
                  <a>
                    <p className="gr-text-11 mb-4 d-inline-block gr-color-blackish-blue-opacity-7">
                      Career
                    </p>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <h3 className="title text-blackish-blue gr-text-7 mb-0">
                      Why should you work as a team even on small projects.
                    </h3>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default News;
