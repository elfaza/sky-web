import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const Category = () => (
  <>
    {/* <!-- Category section --> */}
    <div className="category-section pt-12 pb-6 pt-lg-26 pb-lg-24 bg-blackish-blue bg-pattern pattern-6">
      <Container>
        <Row className="justify-content-lg-between align-items-center">
          <Col lg="6" xl="5">
            <div className="section-title mb-7 mb-lg-16 dark-mode-texts">
              <h2 className="title gr-text-4 mb-7">Jobs by category</h2>
              <p className="gr-text-8 mb-0">
                With lots of unique blocks, you can easily{" "}
                <br className="d-none d-lg-block" />
                build a page without coding.
              </p>
            </div>
          </Col>
          <Col lg="4" xl="3">
            <div className="text-lg-right mb-11 mb-lg-0">
              <Link href="/">
                <a className="btn-link with-icon text-green justify-content-lg-end font-weight-bold">
                  Explore all categories<i className="fas fa-arrow-right"></i>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="6" lg="4" data-aos="fade-right" data-aos-duration="1100">
            <Link href="/">
              <a className="d-flex justify-content-between rounded-10 px-9 pt-8 pb-8 align-items-center mb-11 category-card">
                <div className="texts light-mode-texts">
                  <h3 className="card-title gr-text-7 font-weight-bold">
                    Design
                  </h3>
                  <p className="sub-title gr-text-11 mb-0 gr-color-blackish-blue-opacity-7">
                    47 Jobs
                  </p>
                </div>
                <div className="card-icon circle-43">
                  <i className="fas fa-arrow-right gr-text-8 text-white"></i>
                </div>
              </a>
            </Link>
          </Col>
          <Col md="6" lg="4" data-aos="fade-right" data-aos-duration="1100">
            <Link href="/">
              <a className="d-flex justify-content-between rounded-10 px-9 pt-8 pb-8 align-items-center mb-11 category-card">
                <div className="texts light-mode-texts">
                  <h3 className="card-title gr-text-7 font-weight-bold">
                    Marketing
                  </h3>
                  <p className="sub-title gr-text-11 mb-0 gr-color-blackish-blue-opacity-7">
                    51 Jobs
                  </p>
                </div>
                <div className="card-icon circle-43">
                  <i className="fas fa-arrow-right gr-text-8 text-white"></i>
                </div>
              </a>
            </Link>
          </Col>
          <Col md="6" lg="4" data-aos="fade-right" data-aos-duration="1100">
            <Link href="/">
              <a className="d-flex justify-content-between rounded-10 px-9 pt-8 pb-8 align-items-center mb-11 category-card">
                <div className="texts light-mode-texts">
                  <h3 className="card-title gr-text-7 font-weight-bold">
                    Engineering
                  </h3>
                  <p className="sub-title gr-text-11 mb-0 gr-color-blackish-blue-opacity-7">
                    89 Jobs
                  </p>
                </div>
                <div className="card-icon circle-43">
                  <i className="fas fa-arrow-right gr-text-8 text-white"></i>
                </div>
              </a>
            </Link>
          </Col>
          <Col md="6" lg="4" data-aos="fade-right" data-aos-duration="1100">
            <Link href="/">
              <a className="d-flex justify-content-between rounded-10 px-9 pt-8 pb-8 align-items-center mb-11 category-card">
                <div className="texts light-mode-texts">
                  <h3 className="card-title gr-text-7 font-weight-bold">
                    Mangement
                  </h3>
                  <p className="sub-title gr-text-11 mb-0 gr-color-blackish-blue-opacity-7">
                    16 Jobs
                  </p>
                </div>
                <div className="card-icon circle-43">
                  <i className="fas fa-arrow-right gr-text-8 text-white"></i>
                </div>
              </a>
            </Link>
          </Col>
          <Col md="6" lg="4" data-aos="fade-right" data-aos-duration="1100">
            <Link href="/">
              <a className="d-flex justify-content-between rounded-10 px-9 pt-8 pb-8 align-items-center mb-11 category-card">
                <div className="texts light-mode-texts">
                  <h3 className="card-title gr-text-7 font-weight-bold">
                    Finance
                  </h3>
                  <p className="sub-title gr-text-11 mb-0 gr-color-blackish-blue-opacity-7">
                    23 Jobs
                  </p>
                </div>
                <div className="card-icon circle-43">
                  <i className="fas fa-arrow-right gr-text-8 text-white"></i>
                </div>
              </a>
            </Link>
          </Col>
          <Col md="6" lg="4" data-aos="fade-right" data-aos-duration="1100">
            <Link href="/">
              <a className="d-flex justify-content-between rounded-10 px-9 pt-8 pb-8 align-items-center mb-11 category-card">
                <div className="texts light-mode-texts">
                  <h3 className="card-title gr-text-7 font-weight-bold">
                    Customer Support
                  </h3>
                  <p className="sub-title gr-text-11 mb-0 gr-color-blackish-blue-opacity-7">
                    34 Jobs
                  </p>
                </div>
                <div className="card-icon circle-43">
                  <i className="fas fa-arrow-right gr-text-8 text-white"></i>
                </div>
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Category;
