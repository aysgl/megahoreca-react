import React from "react";
import Slider from "react-slick";
import PromotionCard from "./PromotionCard";

export default function Carousel() {
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
                    <PromotionCard/>
                </div>
                <div>
                    <PromotionCard/>
                </div>
                <div>
                    <PromotionCard/>
                </div>
                <div>
                    <PromotionCard/>
                </div>
                <div>
                    <PromotionCard/>
                </div>
                <div>
                    <PromotionCard/>
                </div>
            </Slider>
        </div>
    );
}