import { Container, Row } from "react-bootstrap";
import React from "react";
import BannerLeft from "./BannerLeft";
import Slider from "./Slider";
import BannerRight from "./BannerRight";

export default function CarouselSection() {
    return <Container className="mt-3 mb-5">
        <Row>
            <BannerLeft />
            <Slider />
            <BannerRight />
        </Row>
    </Container>


}