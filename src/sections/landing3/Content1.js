import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../../assets/image/coworking/jpg/content1-img1.jpg";
import imgC2 from "../../assets/image/coworking/jpg/content1-img2.jpg";

const Content = () => (
  <>
    {/* <!-- Content section --> */}
    <div className="content-section bg-gradient bg-gradient-3 pt-lg-25 pt-14 pb-10 pb-lg-15">
      <Container>
        <Row>
          <Col md="6">
            <div className="section-title mb-13 mb-lg-21">
              <h2 className="title gr-text-3 mb-7">
                Work around very talented people.
              </h2>
              <p className="gr-text-8">
                With lots of unique blocks, you can easily build{" "}
                <br className="d-none d-lg-block" />a page easily without any
                coding.{" "}
              </p>
            </div>
            <div
              className="image-left pr-xl-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={imgC1} alt="" className="w-100 rounded-10" />
            </div>
          </Col>
          <Col md="6" data-aos="fade-up" data-aos-duration="1000">
            <div className="image-right mt-9 mt-lg-4 pl-xl-6">
              <img src={imgC2} alt="" className="w-100 rounded-10" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Content;
