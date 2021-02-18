import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import imgAS from "../../assets/image/l6/png/l6-download-appstore.png";
import imgGP from "../../assets/image/l6/png/l6-download-gplay.png";

const Footer = () => {
  return (
    <>
      <div className="footer-section pt-17 pt-lg-21">
        <Container>
          <div className="footer-top pb-lg-14">
            <Row>
              <Col xs="6" lg="2">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7">Company</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <Link href="/#">
                        <a className="gr-text-9 gr-text-color gr-hover-text-red">
                          About us
                        </a>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/#">
                        <a className="gr-text-9 gr-text-color gr-hover-text-red">
                          Contact us
                        </a>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/#">
                        <a className="gr-text-9 gr-text-color gr-hover-text-red">
                          Careers
                        </a>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/#">
                        <a className="gr-text-9 gr-text-color gr-hover-text-red">
                          Press
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="6" lg="2">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7">Product</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <Link href="/#">
                        <a className="gr-text-9 gr-text-color gr-hover-text-red">
                          Features
                        </a>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/#">
                        <a className="gr-text-9 gr-text-color gr-hover-text-red">
                          Pricing
                        </a>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/#">
                        <a className="gr-text-9 gr-text-color gr-hover-text-red">
                          News
                        </a>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/#">
                        <a className="gr-text-9 gr-text-color gr-hover-text-red">
                          Help desk
                        </a>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/#">
                        <a className="gr-text-9 gr-text-color gr-hover-text-red">
                          Support
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="6" lg="3">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7">Legal</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <Link href="/#">
                        <a className="gr-text-9 gr-text-color gr-hover-text-red">
                          Privacy Policy
                        </a>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/#">
                        <a className="gr-text-9 gr-text-color gr-hover-text-red">
                          Terms &amp; Conditions
                        </a>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/#">
                        <a className="gr-text-9 gr-text-color gr-hover-text-red">
                          Return Policy
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="6" lg="3" className="offset-lg-2">
                <div className="single-footer mb-13 mb-lg-9">
                  <div className="download-block">
                    <p className="download-title gr-text-11 mb-9">
                      Download Our App
                    </p>
                    <div className="download-btns">
                      <Link href="/#">
                        <a>
                          <img
                            src={imgAS}
                            alt=""
                            className="mb-5 w-100 w-xs-auto"
                          />
                        </a>
                      </Link>
                      <Link href="/#">
                        <a>
                          <img src={imgGP} alt="" className="w-100 w-xs-auto" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="copyright-area border-top py-9">
            <Row className="align-items-center">
              <Col lg="6">
                <p className="copyright-text gr-text-11 mb-6 mb-lg-0 gr-text-color text-center text-lg-left">
                  © 2020 Copyright, All Right Reserved, Made by Grayic with
                  <i className="icon icon-heart-2-2 text-red align-middle ml-2"></i>
                </p>
              </Col>
              <Col lg="6" className="text-center text-lg-right">
                <ul className="social-icons list-unstyled mb-0">
                  <li className="ml-7">
                    <Link href="/#">
                      <a className="gr-text-color gr-hover-text-red">
                        <i className="icon icon-logo-twitter"></i>
                      </a>
                    </Link>
                  </li>
                  <li className="ml-7">
                    <Link href="/#">
                      <a className="gr-text-color gr-hover-text-red">
                        <i className="icon icon-logo-facebook"></i>
                      </a>
                    </Link>
                  </li>
                  <li className="ml-7">
                    <Link href="/#">
                      <a className="gr-text-color gr-hover-text-red">
                        <i className="icon icon-instant-camera-2"></i>
                      </a>
                    </Link>
                  </li>
                  <li className="ml-7">
                    <Link href="/#">
                      <a className="gr-text-color gr-hover-text-red">
                        <i className="icon icon-logo-linkedin"></i>
                      </a>
                    </Link>
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
