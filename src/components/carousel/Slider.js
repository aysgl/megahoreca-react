import { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import mansetOne from "../../images/manset-one.png"
import axios from "axios"

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Slider() {
    const [slider, setSlider] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setSlider(response.data);
        });
    }, []);

    if (!slider) return null;

    return <Col xl={8} lg={9} md={12} className="px-0">
        <Carousel fade>
            {slider.map((slide, i) =>
                <Carousel.Item key={i} className="bg-light rounded" interval={2000}>
                    <Row>
                        <Col className="align-self-center">
                            <img className="img-fluid rounded" src={`https://picsum.photos/id/${i}/250/500`} alt="Product one" />
                        </Col>

                        <Col md={8} className="align-self-center pe-5">
                            <div>
                                <p className="text-black-30">{slide.id}# GARDEN</p>
                                <h1 className="fw-bold pe-5">{slide.title}</h1>
                                <p className="text-muted pb-3 pe-5">{slide.body}</p>
                                <Button variant="primary"
                                    className="rounded-0 px-4 p-2 fw-bold">SHOP
                                    NOW
                                </Button>
                            </div>
                        </Col>

                    </Row>
                </Carousel.Item>
            )}
        </Carousel>
    </Col>
}