import React from "react";
import Slider from "react-slick";
import SlickCard from "./SlickCard";

export default function SlickCarousel() {
    const settings = {
        infinite: true,
        speed: 250,
        slidesToShow: 5,
        slidesToScroll: 1
    }
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <SlickCard />
                </div>
                <div>
                    <SlickCard />
                </div>
                <div>
                    <SlickCard />
                </div>
                <div>
                    <SlickCard />
                </div>
                <div>
                    <SlickCard />
                </div>
                <div>
                    <SlickCard />
                </div>
            </Slider>
        </div>
    );
}