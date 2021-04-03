import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Prismic from '@prismicio/client';
import Fuse from 'fuse.js';

import PageWrapper from "../components/PageWrapper";
import Link from "next/link";
import apiService from "../utils/apiService";

import emptyIcon from "../assets/image/empty_data.svg";

const Events = () => {
    const [events, setEvent] = useState([]);
    const [search, setSearch] = useState("");

    const getEvent = async () => {
        apiService.query(
            Prismic.Predicates.at('document.type', 'event'),
            { pageSize: 100 }
        ).then(response => {
            setEvent(response.results)
        })
    }

    const filteredEvents = () => {
        const options = {
            threshold: 0.5,
            keys: ['data.name']
        }

        const fuse = new Fuse(events, options)

        const results = fuse.search(search).map(result => ({
            ...result.item,
        }))

        return search !== "" ? results : events;
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
                        <Col xs={10} md={6}>
                            <div className="w-100 mb-7">
                                <div className="form-group mb-0 min-height-px-50">
                                    <input
                                        className="form-control gr-text-9 border h-100"
                                        type="text"
                                        id="keyword"
                                        placeholder="Search Event"
                                        value={search}
                                        onChange={event => setSearch(event.target.value)}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        {filteredEvents().map(event => {
                            return (
                                <Col key={event.id} md="6" lg="4" data-aos="fade-right" data-aos-duration="1000">
                                    <div className="mb-9 gr-hover-scale-img">
                                        <a className="card-img" href={event.data.action_url.url} target="_blank">
                                            <img src={event.data.thumbnail.url} alt="" className="w-100 rounded-10" />
                                        </a>
                                        <div className="card-content px-5 pt-9 text-center">
                                            <a href={event.data.action_url.url} target="_blank">
                                                <h3 className="title gr-text-6 mb-2">{event.data.title[0].text}</h3>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}

                        {filteredEvents().length <= 0 &&
                            <div className="empty-state-container">
                                <div className="empty-state">
                                    <div className="icon-container">
                                        <img src={emptyIcon} />
                                    </div>
                                    <p className="text">No data found</p>
                                </div>
                            </div>
                        }
                    </Row>
                </Container>
            </div>
        </PageWrapper>
    );
};
export default Events;
