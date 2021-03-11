import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { Row, Col, Container } from "react-bootstrap";
import Prismic from '@prismicio/client';

import PageWrapper from "../components/PageWrapper";
import Link from "next/link";
import apiService from "../utils/apiService";

const Events = () => {
    const gContext = useContext(GlobalContext);
    const [events, setEvent] = useState([]);

    const getEvent = async () => {
        apiService.query(
            Prismic.Predicates.at('document.type', 'event'),
            { pageSize: 100 }
        ).then(response => {
            setEvent(response.results)
        })
    }

    useEffect(() => {
        getEvent()
    }, [])

    const headerConfig = {
        align: "right",
    };

    return (
        <PageWrapper
            headerConfig={headerConfig}
        >
            <div className="inner-banner bg-default-6 pt-24 pt-lg-30 pb-lg-15">
                <Container>
                    <Row className="justify-content-center pt-5">
                        <Col xl="8" lg="9">
                            <div className="section-title text-center mb-11 mb-lg-19">
                                <h2 className="title gr-text-4 mb-7">All Events</h2>
                                <p className="gr-text-8 px-lg-8 mb-0">
                                    With lots of unique blocks, you can easily build a page easily
                                    without any coding.{" "}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="service-section bg-default-2 pt-12 pb-7 pb-lg-25 pt-lg-19">
                <Container>
                    <Row className="justify-content-center">
                        {events.map(event => {
                            return (
                                <Col key={event.id} md="6" lg="4" data-aos="fade-right" data-aos-duration="1000">
                                    <div className="location-card mb-9 gr-hover-scale-img">
                                        <a className="card-img" href={event.data.action_url.url} target="_blank">
                                            <img src={event.data.thumbnail.url} alt="" className="w-100 rounded-10" />
                                        </a>
                                        <div className="card-content px-5 pt-9 text-center">
                                            <Link href="/">
                                                <a>
                                                    <h3 className="title gr-text-6 mb-2">{event.data.title[0].text}</h3>
                                                </a>
                                            </Link>
                                            <p className="gr-text-11 mb-0 d-inline-block gr-text-color-opacity">
                                                37 seats
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </PageWrapper>
    );
};
export default Events;
