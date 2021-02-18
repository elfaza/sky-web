import React, { useState } from "react";
import { Row, Col, Container, Fade, Button } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import Showcase from "../sections/product/Showcase";

import imgP1 from "../assets/image/l8/png/product-image-1.png";
import imgP2 from "../assets/image/l8/png/product-image-2.png";
import imgP3 from "../assets/image/l8/png/product-image-3.png";
import imgP4 from "../assets/image/l8/png/product-image-4.png";

const ProductDetails = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }}
      >
        <Showcase />
        <div className="pb-md-19 pt-md-19 pt-13 pb-13">
          <Container>
            <nav className="pb-12">
              <div className="nav gr-nav-tabs " id="nav-tab" role="tablist">
                <a
                  href="/"
                  className={`nav-item nav-link gr-text-7 font-weight-bold ${
                    active === 1 ? "active" : ""
                  }`}
                  role="tab"
                  aria-selected={active === 1}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(1);
                  }}
                >
                  Description
                </a>
                <a
                  className={`nav-item nav-link gr-text-7 font-weight-bold ${
                    active === 2 ? "active" : ""
                  }`}
                  role="tab"
                  aria-selected={active === 2}
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(2);
                  }}
                >
                  Profile
                </a>
                <a
                  className={`nav-item nav-link gr-text-7 font-weight-bold ${
                    active === 3 ? "active" : ""
                  }`}
                  role="tab"
                  aria-selected={active === 3}
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(3);
                  }}
                >
                  Contact
                </a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <Fade
                in={active === 1}
                role="tabpanel"
                className={`tab-pane ${active === 1 ? "active" : ""}`}
              >
                <div>
                  <div>
                    <p className="gr-text-9">
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews. Iterative approaches to corporate
                      strategy foster collaborative thinking to further the
                      overall value proposition. Organically grow the holistic
                      world view of disruptive innovation via workplace
                      diversity and empowerment.Leverage agile frameworks to
                      provide a robust synopsis for high level overviews.
                    </p>
                    <p className="gr-text-9">
                      terative approaches to corporate strategy foster
                      collaborative thinking to further the overall value
                      proposition. Organically grow the holistic world view of
                      disruptive innovation via workplace diversity and
                      empowerment.
                    </p>
                    <p className="gr-text-9">
                      Capitalize on low hanging fruit to identify a ballpark
                      value added activity to beta test. Override the digital
                      divide with additional clickthroughs from DevOps.
                      Nanotechnology immersion along the information highway
                      will close the loop on focusing solely on the bottom
                      line.Capitalize on low hanging fruit to identify a
                      ballpark value added activity to beta test. Override the
                      digital divide with additional clickthroughs from DevOps.
                      Nanotechnology immersion along the information highway
                      will close the loop on focusing solely on the bottom line.
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade
                in={active === 2}
                role="tabpanel"
                className={`tab-pane ${active === 2 ? "active" : ""}`}
              >
                <div>
                  <div>
                    terative approaches to corporate strategy foster
                    collaborative thinking to further the overall value
                    proposition. Organically grow the holistic world view of
                    disruptive innovation via workplace diversity and
                    empowerment. Capitalize on low hanging fruit to identify a
                    ballpark value added activity to beta test. Override the
                    digital divide with additional clickthroughs from DevOps.
                    Nanotechnology immersion along the information highway will
                    close the loop on focusing solely on the bottom
                    line.Capitalize on low hanging fruit to identify a ballpark
                    value added activity to beta test. Override the digital
                    divide with additional clickthroughs from DevOps.
                    Nanotechnology immersion along the information highway will
                    close the loop on focusing solely on the bottom line.
                  </div>
                </div>
              </Fade>
              <Fade
                in={active === 3}
                role="tabpanel"
                className={`tab-pane ${active === 3 ? "active" : ""}`}
              >
                <div>
                  <div>
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs from DevOps. Nanotechnology
                    immersion along the information highway will close the loop
                    on focusing solely on the bottom line.Capitalize on low
                    hanging fruit to identify a ballpark value added activity to
                    beta test. Override the digital divide with additional
                    clickthroughs from DevOps. Nanotechnology immersion along
                    the information highway will close the loop on focusing
                    solely on the bottom line.
                  </div>
                </div>
              </Fade>
            </div>
          </Container>
        </div>

        <div className="pt-13 pt-md-25 pb-13 pb-md-25 bg-default-5">
          <Container>
            <Row>
              <Col lg="12">
                <div className="section-title text-center">
                  <h2 className="gr-text-5">Related Products</h2>
                </div>
              </Col>
            </Row>
            <Row
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <Col xs="6" md="4" lg="4" xl="3" className="mt-12 mt-md-17">
                <div className="product-card gr-product-hover-1">
                  <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                    <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                      <img src={imgP1} alt="" />
                    </div>
                    <div className="card-btn hover-animation-item">
                      <Button className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                        <i>+</i>Add to cart
                      </Button>
                    </div>
                  </div>
                  <div className="card-text text-center">
                    <div className="gr-text-9 mt-8 line-height-reset mb-2">
                      <span className="text-green">$899</span>{" "}
                      <span className="ml-2 text-linethrough"> $1,350</span>{" "}
                    </div>
                    <h3 className="gr-text-7">Safavieh Couture</h3>
                    <div className="ratings d-flex justify-content-center">
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs="6" md="4" lg="4" xl="3" className="mt-12 mt-md-17">
                <div className="product-card gr-product-hover-1">
                  <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                    <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                      <img src={imgP2} alt="" />
                    </div>
                    <div className="card-btn hover-animation-item">
                      <Button className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                        <i>+</i>Add to cart
                      </Button>
                    </div>
                  </div>
                  <div className="card-text text-center">
                    <div className="gr-text-9 mt-8 line-height-reset mb-2">
                      <span className="text-green">$34</span>{" "}
                    </div>
                    <h3 className="gr-text-7">Fair Trade Ghana</h3>
                    <div className="ratings d-flex justify-content-center">
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs="6" md="4" lg="4" xl="3" className="mt-12 mt-md-17">
                <div className="product-card gr-product-hover-1">
                  <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                    <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                      <img src={imgP3} alt="" />
                    </div>
                    <div className="card-btn hover-animation-item">
                      <Button className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                        <i>+</i>Add to cart
                      </Button>
                    </div>
                  </div>
                  <div className="card-text text-center">
                    <div className="gr-text-9 mt-8 line-height-reset mb-2">
                      <span className="text-green">$44.99</span>{" "}
                    </div>
                    <h3 className="gr-text-7">KingSo Round Table</h3>
                    <div className="ratings d-flex justify-content-center">
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs="6" md="4" lg="4" xl="3" className="mt-12 mt-md-17">
                <div className="product-card gr-product-hover-1">
                  <div className="py-29 w-100 position-relative rounded-10 overflow-hidden">
                    <div className="card-image bg-gray-2 gr-abs-tl h-100 w-100 gr-flex-all-center">
                      <img src={imgP4} alt="" />
                    </div>
                    <div className="card-btn hover-animation-item">
                      <Button className="btn-hover-translate-none with-icon-left gr-card-box-shadow py-3 px-8">
                        <i>+</i>Add to cart
                      </Button>
                    </div>
                  </div>
                  <div className="card-text text-center">
                    <div className="gr-text-9 mt-8 line-height-reset mb-2">
                      <span className="text-green">$120</span>{" "}
                      <span className="ml-2 text-linethrough"> $350</span>{" "}
                    </div>
                    <h3 className="gr-text-7">Safavieh Couture</h3>
                    <div className="ratings d-flex justify-content-center">
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                      <i className="fas fa-star mx-1 text-yellow-orange gr-text-8"></i>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default ProductDetails;
