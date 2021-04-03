import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import useMobileDetect from 'use-mobile-detect-hook';

import imgC from "../../assets/image/app_low.png";

const SkyIntro = () => {
    const detectMobile = useMobileDetect();

    const downloadUrl = detectMobile.isAndroid() ? "https://play.google.com/store/apps/details?id=com.yukngaji.sky2" : detectMobile.isIos() ? "https://apps.apple.com/id/app/sky/id1544036214" : null

    return (
        <>
            {/* <!-- Content Area --> */}
            <div className="content-section pt-12 pb-13 pt-lg-21 pb-lg-22 bg-default-2">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col sm="10" lg="5" className="pr-lg-9">
                            <div className="content-text">
                                <h2 className="gr-text-4 mb-8">
                                    SKY (Studi Komprehensif YukNgaji)
                                </h2>
                                <p className="gr-text-8 pr-4 mb-11">
                                    Adalah aplikasi pembelajaran mandiri untuk teman-teman yang ingin kenal lebih jauh islam beserta keindahan dan kedamaian yang ada di dalam nya, supaya nantinya bisa diterapkan sehari-hari untuk diri sendiri dan orang sekitar kita dengan cara yang seru dan ringan. Yuk Download sekarang!
                                </p>
                                {downloadUrl &&
                                    <div className="content-btn">
                                        <form action={downloadUrl} target="_blank">
                                            <Button type="submit" className="with-icon gr-hover-y">
                                                Download Now
                                        <i className="icon icon-tail-right font-weight-bold"></i>
                                            </Button>
                                        </form>
                                    </div>
                                }
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
