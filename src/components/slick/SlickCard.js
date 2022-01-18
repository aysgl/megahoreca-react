import { Row, Col, Card } from "react-bootstrap";
import Badge from "../advertisement/Badge";

export default function SlickCard({ stock, stars, badge, title, category, id, price }) {
    return (
        <div data-toggle="modal" data-target="#product-one" className="item mb-4">
            {/* {products.map((pro, i) => */}
            <Card>
                <Card.Body>
                    <div style={{ minHeight: "110px" }}>
                        <p className="text-black-50 mb-1 d-flex align-items-center small text-truncate">
                            <i style={{ fontSize: "9px" }} className="icon-surface1-44 pe-2" />
                            category
                            <i style={{ fontSize: "9px" }} className="icon-surface1-44 px-2" /> {category}
                        </p>
                        <Card.Title className="mb-1 fw-bold h6">{title}</Card.Title>

                        {stock &&
                            <p className="text-success small mb-0">
                                <i style={{ fontSize: "9px" }} className="icon-Varlk-41 pe-2" />
                                laatste {id} stuks {stock}
                            </p>
                        }

                        {stars &&
                            <p class="text-secondary mb-0">
                                <i style={{ fontSize: "12px" }} class="icon-surface1-51 text-warning"></i>
                                <i style={{ fontSize: "12px" }} class="icon-surface1-51 text-warning"></i>
                                <i style={{ fontSize: "12px" }} class="icon-surface1-52 text-warning"></i>
                                <i style={{ fontSize: "12px" }} class="icon-surface1-52 text-warning"></i>
                                <i style={{ fontSize: "12px" }} class="icon-surface1-52 text-warning pe-2"></i>
                                <small>35</small>
                            </p>
                        }

                        {badge &&
                            <div className="d-flex justify-content-end">
                                <Badge />
                            </div>
                        }
                    </div>
                    <img className="img-fluid rounded" src={`https://picsum.photos/id/${id}/200/200`} />
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
                            <a className="text-black-50" href="#">
                                <i style={{ fontSize: "18px" }}
                                    className="icon-surface1-41 pe-3" />
                            </a>
                            <a className="text-black-50" href="#">
                                <i className="icon-surface1-36" style={{ fontSize: "20px" }} />
                            </a>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
            {/* )} */}
        </div >
    )
}