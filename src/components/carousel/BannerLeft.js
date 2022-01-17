import { Button, Col, Row } from "react-bootstrap";
import mansets from "../../images/mansets.png"
import React from "react";

export default function BannerLeft() {
    return <Col lg={2} md={12} className="d-none d-xl-block">
        <div className="d-flex align-content-between flex-wrap h-100 border p-2">
            <Row className="row">
                <Col xs={8}>
                    <p className="lh-sm mb-3"><span className="fw-light">Aanbevolen</span> Combinaties</p>
                </Col>
                <Col xs={2}>
                    <div style={{ position: "absolute", marginLeft: "-15px" }}>
                        <div className="percent-tag">
                            <div className="percent-tag__content">
                                <small>laatste stuks</small>
                                <p className="h6 pb-0 mb-0">12</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12}>
                    <div className="percent-tag-blue bg-primary d-flex justify-content-center">
                        <div className="percent-tag__content p-2">
                            <div style={{ width: "88px" }} className="bg-white rounded text-end p-1">
                                <span className="fw-light text-black-50 mb-0"><del className="h6">799,99</del></span>
                                <h4 className="fw-bold mb-0 h3 text-primary">
                                    <span className="h6 text-primary pr-1">€</span>
                                    <span>499</span>
                                    <span className="h6">,99</span>
                                </h4>
                            </div>
                            <Button variant="danger" className="px-2 py-1 my-1 btn-sm w-100">DISCOUNT</Button>
                            <p className="h6 pb-0 mb-0">-60%</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <div>
                <img className="img-fluid pb-3" src={mansets} />
            </div>
        </div>
    </Col>
}