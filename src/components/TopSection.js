import { Container, Row } from "react-bootstrap";
import React from "react";
import TopSectionLeft from "./TopSectionLeft";
import TopSectionMiddle from "./TopSectionMiddle";
import TopSectionRight from "./TopSectionRight";

export default function TopSection() {
    return <Container className="mt-3 mb-5">
        <Row>
            <TopSectionLeft />
            <TopSectionMiddle />
            <TopSectionRight />
        </Row>
    </Container>


}