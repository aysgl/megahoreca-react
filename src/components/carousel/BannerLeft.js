import { Button, Col, Row } from "react-bootstrap";
import mansets from "../../images/mansets.png"
import React from "react";
import Badge from "../advertisement/Badge";
import SmallBadge from "../advertisement/SmallBadge";

export default function BannerLeft() {
    return <Col lg={2} md={12} className="d-none d-xl-block">
        <div className="d-flex align-content-between flex-wrap h-100 border rounded p-2">
            <Row className="d-flex justify-content-between g-0">
                <Col xs={9}>
                    <p className="lh-sm mb-3"><span className="fw-light">Aanbevolen</span> Combinaties</p>
                </Col>
                <Col xs={3}>
                    <SmallBadge />
                </Col>
                <Col xs={12}>
                    <Badge />
                </Col>
            </Row>
            <div>
                <img className="img-fluid pb-3" src={mansets} />
            </div>
        </div>
    </Col>
}