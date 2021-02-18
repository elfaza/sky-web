import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

const TermsConditions = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }}
      >
        <div className="inner-banner pt-29 pb-6">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9" md="11">
                <div className="px-xl-15 px-lg-8 text-center">
                  <h2 className="title gr-text-2 mb-9">
                    Terms &amp; Conditions
                  </h2>
                  <p className="gr-text-8 mb-13">
                    By accessing and placing an order with UXTheme, you confirm
                    that you are in agreement with and bound by the terms and
                    conditions
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="main-block pb-21">
          <Container>
            <Row className="justify-content-center">
              <Col lg="10" xl="8">
                <div className="px-lg-8 px-xl-3">
                  <div className="single-block mb-11">
                    <p className="gr-text-9">
                      By accessing and placing an order with UXTheme, you
                      confirm that you are in agreement with and bound by the
                      terms and conditions contained in the Terms Of Use
                      outlined below. These terms apply to the entire website
                      and any email or other type of communication between you
                      and UXTheme. Under no circumstances shall UXTheme team be
                      liable for any direct, indirect, special, incidental or
                      consequential damages, including, but not limited to, loss
                      of data or profit, arising out of the use, or the
                      inability to use, the materials on this site, even if
                      UXTheme team or an authorized representative has been
                      advised of the possibility of such damages. If your use of
                      materials from this site results in the need for
                      servicing, repair or correction of equipment or data, you
                      assume any costs thereof. UXTheme will not be responsible
                      for any outcome that may occur during the course of usage
                      of our resources.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">License</h3>
                    <p className="gr-text-9">
                      By purchasing or downloading resource (“item” or “file”)
                      you are being granted a license to use these files for
                      specific uses under certain conditions. Ownership remains
                      with UXTheme, and you are required to abide by the
                      following licensing terms.
                    </p>
                  </div>
                  <div className="single-block mb-13">
                    <h3 className="gr-text-8 font-weight-bold">Security</h3>
                    <ul className="list-unstyled">
                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        You have rights for royalty free use of our resources
                        for any or all of your personal.
                      </li>
                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        You are not required to attribute or link to UXTheme in
                        any of projects.
                      </li>
                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        We reserve the rights to change prices and revise the
                        resources usage policy in any moment.
                      </li>
                    </ul>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-5">
                      Embedded content from other websites
                    </h3>
                    <p className="gr-text-9 pb-5">
                      Articles on this site may include embedded content (e.g.
                      videos, images, articles, etc.). Embedded content from
                      other websites behaves in the exact same way as if the
                      visitor has visited the other website.
                    </p>
                    <p className="gr-text-9">
                      These websites may collect data about you, use cookies,
                      embed additional third-party tracking, and monitor your
                      interaction with that embedded content, including tracking
                      your interaction with the embedded content if you have an
                      account and are logged in to that website.
                    </p>
                  </div>
                  <div className="single-block pb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-5">
                      Changes about terms
                    </h3>
                    <p className="gr-text-9 pb-5 mb-0">
                      If we change our terms of use we will post those changes
                      on this page. Registered users will be sent an email that
                      outlines changes made to the terms of use.
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
export default TermsConditions;
