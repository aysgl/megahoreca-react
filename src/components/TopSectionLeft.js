import {Button, Col, Row} from "react-bootstrap";
import mansets from "../images/mansets.png"
import React from "react";

export default function TopSectionLeft() {
    return  <Col lg={2} md={12} className="d-none d-xl-block">
        <div className="d-flex align-content-between flex-wrap h-100 border p-2">
            <Row className="row">
                <Col xs={8}>
                    <h4>
                        <span className="font-weight-light">Aanbevolen</span> Combinaties
                    </h4>
                </Col>
                <Col xs={2}>
                    <div style={{position: "absolute", marginLeft: "-15px"}}>
                        <div className="percent-tag">
                            <div className="percent-tag__content">
                                <small>laatste stuks</small>
                                <p className="h6 pb-0 mb-0">12</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12}>
                    <div className="percent-tag-blue bg-primary">
                        <div className="percent-tag__content">
                            <div style={{width: "88px" }} className="bg-white rounded text-right p-2">
                                <span className="font-weight-bold text-black-30"><del>799,99</del></span>
                                <h4 className="font-weight-bold mb-0 h3 text-primary"><span
                                    className="h6 text-primary pr-1">€</span><span>499,</span><span
                                    className="h6">99</span></h4>
                            </div>
                            <Button variant="danger" className="py-0 my-1">DISCOUNT</Button>
                            <p className="h6 pb-0 mb-0">-60%</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <div>
                <img className="img-fluid pb-3" src={mansets}/>
            </div>
        </div>
    </Col>
}