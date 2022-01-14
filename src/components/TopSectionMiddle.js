import { Row, Col, Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import React from "react";
import mansetOne from "../images/manset-one.png"

export default function TopSectionMiddle() {
    return <Col xl={8} lg={9} md={12} className="px-0">
        <Carousel fade>
            <Carousel.Item className="bg-light">
                <Row>
                    <Col sm={5} className="align-self-center">
                        <img className="img-fluid p-4" src={mansetOne} alt="Product one" />
                    </Col>
                    <Col sm={7} className="align-self-center">
                        <div className="text-left">
                            <p className="text-black-30">GARDEN</p>
                            <h1 className="fw-bold pe-5">Barbecue Original Kettle 47cm</h1>
                            <p className="text-muted pb-3 pe-5">De zwarte barbecue Original Kettle van Weber
                                heeft een diameter van 47cm en een verchroomd rooster.</p>
                            <Button variant="primary"
                                className="rounded-0 px-4 p-2 fw-bold">SHOP
                                NOW
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
    </Col>
}