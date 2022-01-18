import { useState, useEffect } from "react";
import Slider from "react-slick";
import SlickCard from "./SlickCard";
import axios from "axios";

export default function SlickCarousel({ api }) {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios.get(api).then((response) => {
            setProducts(response.data);
        });
    }, []);

    if (!products) return null;
    const settings = {
        infinite: true,
        speed: 2000,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        centerPadding: 10,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <Slider {...settings}>
            {products.map((pro, i) =>
                <SlickCard key={i} photo={pro.id} price={pro.id} category={pro.name} id={pro.id} title={pro.name} api={api} stock={pro.id == 2 || pro.id == 5 || pro.id == 6} stars={pro.id == 3 || pro.id == 8 || pro.id == 9} badge={pro.id == 4 || pro.id == 7 || pro.id == 1} />
            )}
        </Slider>
    );
}