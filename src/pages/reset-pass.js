import React from "react";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

import imgLogo from "../assets/image/logo-main-black.png";

const ResetPass = () => {
  return (
    <>
      <PageWrapper>
        <div className="sign-in bg-default-2">
          <header className="site-header bg-white">
            <Container fluid>
              <div className="row justify-content-center">
                <div className="col-md-8 col-lg-5 col-xl-4">
                  <div className="brand text-center py-9">
                    <Link href="/">
                      <a>
                        <img src={imgLogo} alt="" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </header>
          <Container>
            <Row className="justify-content-center">
              <Col md="12">
                <div className="main-block pt-25">
                  <div className="form-title text-center">
                    <h2 className="title gr-text-2 mb-9">Reset Password</h2>
                    <p className="gr-text-8 mb-13">
                      Enter your email to get reset link
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="7" lg="5" xl="4">
                <div className="main-block pb-25">
                  <div className="login-form bg-white border rounded-10 px-8 pt-8 pb-9 shadow-1 mb-11">
                    <form action="./">
                      <div className="form-group mb-8">
                        <label
                          htmlFor="email"
                          className="gr-text-11 font-weight-bold text-blackish-blue"
                        >
                          Email
                        </label>
                        <input
                          className="form-control gr-text-11 border"
                          type="email"
                          id="email"
                          placeholder="i.e. john@mail.com"
                        />
                      </div>
                      <div className="button-block mt-3 ">
                        <button className="form-btn btn btn-primary w-100">
                          Send Reset Link
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="form-bottom excerpt text-center">
                    <p className="sign-up-text gr-text-9 gr-text-color">
                      Rememered the password?
                      <Link href="/signin">
                        <a className="text-primary">Sign in now</a>
                      </Link>
                    </p>
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
export default ResetPass;
