import React from "react";
import SlickCarousel from "./SlickCarousel";

export default function PromotionSection() {
    return <div className="container pb-4 pt-4 pr-0 ps-4 pl-md-0">
        <p className="text-uppercase text-center pb-3 title">PROMOTIES VAN DE WEEK</p>
        <SlickCarousel />
    </div>
}