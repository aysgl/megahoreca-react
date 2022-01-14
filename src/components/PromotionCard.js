import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card"
import product1 from "../images/product-1.png";

export default function PromotionCard() {
    return <>
        <div data-toggle="modal" data-target="#product-one" className="item text-center">
            <Card className="vertical-hr">
                <div className="p-3 pb-0 mb-0 text-left">
                    <p className="text-black-30 mb-1"><small><i style={{fontSize: "9px"}}
                                                                className="icon-surface1-44 pr-2"/>Computers &
                        Tablets</small></p>
                    <Card.Title className="mb-1">Apple iPad (2018) 32GB</Card.Title>
                    <p className="text-success mb-0"><small><i style={{fontSize: "9px"}}
                                                               className="icon-Varlk-41 pr-2"/>laatste 10
                        stuks</small></p>
                </div>
                <div style={{height: "250px"}} className="p-2 pt-4 overlay">
                    <img className="img-fluid" src={product1}/>
                </div>
                <Card.Footer>
                    <Row>
                        <Col className="text-left align-self-center">
                            <h3 className="font-weight-bold"><span>€499,</span><span className="h6">99</span></h3>
                        </Col>
                        <Col className="text-right align-self-center">
                            <a className="text-black-30" href="#"><i style={{fontSize: "18px"}}
                                                                     className="icon-surface1-41 pr-3"/></a><a
                            className="text-black-30" href="#"><i
                            className="icon-surface1-36" style={{fontSize: "20px"}}/></a>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </div>
    </>
}