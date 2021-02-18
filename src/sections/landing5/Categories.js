import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../../assets/image/l8/png/category-1.png";
import imgC2 from "../../assets/image/l8/png/category-2.png";
import imgC3 from "../../assets/image/l8/png/category-3.png";
import imgC4 from "../../assets/image/l8/png/category-4.png";
import imgC5 from "../../assets/image/l8/png/category-5.png";
import imgC6 from "../../assets/image/l8/png/category-6.png";

const Categories = () => {
  return (
    <>
      {/* <!-- Categories Area --> */}
      <div className="category-area mt-n29 pb-19 pb-lg-21">
        <Container>
          <Row>
            <Col
              md="6"
              lg="4"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="750"
            >
              <Link href="/#">
                <a>
                  <div className="single-category w-100 rounded-10 bg-gray-2 d-inline-block px-12 pt-9 pb-12 mb-9 gr-hover-shadow-6 ">
                    <div className="case-content mb-9">
                      <h3 className="category-title gr-text-6 mb-3 text-blackish-blue">
                        Living Room
                      </h3>
                      <span className="item-count gr-text-9 mb-0 d-inline-block text-blackish-blue gr-opacity-7">
                        23 Items
                      </span>
                    </div>
                    <div className="category-img text-center">
                      <img src={imgC1} alt="" className="" />
                    </div>
                  </div>
                </a>
              </Link>

              <Link href="/#">
                <a>
                  <div className="single-category w-100 rounded-10 bg-gray-2 d-inline-block px-12 pt-9 pb-12 mb-9 gr-hover-shadow-6 ">
                    <div className="case-content mb-9">
                      <h3 className="category-title gr-text-6 mb-3 text-blackish-blue">
                        Kitchen
                      </h3>
                      <span className="item-count gr-text-9 mb-2 d-inline-block text-blackish-blue gr-opacity-7">
                        11 Items
                      </span>
                    </div>
                    <div className="category-img text-center">
                      <img src={imgC4} alt="" className="" />
                    </div>
                  </div>
                </a>
              </Link>
            </Col>
            <Col
              md="6"
              lg="4"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="750"
            >
              <Link href="/#">
                <a>
                  <div className="single-category w-100 rounded-10 bg-gray-2 d-inline-block px-12 pt-9 pb-12 mb-9 gr-hover-shadow-6 ">
                    <div className="case-content mb-9">
                      <h3 className="category-title gr-text-6 mb-3 text-blackish-blue">
                        Dining Room
                      </h3>
                      <span className="item-count gr-text-9 mb-0 d-inline-block text-blackish-blue gr-opacity-7">
                        36 Items
                      </span>
                    </div>
                    <div className="category-img text-center">
                      <img src={imgC2} alt="" className="" />
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/#">
                <a>
                  <div className="single-category w-100 rounded-10 bg-gray-2 d-inline-block px-12 pt-9 pb-12 mb-9 gr-hover-shadow-6 ">
                    <div className="case-content mb-9">
                      <h3 className="category-title gr-text-6 mb-3 text-blackish-blue">
                        Office
                      </h3>
                      <span className="item-count gr-text-9 mb-2 d-inline-block text-blackish-blue gr-opacity-7">
                        09 Items
                      </span>
                    </div>
                    <div className="category-img text-center">
                      <img src={imgC5} alt="" className="" />
                    </div>
                  </div>
                </a>
              </Link>
            </Col>
            <Col
              md="6"
              lg="4"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="750"
            >
              <Link href="/#">
                <a>
                  <div className="single-category w-100 rounded-10 bg-gray-2 d-inline-block px-12 pt-9 pb-12 mb-9 gr-hover-shadow-6 ">
                    <div className="case-content mb-9">
                      <h3 className="category-title gr-text-6 mb-3 text-blackish-blue">
                        Bed Room
                      </h3>
                      <span className="item-count gr-text-9 mb-0 d-inline-block text-blackish-blue gr-opacity-7">
                        17 Items
                      </span>
                    </div>
                    <div className="category-img text-center">
                      <img src={imgC3} alt="" className="" />
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/#">
                <a>
                  <div className="single-category w-100 rounded-10 bg-gray-2 d-inline-block px-12 pt-9 pb-12 mb-9 gr-hover-shadow-6 ">
                    <div className="case-content mb-9">
                      <h3 className="category-title gr-text-6 mb-3 text-blackish-blue">
                        Outdoor
                      </h3>
                      <span className="item-count gr-text-9 mb-2 d-inline-block text-blackish-blue gr-opacity-7">
                        45 Items
                      </span>
                    </div>
                    <div className="category-img text-center">
                      <img src={imgC6} alt="" className="" />
                    </div>
                  </div>
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Categories;
