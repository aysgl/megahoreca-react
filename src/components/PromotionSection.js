import React from "react";
import PromotionCard from "./PromotionCard";
import Carousel from "./Carousel";
import ModalComponent from "./ModalComponent";

export default function PromotionSection() {
    return <div className="container pb-4 pt-4 pr-0 ps-4 pl-md-0">
        <h4 className="text-uppercase text-center title pb-3">PROMOTIES VAN DE WEEK</h4>
        <Carousel />
    </div>
}