import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function PerksBanner() {
    return <Container className="px-4 px-lg-0 py-4">
        <Row>
            <Col md={3} sm={6} className="pb-4">
                <i className="icon-surface1-26"
                    style={{ fontSize: "54px", color: "#D4D4D4", paddingRight: "10px", float: "left" }} />
                <p style={{ color: "#D4D4D4" }} className="h2 fw-bold mb-0">7/24</p>
                <p style={{ color: "#D4D4D4" }} className="fw-bold">LIVE SPORT</p>

            </Col>
            <Col md={3} sm={6} className="pb-4">
                <i className="icon-surface1-27"
                    style={{ fontSize: "54px", color: "#D4D4D4", paddingRight: "10px", float: "left" }} />
                <p style={{ color: "#D4D4D4" }} className="h2 fw-bold mb-0">100%</p>
                <p style={{ color: "#D4D4D4" }} className="fw-bold">SECURE SHOPPING</p>
            </Col>

            <Col md={3} sm={6} className="pb-4">
                <i className="icon-surface1-23"
                    style={{ fontSize: "54px", color: "#D4D4D4", paddingRight: "10px", float: "left" }} />
                <p style={{ color: "#D4D4D4" }} className="h2 fw-bold mb-0">1-3 DAY</p>
                <p style={{ color: "#D4D4D4" }} className="fw-bold">FAST SHIPPING</p>
            </Col>
            <Col md={3} sm={6} className="pb-4">
                <i className="icon-surface1-28"
                    style={{ fontSize: "54px", color: "#D4D4D4", paddingRight: "10px", float: "left" }} />
                <p style={{ color: "#D4D4D4" }} className="h2 fw-bold mb-0">PRODUCT</p>
                <p style={{ color: "#D4D4D4" }} className="fw-bold">INSTALLATION</p>
            </Col>
        </Row>

    </Container>
}