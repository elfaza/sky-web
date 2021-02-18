import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import Content3 from "../sections/landing6/Content3";
import Locations from "../sections/landing3/Locations";
import Services from "../sections/landing11/Services";
import Content1 from "../sections/landing4/Content1";

import bgSection from "../assets/image/inner/video-bg-2.png";

const IndexPage = () => {
    const gContext = useContext(GlobalContext);
    return (
        <PageWrapper
            headerConfig={{
                align: "right",
                button: "account", // cta, account, null
            }}
        >
            <div className="inner-banner bg-default-6 pt-24 pt-lg-30 pb-lg-15">
                <Container>
                    <Row className="justify-content-center pt-5">
                        <Col xl="8" lg="9">
                            <div className="px-md-12 mb-13 text-center">
                                <h2 className="title gr-text-2 mb-8 mb-lg-12">
                                    YukNgaji
                                </h2>
                                <p className="gr-text-8 mb-0">
                                    Taat Bahagia Maksiat Sengasara
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div
                className="video-section bg-image py-28 py-lg-35 dark-mode-texts"
                css={`background-image: url(${bgSection});`}
            >
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col xl="6" lg="7" md="8">
                            <div className="text-center video-content">
                                <a
                                    className="video-play-icon mx-auto circle-120 bg-primary gr-text-7 text-white my-lg-8 gr-hover-y focus-reset"
                                    href="#/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        gContext.toggleVideoModal();
                                    }}
                                    tabIndex="-1"
                                >
                                    <i className="icon icon-triangle-right-17-2"></i>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Content1 />

            <Locations />

            <Services />

            <Content3 />
        </PageWrapper>
    );
};
export default IndexPage;
