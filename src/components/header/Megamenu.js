import { useState } from 'react'
import { Offcanvas, Button, Tab, Row, Col, Nav } from 'react-bootstrap'
import imgMenu from "../../images/img-menu.png"

export default function Megamenu() {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    return (
        <>
            <Button className='w-25 text-secondary text-uppercase fw-bold h-100 p-0' variant="link"
                show={show}
                onMouseEnter={showDropdown}>
                <i style={{ fontSize: "10px" }} className="icon-surface1-38 pe-2"></i> Aan De Slag
            </Button>

            <Offcanvas className="mx-auto" placement='top' show={show} onMouseLeave={hideDropdown} style={{ minHeight: "580px", top: "81px" }}>
                {/* <Offcanvas.Header>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header> */}
                <Offcanvas.Body>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">
                                            <i style={{ width: "30px", display: "inline-block" }} className="icon-surface1-12 px-2"></i>
                                            Tuin
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                            <i style={{ width: "30px", display: "inline-block" }} className="icon-surface1-11 px-2"></i>
                                            Gereedschap</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row style={{ zIndex: "1", position: "relative" }}>
                                            <Col md={5}>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <p className="fw-bold mb-0">Tuinconstructies &amp;
                                                            opberging</p>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Tuinhuizen</a>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Pergola's</a></li>
                                                    <li><a href="#" className="text-dark">Garages</a></li>
                                                    <li><a href="#" className="text-dark">Paviljoenen</a>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Carports</a></li>
                                                    <li><a href="#" className="text-dark">Serres</a></li>
                                                    <li><a href="#" className="text-dark">Tuinschermen</a>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Tuinopberging</a>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Fietsopberging</a>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Poorten</a></li>
                                                    <li><a href="#" className="text-dark">Tuindraad</a></li>
                                                </ul>
                                                <ul className="list-unstyled mt-5">
                                                    <li>
                                                        <p className="fw-bold mb-0">Tuindraad</p>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Terras &amp;
                                                        bestrating</a></li>
                                                    <li><a href="#" className="text-dark">Grind</a></li>
                                                    <li><a href="#" className="text-dark">Terrasplanken</a>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Pergola's</a></li>
                                                    <li><a href="#" className="text-dark">Tuindraad</a></li>
                                                    <li><a href="#" className="text-dark">Terrastegels &amp;
                                                        klinkers</a></li>
                                                    <li><a href="#" className="text-dark">Grastegels &amp;
                                                        grindtegels</a></li>
                                                </ul>
                                                <ul className="list-unstyled mt-5">
                                                    <li>
                                                        <p className="fw-bold mb-0">Tuindraad</p>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Terras &amp;
                                                        bestrating</a></li>
                                                    <li><a href="#" className="text-dark">Grind</a></li>
                                                    <li><a href="#" className="text-dark">Terrasplanken</a>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Pergola's</a></li>
                                                    <li><a href="#" className="text-dark">Tuindraad</a></li>
                                                    <li><a href="#" className="text-dark">Terrastegels &amp;
                                                        klinkers</a></li>
                                                    <li><a href="#" className="text-dark">Grastegels &amp;
                                                        grindtegels</a></li>
                                                </ul>
                                            </Col>
                                            <Col md={5}>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <p className="fw-bold mb-0">Tuingereedschap &amp;
                                                            machines</p>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Grasmaaiers</a>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Bosmaaiers</a>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Bladblazers &amp;
                                                        bladzuigers</a></li>
                                                    <li><a href="#" className="text-dark">Kettingzagen</a>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Hogedrukreinigers</a></li>
                                                    <li><a href="#" className="text-dark">Onkruidbranders</a></li>
                                                    <li><a href="#" className="text-dark">Heggenscharen</a>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Hakselaars</a>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Trimmers</a></li>
                                                    <li><a href="#" className="text-dark">Toon meer</a></li>
                                                    <li><a href="#" className="text-dark">Tuinplezier</a>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Barbecues</a></li>
                                                </ul>
                                                <ul className="list-unstyled mt-5">
                                                    <li>
                                                        <p className="fw-bold mb-0">Partytenten &amp;
                                                            zonnetenten</p>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Zwembaden</a></li>
                                                    <li><a href="#" className="text-dark">Windschermen</a>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Tuindecoratie</a>
                                                    </li>
                                                    <li><a href="#" className="text-dark">Buitenspeelgoed</a></li>
                                                    <li><a href="#" className="text-dark">Toon meer</a></li>
                                                    <li><a href="#" className="text-dark">Parasols &amp;
                                                        zonwering</a></li>
                                                    <li><a href="#" className="text-dark">Zonwering</a></li>
                                                    <li><a href="#" className="text-dark">Parasols</a></li>
                                                </ul>
                                            </Col>
                                        </Row>
                                        <img className='position-absolute end-0 bottom-0' src={imgMenu} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <p>Tab 2</p>
                                    </Tab.Pane>
                                </Tab.Content>

                            </Col>
                        </Row>
                    </Tab.Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
