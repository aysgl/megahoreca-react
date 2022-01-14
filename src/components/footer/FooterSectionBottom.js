import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import helpNodig from "../../images/help-noding.png"

export default function FooterSectionBottom() {
    return <footer className="bg-primary pt-5 text-left">
        <Container className="text-white">
            <Row>
                <Col sm={12} md={6}>
                    <Row>
                        <Col sm={4}>
                            <img className="img-fluid" alt="Assistant" src={helpNodig} />
                        </Col>
                        <Col sm={8}>
                            <h2 className="mb-0">Hulp nodig?</h2>
                            <p>Neem contact op met <span style={{ textDecoration: "underline" }}>onze klantenservice</span>
                            </p>
                            <div className="pt-3">
                                <Row>
                                    <Col sm={2}>
                                        <i style={{ fontSize: "50px", float: "left" }} className="icon-surface1-29" />
                                    </Col>
                                    <Col sm={10}>
                                        <h2 className="mb-0">+800 243 00 00 </h2>
                                        <p>hello@MegaHoreca.com</p>
                                    </Col>
                                </Row>


                            </div>
                            <div className="pt-3 me-5">
                                <h3 className="mb-0">Aanmelden nieuwsbrief</h3>
                                <p>Altijd als eerste op de hoogte.</p>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span
                                            className="border-0 ps-3 border-primary input-group-text bg-white text-primary"
                                            id="basic-addon1"><i className="icon-surface1-56" /></span>
                                    </div>
                                    <input type="text" className="border-0 form-control text-primary"
                                        placeholder="Email adress" aria-label="email"
                                        aria-describedby="button-addon2" />
                                </div>
                                <Button type="submit" variant="dark" className="btn-lg mt-2">Aanmelden</Button>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col sm={4} md={2}>
                    <ul className="list-unstyled">
                        <li className="h4 fw-bold pb-2">MegaHoreca.com</li>
                        <li>Over ons</li>
                        <li>Nieuws van ons</li>
                        <li>Mededeling</li>
                        <li>Gebruikershandleiding</li>
                        <li>Mijn account</li>
                        <li>Help</li>
                        <li>Carrièremogelijkheden</li>
                        <li>Bedrijfsblog</li>
                        <li>Bedrijfsnieuws</li>
                    </ul>
                </Col>
                <Col sm={4} md={2}>
                    <ul className="list-unstyled">
                        <li className="h4 fw-bold pb-2">Klantenservice</li>
                        <li>Bestelling</li>
                        <li>Betaling</li>
                        <li>Verzending & bezorging</li>
                        <li>Retouren & service</li>
                        <li>Telefoon reparatie</li>
                        <li>Privacy</li>
                        <li>Inloggen</li>
                    </ul>
                </Col>
                <Col sm={4} md={2}>
                    <ul className="list-unstyled">
                        <li className="h4 fw-bold pb-2">Zakelijk</li>
                        <li>Zakelijke klanten</li>
                        <li>Affiliate programma</li>
                        <li>Waardebonnen</li>
                    </ul>
                    <ul className="list-unstyled pt-3">
                        <li className="py-2">
                            <i style={{ fontSize: "14px" }} className="icon-surface1-62" />
                        </li>
                        <li className="py-2">
                            <i style={{ fontSize: "24px" }} className="icon-surface1-58" />
                        </li>
                        <li className="py-2">
                            <i style={{ fontSize: "18px" }} className="icon-surface1-61" />
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>

        <Container className="py-4"></Container>

        <div style={{ bottom: "0px" }} className="bg-dark text-white-50 py-4">
            <Container>
                <Row>
                    <Col>
                        © 2019 MegaHoreca
                    </Col>
                    <Col>
                        <ul className="list-inline">
                            <li className="list-inline-item">Privacy & Cookies</li>
                            <li className="list-inline-item">Terms & Conditions</li>
                            <li className="list-inline-item">Accessibility</li>
                        </ul>
                    </Col>
                    <Col className="text-right">
                        <ul className="list-inline">
                            <li className="list-inline-item pe-2"><i className="icon-surface1-46" /></li>
                            <li className="list-inline-item pe-2"><i className="icon-surface1-42" /></li>
                            <li className="list-inline-item"><i className="icon-surface1-34" /></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    </footer>
}