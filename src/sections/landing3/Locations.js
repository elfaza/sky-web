import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import apiService from "../../utils/apiService";
import Prismic from '@prismicio/client';

const Locations = () => {
    const [events, setEvent] = useState([]);
    const [showMore, setShowMore] = useState(false);

    const getEvent = async () => {
        apiService.query(
            Prismic.Predicates.at('document.type', 'event'),
        ).then(response => {
            setEvent(response.results.slice(0, 3))
            setShowMore(response.results.length > 3);
        })
    }

    useEffect(() => {
        getEvent()
    }, [])

    return (
        <>
            {/* <!-- Locations section --> */}
            <div className="location-section bg-default-4 pt-14 pb-7 py-lg-23">
                <Container>
                    <Row className="justify-content-center">
                        <Col xl="6" lg="7" md="9">
                            <div className="section-title text-center mb-11 mb-lg-19">
                                <h2 className="title gr-text-4 mb-7">Our Events</h2>
                                <p className="gr-text-8 px-lg-8 mb-0">
                                    With lots of unique blocks, you can easily build a page easily
                                    without any coding.{" "}
                                </p>
                            </div>
                        </Col>
                    </Row>
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
                        {showMore &&
                            <Col lg="12">
                                <div className="more-btn case-btn text-center">
                                    <Link href="/">
                                        <a className="btn-link with-icon mb-0 gr-text-7 font-weight-bold">
                                            See all events
                                        <i className="icon icon-tail-right font-weight-bold"></i>
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Locations;
