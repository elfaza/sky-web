import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import imgC from "../../assets/image/app_low.png";

const SkyIntro = () => {
    return (
        <>
            {/* <!-- Content Area --> */}
            <div className="content-section pt-12 pb-13 pt-lg-21 pb-lg-22 bg-default-2">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col sm="10" lg="5" className="pr-lg-9">
                            <div className="content-text">
                                <h2 className="gr-text-4 mb-8">
                                    SKY - Studi Komprehensif YukNgaji
                                </h2>
                                <p className="gr-text-8 pr-4 mb-11">
                                    Yuk temukan keindahan & kedamaian islam dalam kehidupan sehari-hari bersama SKY, pembahasan yang santai serta banyak metode pembelajaran seru dapat kamu temukan disini, Download sekarang!
                                </p>
                                <div className="content-btn">
                                    <div className="row">
                                        <div className="col-sm-6 mb-5 mb-sm-0 d-flex justify-content-center justify-content-md-start">
                                            <a href="https://apps.apple.com/id/app/sky/id1544036214" target="_blank" method="get">
                                                <Button className="gr-hover-y">
                                                    <i class="fab fa-apple mr-4"></i>
                                                    Apple Store
                                                </Button>
                                            </a>
                                        </div>
                                        <div className="col-sm-6 d-flex justify-content-center justify-content-md-start">
                                            <a href="https://play.google.com/store/apps/details?id=com.yukngaji.sky2" target="_blank">
                                                <Button className="gr-hover-y">
                                                    <i class="fab fa-google-play mr-4"></i>
                                                    Play Store
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
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

export default SkyIntro;
