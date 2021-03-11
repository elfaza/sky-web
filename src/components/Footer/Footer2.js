import React, { useContext } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";

const Footer = () => {
    const gContext = useContext(GlobalContext);

    const contactClassName =
        gContext.footer.theme === "dark" ? "gr-text-color" : "text-primary";

    const linkClassName =
        gContext.footer.theme === "dark"
            ? "gr-text-color gr-hover-text-green"
            : "gr-text-color gr-hover-text-blue";

    const iconClassName =
        gContext.footer.theme === "dark"
            ? "gr-text-color"
            : "gr-text-color gr-hover-text-blue";

    const copyClassName =
        gContext.footer.theme === "dark"
            ? "gr-text-color-opacity"
            : "gr-text-color";

    return (
        <>
            <div
                className={`footer-section ${gContext.footer.theme === "dark"
                    ? "bg-blackish-blue dark-mode-texts"
                    : ""
                    }`}
            >
                <Container>
                    <div className="copyright-area border-top py-9">
                        <Row className="align-items-center">
                            <Col lg="6">
                                <p
                                    className={`copyright-text gr-text-11 mb-6 mb-lg-0 text-center text-lg-left ${copyClassName}`}
                                >
                                    Copyright © 2021 YukNgaji. All Right Reserved.
                                </p>
                            </Col>
                            <Col lg="6" className="text-center text-lg-right">
                                <ul className="social-icons list-unstyled mb-0">
                                    <li className="ml-7">
                                        <a className={iconClassName} href="https://www.facebook.com/yukngajiid" target="_blank">
                                            <i className="icon icon-logo-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="ml-7">
                                        <a className={iconClassName} href="https://www.instagram.com/yukngajiid/" target="_blank">
                                            <i className="icon icon-instant-camera-2"></i>
                                        </a>
                                    </li>
                                    <li className="ml-7">
                                        <a className={iconClassName} href="https://www.youtube.com/channel/UCUq-pIyEhxiOQVuzffoT7dQ" target="_blank">
                                            <i className="icon icon-triangle-right-17-2"></i>
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Footer;
