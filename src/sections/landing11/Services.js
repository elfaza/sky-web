import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import imgS1 from "../../assets/image/l2/jpg/l2-service-img1.jpg";
import imgS2 from "../../assets/image/l2/jpg/l2-service-img2.jpg";
import imgS3 from "../../assets/image/l2/jpg/l2-service-img3.jpg";
import imgS4 from "../../assets/image/l2/jpg/l2-service-img4.jpg";

const Services = () => {
    return (
        <>
            {/* <!-- Services Area --> */}
            <div className="service-section pt-12 pb-7 pb-lg-25 pt-lg-19">
                <Container>
                    <Row className="justify-content-center">
                        <Col xl="6" lg="8" sm="10">
                            <div className="section-title text-center mb-11 mb-lg-20">
                                <h2 className="title gr-text-4 mb-7">
                                    Our Community
                                </h2>
                                <p className="gr-text-8 px-lg-7 px-xl-0">
                                    With lots of unique blocks, you can easily build a page
                                    without coding. Build your next landing page.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col
                            xs="10"
                            sm="6"
                            lg="3"
                            className="mb-9 mb-lg-0"
                            data-aos="fade-left"
                            data-aos-duration="500"
                        >
                            <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                                <img
                                    src={imgS1}
                                    className="card-img-top rounded-top-10"
                                    alt="..."
                                />
                                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                                    <Link href="/#">
                                        <a className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0">
                                            Digital Marketing{" "}
                                            <i className="icon icon-tail-right font-weight-bold"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col
                            xs="10"
                            sm="6"
                            lg="3"
                            className="mb-9 mb-lg-0"
                            data-aos="fade-left"
                            data-aos-duration="1100"
                        >
                            <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                                <img
                                    src={imgS2}
                                    className="card-img-top rounded-top-10"
                                    alt="..."
                                />
                                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                                    <Link href="/#">
                                        <a className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0">
                                            Content Writing{" "}
                                            <i className="icon icon-tail-right font-weight-bold"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col
                            xs="10"
                            sm="6"
                            lg="3"
                            className="mb-9 mb-lg-0"
                            data-aos="fade-left"
                            data-aos-duration="1700"
                        >
                            <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                                <img
                                    src={imgS3}
                                    className="card-img-top rounded-top-10"
                                    alt="..."
                                />
                                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                                    <Link href="/#">
                                        <a className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0">
                                            Graphic Design{" "}
                                            <i className="icon icon-tail-right font-weight-bold"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col
                            xs="10"
                            sm="6"
                            lg="3"
                            className="mb-9 mb-lg-0"
                            data-aos="fade-left"
                            data-aos-duration="2300"
                        >
                            <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                                <img
                                    src={imgS4}
                                    className="card-img-top rounded-top-10"
                                    alt="..."
                                />
                                <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                                    <Link href="/#">
                                        <a className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0">
                                            SEO for Business{" "}
                                            <i className="icon icon-tail-right font-weight-bold"></i>
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
};

export default Services;
