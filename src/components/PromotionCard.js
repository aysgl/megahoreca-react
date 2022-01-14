import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card"
import product1 from "../images/product-1.png";

export default function PromotionCard() {
    return <>
        <div data-toggle="modal" data-target="#product-one" className="item">
            <Card className="border-end">
                <Card.Body className="p-0">
                    <div className="p-3 pb-0 mb-0">
                        <p className="text-black-50 mb-1 d-flex align-items-center small">
                            <i style={{ fontSize: "9px" }}
                                className="icon-surface1-44 pe-2" />
                            Computers & Tablets</p>
                        <Card.Title as="h5" className="mb-1 fw-bold">Apple iPad (2018) 32GB</Card.Title>
                        <p className="text-success small mb-0">
                            <i style={{ fontSize: "9px" }}
                                className="icon-Varlk-41 pe-2" />laatste 10
                            stuks
                        </p>
                    </div>
                    <div style={{ height: "250px" }} className="p-2 pt-4 overlay">
                        <img className="img-fluid" src={product1} />
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Row className="d-flex align-items-center">
                        <Col>
                            <h3 className="fw-bold"><span>€499,</span><span className="h6">99</span></h3>
                        </Col>
                        <Col className="text-end">
                            <a className="text-black-30" href="#">
                                <i style={{ fontSize: "18px" }}
                                    className="icon-surface1-41 pe-3" />
                            </a>
                            <a className="text-black-30" href="#">
                                <i className="icon-surface1-36" style={{ fontSize: "20px" }} />
                            </a>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </div>
    </>
}