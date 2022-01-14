import Container from "react-bootstrap/Container"
import PreviouslyWatchedItem from "./PreviouslyWatchedItem";
import React from "react";
import Slider from "react-slick";
export default function PreviouslyWatchedSection() {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1
    }
    return  <Container className="py-5 pr-0 pl-4 pl-md-0">
        <h4 className="text-uppercase text-center title pb-3">Eerder Bekeken Door Jou</h4>
        <div className="shadow rounded main-content">
        <Slider {...settings}>
            <PreviouslyWatchedItem/>
            <PreviouslyWatchedItem/>
            <PreviouslyWatchedItem/>
            <PreviouslyWatchedItem/>
            <PreviouslyWatchedItem/>
            <PreviouslyWatchedItem/>
            <PreviouslyWatchedItem/>
            <PreviouslyWatchedItem/>
            <PreviouslyWatchedItem/>
            <PreviouslyWatchedItem/>
            <PreviouslyWatchedItem/>
            <PreviouslyWatchedItem/>
            <PreviouslyWatchedItem/>
        </Slider>
        </div>
    </Container>
}