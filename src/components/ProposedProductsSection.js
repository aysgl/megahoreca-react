import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
import React from "react";
import product6 from "../images/product-6.png"
import product7 from "../images/product-7.png"
import product8 from "../images/product-8.png"
import product9 from "../images/product-9.png"

export default function ProposedProductsSection() {
    return <div className="d-none d-md-block d-lg-none d-lg-block d-xl-none d-xl-block">
        <Container className="py-4 px-0 d-flex">
            <Row>
                <Col sm={6} className="d-flex align-self-stretch pr-0">
                    <div className="shadow rounded">
                        <Row className="h-100">
                            <Col className="d-flex align-content-between flex-wrap text-left">
                                <Card.Body>
                                    <p className="text-black-30 mb-1"><small><i style={{fontSize: "9px"}}
                                                                                className="icon-surface1-44 pr-2"/>Computers
                                        & Tablets</small></p>
                                    <h3 className="h4 mb-1">Samsung WW80M642OBW QuickDrive</h3>
                                    <p className="text-secondary"><small><i
                                        className="icon-surface1-51 text-primary"/><i
                                        className="icon-surface1-51 text-primary"/><i
                                        className="icon-surface1-51 text-primary"/><i
                                        className="icon-surface1-51 text-primary"/><i
                                        className="icon-surface1-51 text-primary pr-2"/>2324</small></p>

                                    <a className="btn-arrow font-weight-bold">100 Dagen op proef</a>

                                </Card.Body>
                                <Card.Footer className="mb-0">
                                    <h3 className="font-weight-bold"><span>€499,</span><span className="h6">99</span>
                                    </h3>
                                    <a className="text-black-30" href="#"><i
                                        className="icon-surface1-41 pr-3"/></a><a
                                    className="text-black-30" href="#"><i className="icon-surface1-36"
                                                                          style={{fontSize: "20px"}}/></a>
                                </Card.Footer>
                            </Col>
                            <Col className="align-self-center">
                                <img className="img-fluid" height="100%" src={product6}
                                     alt="Apple iPad 2018 32GB"/>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col sm={3} className="d-flex align-self-stretch pr-0">
                    <div className="shadow rounded d-flex align-content-between flex-wrap text-left">
                        <Card.Body>
                            <p className="text-black-30 mb-1"><small><i style={{fontSize: "9px"}}
                                                                        className="icon-surface1-44 pr-2"/>Reizen &
                                Fashion</small></p>
                            <h4 className="card-title mb-1">SININ No. 3 Blue 77cm</h4>
                            <p className="text-secondary mb-0"><small><i
                                className="icon-surface1-51 text-primary"/><i
                                className="icon-surface1-51 text-primary"/><i
                                className="icon-surface1-51 text-primary"/><i
                                className="icon-surface1-51 text-primary"/><i
                                className="icon-surface1-52 text-primary pr-2"/>532</small></p>
                        </Card.Body>
                        <img className="img-fluid pl-4" src={product7} alt="Apple iPad 2018 32GB"/>
                            <Card.Footer className="w-100">
                                <Row>
                                    <Col>
                                        <h3 className="font-weight-bold"><span>€499,</span><span
                                            className="h6">99</span></h3>
                                    </Col>
                                    <Col className="pt-2 text-right">
                                        <a className="text-black-30" href="#"><i className="icon-surface1-41 pr-3"/></a><a
                                        className="text-black-30" href="#"><i className="icon-surface1-36"
                                                                              style={{fontSize: "20px"}}/></a>
                                    </Col>
                                </Row>
                            </Card.Footer>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className="w-100 h-100">
                        <ul className="list-unstyled h-100">
                            <li className="shadow rounded h-50">
                                <div className="h-100 d-flex align-content-between flex-wrap text-left">
                                    <Card.Body>
                                        <p className="text-black-30 mb-1"><small><i style={{fontSize: "9px"}}
                                                                                    className="icon-surface1-44 pr-2"/>Huishouden
                                            & Wonen</small></p>
                                        <h4 className="mb-1">Ruitenreiniger WV1 Plus</h4>
                                        <p className="text-secondary"><small><i
                                            className="icon-surface1-51 text-primary"/><i
                                            className="icon-surface1-51 text-primary"/><i
                                            className="icon-surface1-51 text-primary"/><i
                                            className="icon-surface1-51 text-primary"/><i
                                            className="icon-surface1-51 text-primary pr-2"/>432</small></p>
                                    </Card.Body>

                                    <Card.Footer>
                                        <h3 className="font-weight-bold"><span>€499,</span><span
                                            className="h6">99</span></h3>
                                        <a className="text-black-30" href="#"><i className="icon-surface1-41 pr-3"/></a><a
                                        className="text-black-30" href="#"><i className="icon-surface1-36"
                                                                              style={{fontSize: "20px"}}/></a>
                                    </Card.Footer>
                                    <img style={{position: "absolute", right: "0px", height: "200px", top: "20px"}}
                                         className="img-fluid pr-3" src={product8} alt="Apple iPad 2018 32GB"/>
                                </div>
                            </li>
                            <li className="shadow rounded h-50">
                                <div className="h-100 d-flex align-content-between flex-wrap text-left">
                                    <Card.Body>
                                        <p className="text-black-30 mb-1"><small><i style={{fontSize: "9px"}}
                                                                                    className="icon-surface1-44 pr-2"/>Huishouden
                                            & Wonen</small></p>
                                        <h4 className="mb-1">Ruitenreiniger WV1 Plus</h4>
                                        <p className="text-secondary"><small><i
                                            className="icon-surface1-51 text-primary"/><i
                                            className="icon-surface1-51 text-primary"/><i
                                            className="icon-surface1-51 text-primary"/><i
                                            className="icon-surface1-51 text-primary"/><i
                                            className="icon-surface1-51 text-primary pr-2"/>432</small></p>
                                    </Card.Body>
                                    <div style={{position: "absolute", right: "0", bottom: "0px"}} className="pr-3">
                                        <img className="img-fluid" src={product9} alt="Apple iPad 2018 32GB"/>
                                    </div>
                                    <Card.Footer>
                                        <h3 className="font-weight-bold"><span>€499,</span><span
                                            className="h6">99</span></h3>
                                        <a className="text-black-30" href="#"><i className="icon-surface1-41 pr-3"/></a><a
                                        className="text-black-30" href="#"><i className="icon-surface1-36"
                                                                              style={{fontSize: "20px"}}/></a>
                                    </Card.Footer>

                                </div>
                            </li>

                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}