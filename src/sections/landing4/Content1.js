import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import imgC from "../../assets/image/l1/png/l1-content1-img.png";

const Content = () => {
    return (
        <>
            {/* <!-- Content Area --> */}
            <div className="content-section pt-12 pb-13 pt-lg-21 pb-lg-22 bg-default-2">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col sm="10" lg="5" className="pr-lg-9">
                            <div className="content-text">
                                <h2 className="gr-text-4 mb-8">
                                    Getting started with SKY
                                </h2>
                                <p className="gr-text-8 pr-4 mb-11">
                                    With lots of unique blocks, you can easily build a page
                                    without coding. Build your next landing page so quickly with
                                    Albino.
                                </p>
                                <div className="content-btn">
                                    <Button className="with-icon gr-hover-y">
                                        Download Now
                                        <i className="icon icon-tail-right font-weight-bold"></i>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col sm="10" lg="6" className="offset-lg-1 mt-10 mt-lg-0">
                            <div
                                className="content-img img-group-1"
                                data-aos="zoom-in"
                                data-aos-duration="750"
                            >
                                <img className="img-fluid" src={imgC} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Content;
