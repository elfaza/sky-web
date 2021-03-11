import React, { useContext, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from "react-slick";

import { breakpoints } from "../../utils";
import GlobalContext from "../../context/GlobalContext";

const Products = ({ handleActiveShow }) => {
    const gContext = useContext(GlobalContext);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: breakpoints.md,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    swipeToSlide: false,
                },
            },
            {
                breakpoint: breakpoints.sm,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    swipeToSlide: false,
                },
            },
        ],
    };

    return (
        <Slider {...settings} className="product-details-v-slider">
            <div
                className="single-slide focus-reset"
                role="button"
                tabIndex={0}
                onClick={() => handleActiveShow(gContext.activeCommunity.data.cover_image_url.url)}
                onKeyDown={() => handleActiveShow(gContext.activeCommunity.data.cover_image_url.url)}
                css={`cursor: pointer;`}
            >
                <img src={gContext.activeCommunity.data.cover_image_url.url} alt="" />
            </div>
            {gContext.activeCommunity.data.photos.map((photo, index) =>
                <div
                    key={index}
                    className="single-slide focus-reset"
                    role="button"
                    tabIndex={0}
                    onClick={() => handleActiveShow(photo.photo.url)}
                    onKeyDown={() => handleActiveShow(photo.photo.url)}
                    css={` cursor: pointer;`}
                >
                    <img src={photo.photo.url} alt="" />
                </div>
            )}
        </Slider>
    );
};

const Showcase = () => {
    const gContext = useContext(GlobalContext);
    const [activeImg, setActiveImg] = useState(gContext.activeCommunity.data.cover_image_url.url);

    console.log(gContext.activeCommunity)

    return (
        <>
            {/* <section className="pt-9 pb-9 pr-9 pl-9 bg-default">
                <Container>
                    <Row>
                        <Col xl="7" lg="6">
                            <Row>
                                <Col
                                    xl="2"
                                    lg="3"
                                    md="2"
                                    className="order-md-1 order-2 mt-7 mt-md-0 mt-7"
                                >
                                    <Products handleActiveShow={setActiveImg} />
                                </Col>
                                <Col xl="10" lg="9" md="7" className="order-md-2 order-1">
                                    <div className="product-details-slider">
                                        <div className="single-slide">
                                            <img src={activeImg} alt="" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl="5" md="7" className="ml-n1 mt-12 mt-md-0">
                            <div className="pl-lg-12">
                                <h3 className="gr-text-4 pt-5 font-weight-bold">
                                    {gContext.activeCommunity.data.name}
                                </h3>
                                <ul className="list-unstyled">
                                    <li className="mt-3 gr-text-11 gr-text-color">
                                        <i
                                            className="rounded-circle bg-opposite d-inline-block mr-5"
                                            css={`
                                                width: 9px;
                                                height: 9px;
                                            `}
                                        ></i>
                                            Active noise cancellation for immersive sound
                                        </li>
                                    <li className="mt-3 gr-text-11 gr-text-color">
                                        <i
                                            className="rounded-circle bg-opposite d-inline-block mr-5"
                                            css={`
                                                width: 9px;
                                                height: 9px;
                                            `}
                                        ></i>
                                            Transparency mode for hearing and connecting
                                        </li>
                                    <li className="mt-3 gr-text-11 gr-text-color">
                                        <i
                                            className="rounded-circle bg-opposite d-inline-block mr-5"
                                            css={`
                                                width: 9px;
                                                height: 9px;
                                            `}
                                        ></i>
                                            Three sizes of soft, tapered silicone tips
                                        </li>
                                </ul>
                                <div className="mt-9">
                                    <a href={gContext.activeCommunity.data.info_url.url} target="_blank"><Button className=" mr-5">More Info</Button></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
        </>
    );
};

export default Showcase;
