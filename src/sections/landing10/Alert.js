import React, { useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";

const Alert = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Alert Area --> */}
      <div className="alert-section py-9 bg-blackish-blue dark-mode-texts ">
        <Container>
          <Row className="justify-content-center">
            <Col xl="7" lg="8" md="10" sm="9" xs="10">
              <div className="alert-content d-flex flex-column flex-lg-row align-items-center justify-content-lg-center text-center">
                <span className="d-inline-flex mr-2 gr-text-color">
                  <i className="far fa-play-circle gr-text-9"></i>
                </span>
                <span className="alert-text gr-text-9 gr-text-color">
                  Interested how our software works for you?{" "}
                  <a
                    href="/#"
                    onClick={(e) => {
                      e.preventDefault();
                      gContext.toggleVideoModal();
                    }}
                    className="action-link gr-text-color gr-text-underline"
                  >
                    Watch our 1 minute video
                  </a>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Alert;
