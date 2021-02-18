import React from "react";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

const JobOpenings = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }}
      >
        <div className="inner-banner pt-29 pt-lg-30 pb-9 pb-lg-12 bg-default-6">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-8 mb-lg-10">
                    Full Stack Developer
                  </h2>
                  <p className="gr-text-7 mb-0 mb-lg-13">Full Time, Remote</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="main-block pb-6 pb-lg-17 bg-default-6">
          <Container>
            <Row className="justify-content-center">
              <Col xl="8" lg="9">
                <div className="single-block mb-12 mb-lg-15">
                  <p className="gr-text-9 mb-9">
                    Headquartered in Melbourne, Australia, Envato is a
                    completely online company with an ecosystem of sites and
                    services to help people get creative. We’ve consistently
                    been named as one of the Best Places to Work in Australia,
                    since 2015, in the BRW Awards, and we’ve also been awarded
                    the title of Australia's Coolest Company for Women and
                    Diversity by JobAdvisor.
                  </p>
                  <p className="gr-text-9 mb-9">
                    Envato was found in 2006 and, since then, we’ve helped a
                    community of creative sellers earn more than $500 Million.
                    Millions of people around the world choose our marketplace,
                    studio and courses to buy files, hire freelancers, or learn
                    the skills needed to build websites, videos, apps, graphics
                    and more. Find out more at Envato Market, Envato Elements,
                    Envato Sites, Envato Studio and Tuts+.
                  </p>
                  <p className="gr-text-9 mb-0">
                    You might be surprised to know that not only do we run some
                    of the biggest websites in the world; we’re also growing
                    really fast! We have close to 600 staff and contractors
                    worldwide, adding more than 100 people to the business, year
                    on year, since 2017.
                  </p>
                </div>
                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 font-weight-bold mb-9">
                    What you’ll be doing
                  </h3>
                  <p className="gr-text-9 mb-0">
                    A Senior Data Engineer provides technical and delivery
                    leadership for a team of developers working on data
                    integration and processing projects. This role will work
                    with stakeholders and other developers to design and
                    implement technical data solutions for the business in a way
                    that balances quality, cost, time and maintainability.
                  </p>
                </div>
                <div className="single-block mb-12 mb-lg-14">
                  <h3 className="gr-text-6 font-weight-bold pb-3">
                    Skills &amp; Qualifications
                  </h3>
                  <ul className="list-unstyled">
                    <li className="mt-7 gr-text-9">
                      <i
                        className="rounded-circle bg-opposite d-inline-block mr-5"
                        css={`
                          width: 9px;
                          height: 9px;
                        `}
                      ></i>
                      Business Intelligence solutions
                    </li>
                    <li className="mt-7 gr-text-9">
                      <i
                        className="rounded-circle bg-opposite d-inline-block mr-5"
                        css={`
                          width: 9px;
                          height: 9px;
                        `}
                      ></i>
                      Cloud computing platforms (AWS)
                    </li>
                    <li className="mt-7 gr-text-9">
                      <i
                        className="rounded-circle bg-opposite d-inline-block mr-5"
                        css={`
                          width: 9px;
                          height: 9px;
                        `}
                      ></i>
                      Relevant server-side programming languages (C# .NET)
                    </li>
                    <li className="mt-7 gr-text-9">
                      <i
                        className="rounded-circle bg-opposite d-inline-block mr-5"
                        css={`
                          width: 9px;
                          height: 9px;
                        `}
                      ></i>
                      SQL and NoSQL database solutions (AWS Redshift and AWS
                      DynamoDB)
                    </li>
                    <li className="mt-7 gr-text-9">
                      <i
                        className="rounded-circle bg-opposite d-inline-block mr-5"
                        css={`
                          width: 9px;
                          height: 9px;
                        `}
                      ></i>
                      Big data processing frameworks and concepts
                    </li>
                    <li className="mt-7 gr-text-9">
                      <i
                        className="rounded-circle bg-opposite d-inline-block mr-5"
                        css={`
                          width: 9px;
                          height: 9px;
                        `}
                      ></i>{" "}
                      DevOps practices
                    </li>
                    <li className="mt-7 gr-text-9">
                      <i
                        className="rounded-circle bg-opposite d-inline-block mr-5"
                        css={`
                          width: 9px;
                          height: 9px;
                        `}
                      ></i>
                      Serverless Architecture
                    </li>
                    <li className="mt-7 gr-text-9">
                      <i
                        className="rounded-circle bg-opposite d-inline-block mr-5"
                        css={`
                          width: 9px;
                          height: 9px;
                        `}
                      ></i>
                      *NIX operating systems
                    </li>
                    <li className="mt-7 gr-text-9">
                      <i
                        className="rounded-circle bg-opposite d-inline-block mr-5"
                        css={`
                          width: 9px;
                          height: 9px;
                        `}
                      ></i>
                      Demonstrates ability to communicate effectively with the
                      rest of the team
                    </li>
                  </ul>
                </div>
                <div className="single-block mb-12 mb-lg-15">
                  <h3 className="gr-text-6 font-weight-bold mb-9">
                    How to apply
                  </h3>
                  <p className="gr-text-9 mb-9">
                    A Senior Data Engineer provides technical and delivery
                    leadership for a team of developers working on data
                    integration and processing projects. This role will work
                    with stakeholders and other developers to design and
                    implement technical data solutions for the business in a way
                    that balances quality, cost, time and maintainability.
                  </p>
                  <Link href="/">
                    <a className="btn btn-primary mt-3 mt-lg-10">
                      Apply for this job
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default JobOpenings;
