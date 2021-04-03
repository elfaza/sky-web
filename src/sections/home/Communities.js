import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Prismic from '@prismicio/client';
import useMobileDetect from 'use-mobile-detect-hook';

import apiService from "../../utils/apiService";

const Communities = () => {
    const detectMobile = useMobileDetect();
    const [communities, setCommunity] = useState([]);
    const [showMore, setShowMore] = useState(false);

    const getCommunity = async totalResult => {
        apiService.query(
            Prismic.Predicates.at('document.type', 'community'),
            { orderings: '[my.community.name]' }
        ).then(response => {
            setCommunity(response.results.slice(0, totalResult));
            setShowMore(response.results.length > totalResult);
        })
    }

    useEffect(() => {
        let totalResult = 8;

        if (detectMobile.isMobile()) {
            totalResult = 3;
        }

        getCommunity(totalResult)

    }, [])

    return (
        <div className="service-section bg-default-2 pt-12 pb-7 pb-lg-25 pt-lg-19">
            <Container>
                <Row className="justify-content-center">
                    <Col xl="6" lg="8" sm="10">
                        <div className="section-title text-center mb-11 mb-lg-20">
                            <h2 className="title gr-text-4 mb-7">
                                Communities
                                </h2>
                            <p className="gr-text-8 px-lg-7 px-xl-0">
                                Ayo gabung bareng di komunitas YukNgaji yang ada di kota kamu dan temukan teman-teman hijrah lain nya yang ada di komunitas berbagi kebaikan se Indonesia!
                                #TambahIlmu&Sahabat
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    {communities.map(community => {
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
                                <div className="service-card rounded-10 border border-gray-3 gr-hover-shadow-1">
                                    <img
                                        src={community.data.logo_url.url}
                                        className="card-img-top rounded-top-10"
                                        alt={community.data.name}
                                    />
                                    <div className="card-body bg-white rounded-bottom-10 px-7 py-6">
                                        <a
                                            className="card-title gr-text-9 text-blackish-blue card-btn-link with-icon mb-0"
                                            href={community.data.info_url.url}
                                            target="_blank"
                                        // onClick={e => {
                                        //     e.preventDefault();
                                        //     gContext.toggleCommunityModal();
                                        //     gContext.setActiveCommunity(community);
                                        // }}
                                        >
                                            {community.data.name}{" "}
                                            <i className="icon icon-tail-right font-weight-bold"></i>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                    {showMore &&
                        <Col lg="12">
                            <div className="more-btn case-btn text-center">
                                <Link href="/communities">
                                    <a className="btn-link with-icon mb-0 gr-text-7 font-weight-bold">
                                        See all communities
                                    <i className="icon icon-tail-right font-weight-bold"></i>
                                    </a>
                                </Link>
                            </div>
                        </Col>
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Communities;
