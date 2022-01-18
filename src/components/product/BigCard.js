import { Card, Row, Col } from "react-bootstrap"
import Stars from "./Stars"
import Badge from "./Badge"
import Stock from "./Stock"
import ActionButton from "./ActionButton"

export default function BigCard({ title, category, point, price, stock, badge, id }) {
    return (
        <Card className="w-100 h-100">
            <Card.Body>
                <div>
                    <p className="text-black-50 mb-1 d-flex align-items-center small text-truncate">
                        <i style={{ fontSize: "9px" }} className="icon-surface1-44 pe-2" />
                        category
                        <i style={{ fontSize: "9px" }} className="icon-surface1-44 px-2" /> {category}
                    </p>
                    <Card.Title as="h3" className="mb-1 fw-bold">{title + " lorem ispum sit amet dolor for big card"}</Card.Title>

                    {stock &&
                        <Stock stock={stock} />
                    }

                    {point &&
                        <Stars point={point} />
                    }

                    {badge &&
                        <div className="d-flex justify-content-end">
                            <Badge badge={badge} />
                        </div>
                    }
                </div>
                <img className="img-fluid w-100 rounded" height="100%" src="https://picsum.photos/seed/picsum/400/300"
                    alt="Apple iPad 2018 32GB" />
            </Card.Body>

            <Card.Footer className="border-0">
                <Row className="d-flex align-items-center justify-content-between">
                    <Col>
                        <p className="fw-bold lh-1 h5">
                            <span>€{price},</span>
                            <span className="small">{price + 1}</span>
                        </p>
                    </Col>
                    <Col className="text-end">
                        <ActionButton />
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}
