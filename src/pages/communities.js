import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { Row, Col, Container } from "react-bootstrap";
import Prismic from '@prismicio/client';
import Fuse from 'fuse.js';

import PageWrapper from "../components/PageWrapper";
import Link from "next/link";
import apiService from "../utils/apiService";

import emptyIcon from "../assets/image/empty_data.svg"

const Communities = () => {
    const gContext = useContext(GlobalContext);
    const [communities, setCommunity] = useState([]);
    const [search, setSearch] = useState("");

    const getCommunity = async () => {
        apiService.query(
            Prismic.Predicates.at('document.type', 'community'),
            { pageSize: 100, orderings: '[my.community.name]' }
        ).then(response => {
            setCommunity(response.results);
        })
    }

    const filteredCommunities = () => {
        const options = {
            threshold: 0.5,
            keys: ['data.name']
        }

        const fuse = new Fuse(communities, options)

        const results = fuse.search(search).map(result => ({
            ...result.item,
        }))

        return search !== "" ? results : communities;
    }

    useEffect(() => {
        getCommunity()
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
                            <div className="px-md-12 mb-13 text-center">
                                <h2 className="title gr-text-2 mb-8 mb-lg-12">
                                    All Communities
                                </h2>
                                <p className="gr-text-8 mb-0">
                                    Taat Bahagia Maksiat Sengasara
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
                                        placeholder="Search Community"
                                        value={search}
                                        onChange={event => setSearch(event.target.value)}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        {filteredCommunities().map(community => {
                            return (
                                <Col
                                    key={community.id}
                                    xs="10"
                                    sm="6"
                                    lg="3"
                                    className="mb-9"
                                    data-aos="fade-left"
                                    data-aos-duration="500"
                                >
                                    <div className="rounded-10 border border-gray-3 gr-hover-shadow-1">
                                        <img
                                            src={community.data.logo_url.url}
                                            className="card-img-top rounded-top-10"
                                            alt={community.data.name}
                                        />
                                        <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                                            <Link href="#">
                                                <a className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0" onClick={e => {
                                                    e.preventDefault();
                                                    gContext.toggleCommunityModal();
                                                    gContext.setActiveCommunity(community);
                                                }}>
                                                    {community.data.name}{" "}
                                                    <i className="icon icon-tail-right font-weight-bold"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            );
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
export default Communities;
