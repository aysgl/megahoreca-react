import React from "react";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import TabPane from "react-bootstrap/TabPane";
import TabContent from "react-bootstrap/TabContent"
export default function NavLinkDropdown() {
    return <>
        <div className="w-100 d-none d-md-block d-lg-none d-sm-block d-md-none d-block d-sm-none">
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul style={{ lineHeight: "30px" }} className="list-unstyled ps-2">
                    <li><a className="text-white" href="#"><i style={{ width: "30px", display: "inline-block" }}
                        className="icon-surface1-12 pe-2" />Tuin</a></li>
                    <li><a className="text-white" href="#"><i style={{ width: "30px", display: "inline-block" }}
                        className="icon-surface1-11 pe-2" />Gereedschap</a></li>
                    <li><a className="text-white" href="#"><i style={{ width: "30px", display: "inline-block" }}
                        className="icon-surface1-11 pe-2" />Bouwmaterialen</a></li>
                    <li><a className="text-white" href="#"><i style={{ width: "30px", display: "inline-block" }}
                        className="icon-Varlk-11 pe-2" />Hout & schrijnwerk</a></li>
                    <li><a className="text-white" href="#"><i style={{ width: "30px", display: "inline-block" }}
                        className="icon-Varlk-9 pe-2" />Verf & houtbescherming</a>
                    </li>
                    <li><a className="text-white" href="#"><i style={{ width: "30px", display: "inline-block" }}
                        className="icon-surface1-7 pe-2" />Sanitair</a></li>
                    <li><a className="text-white" href="#"><i style={{ width: "30px", display: "inline-block" }}
                        className="icon-surface1-2 pe-2" />Verlichting</a></li>
                    <li><a className="text-white" href="#"><i style={{ width: "30px", display: "inline-block" }}
                        className="icon-surface1-6 pe-2" />Ijzerwaren</a></li>
                    <li><a className="text-white" href="#"><i style={{ width: "30px", display: "inline-block" }}
                        className="icon-surface1 pe-2" />Elektriciteit</a></li>
                    <li><a className="text-white" href="#"><i style={{ width: "30px", display: "inline-block" }}
                        className="icon-surface1-3 pe-2" />Verwarming</a></li>
                    <li><a className="text-white" href="#"><i style={{ width: "30px", display: "inline-block" }}
                        className="icon-surface1-5 pe-2" />Huishouden</a></li>
                    <li><a className="text-white" href="#"><i style={{ width: "30px", display: "inline-block" }}
                        className="icon-Varlk-18 pe-2" />Behang & decoratie</a></li>
                    <li><a className="text-white" href="#"><i style={{ width: "30px", display: "inline-block" }}
                        className="icon-surface1-9 pe-2" />Auto & fiets</a></li>
                    <li><a className="text-white" href="#"><i style={{ width: "30px", display: "inline-block" }}
                        className="icon-surface1-8 pe-2" />Keuken</a></li>
                    <li><a className="text-white" href="#"><i style={{ width: "30px", display: "inline-block" }}
                        className="icon-surface1-10 pe-2" />Dierenverzorging</a>
                    </li>
                </ul>
            </div>
        </div>

        <NavbarCollapse className="collapse navbar-collapse d-none d-lg-block d-xl-none" id="navbarCollapse">
            <Nav className="navbar-nav w-100 justify-content-between ms-5">
                <NavDropdown.Item className="nav-item align-self-center dropdown-hoverable">
                    <Nav.Link className="custom-nav nav-link rounded-0 text-left px-3 text-uppercase fw-bold"
                        href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i style={{ fontSize: "10px" }} className="icon-surface1-38 pe-2" />Aan De Slag
                    </Nav.Link>
                    <div className="d-block d-sm-none d-none d-sm-block d-md-none d-md-block d-lg-none">
                        <DropdownMenu className="border-0 pt-0 mt-0 w-100">
                            <ul style={{ lineHeight: "30px" }} className="list-unstyled p-4">
                                <li><a className="text-dark" href="#"><i style={{ width: "30px", display: "inline-block" }}
                                    className="icon-surface1-12 pe-2" />Tuin</a></li>
                                <li><a className="text-dark" href="#"><i style={{ width: "30px", display: "inline-block" }}
                                    className="icon-surface1-11 pe-2" />Gereedschap</a>
                                </li>
                                <li><a className="text-dark" href="#"><i style={{ width: "30px", display: "inline-block" }}
                                    className="icon-surface1-11 pe-2" />Bouwmaterialen</a>
                                </li>
                                <li><a className="text-dark" href="#"><i style={{ width: "30px", display: "inline-block" }}
                                    className="icon-Varlk-11 pe-2" />Hout &
                                    schrijnwerk</a></li>
                                <li><a className="text-dark" href="#"><i style={{ width: "30px", display: "inline-block" }}
                                    className="icon-Varlk-9 pe-2" />Verf &
                                    houtbescherming</a></li>
                                <li><a className="text-dark" href="#"><i style={{ width: "30px", display: "inline-block" }}
                                    className="icon-surface1-7 pe-2" />Sanitair</a>
                                </li>
                                <li><a className="text-dark" href="#"><i style={{ width: "30px", display: "inline-block" }}
                                    className="icon-surface1-2 pe-2" />Verlichting</a>
                                </li>
                                <li><a className="text-dark" href="#"><i style={{ width: "30px", display: "inline-block" }}
                                    className="icon-surface1-6 pe-2" />Ijzerwaren</a>
                                </li>
                                <li><a className="text-dark" href="#"><i style={{ width: "30px", display: "inline-block" }}
                                    className="icon-surface1 pe-2" />Elektriciteit</a>
                                </li>
                                <li><a className="text-dark" href="#"><i style={{ width: "30px", display: "inline-block" }}
                                    className="icon-surface1-3 pe-2" />Verwarming</a>
                                </li>
                                <li><a className="text-dark" href="#"><i style={{ width: "30px", display: "inline-block" }}
                                    className="icon-surface1-5 pe-2" />Huishouden</a>
                                </li>
                                <li><a className="text-dark" href="#"><i style={{ width: "30px", display: "inline-block" }}
                                    className="icon-Varlk-18 pe-2" />Behang &
                                    decoratie</a></li>
                                <li><a className="text-dark" href="#"><i style={{ width: "30px", display: "inline-block" }}
                                    className="icon-surface1-9 pe-2" />Auto &
                                    fiets</a></li>
                                <li><a className="text-dark" href="#"><i style={{ width: "30px", display: "inline-block" }}
                                    className="icon-surface1-8 pe-2" />Keuken</a>
                                </li>
                                <li><a className="text-dark" href="#"><i style={{ width: "30px", display: "inline-block" }}
                                    className="icon-surface1-10 pe-2" />Dierenverzorging</a>
                                </li>
                            </ul>
                        </DropdownMenu>
                    </div>
                    <div className="d-none d-lg-block d-xl-none d-xl-block">
                        <DropdownMenu className="mega-dropdown-menu border-0 pt-0 mt-0">
                            <Container className="shadow px-0">
                                <Row className="dropdown-img p-3">
                                    <Col sm={5} md={3} className="my-nav-pills">
                                        <ul style={{ lineHeight: "14px" }}
                                            className="list-unstyled nav flex-column nav-pills" role="tablist">
                                            <li><a className="nav-link active" href="#tuin" role="tab"
                                                data-toggle="tab"><i
                                                    style={{ width: "30px", display: "inline-block" }}
                                                    className="icon-surface1-12 pe-2" />Tuin</a></li>
                                            <li><a className="nav-link" href="#gereedschap" role="tab"
                                                data-toggle="tab"><i
                                                    style={{ width: "30px", display: "inline-block" }}
                                                    className="icon-surface1-11 pe-2" />Gereedschap</a></li>
                                            <li><a className="nav-link" href="#bouwmaterialen" role="tab"
                                                data-toggle="tab"><i
                                                    style={{ width: "30px", display: "inline-block" }}
                                                    className="icon-surface1-11 pe-2" />Bouwmaterialen</a>
                                            </li>
                                            <li><a className="nav-link" href="#hout" role="tab" data-toggle="tab"><i
                                                style={{ width: "30px", display: "inline-block" }}
                                                className="icon-Varlk-11 pe-2" />Hout & schrijnwerk</a>
                                            </li>
                                            <li><a className="nav-link" href="#verf" role="tab" data-toggle="tab"><i
                                                style={{ width: "30px", display: "inline-block" }}
                                                className="icon-Varlk-9 pe-2" />Verf & houtbescherming</a>
                                            </li>
                                            <li><a className="nav-link" href="#sanitair" role="tab"
                                                data-toggle="tab"><i
                                                    style={{ width: "30px", display: "inline-block" }}
                                                    className="icon-surface1-7 pe-2" />Sanitair</a></li>
                                            <li><a className="nav-link" href="#verlichting" role="tab"
                                                data-toggle="tab"><i
                                                    style={{ width: "30px", display: "inline-block" }}
                                                    className="icon-surface1-2 pe-2" />Verlichting</a></li>
                                            <li><a className="nav-link" href="#ijzerwaren" role="tab"
                                                data-toggle="tab"><i
                                                    style={{ width: "30px", display: "inline-block" }}
                                                    className="icon-surface1-6 pe-2" />Ijzerwaren</a></li>
                                            <li><a className="nav-link" href="#elektriciteit" role="tab"
                                                data-toggle="tab"><i
                                                    style={{ width: "30px", display: "inline-block" }}
                                                    className="icon-surface1 pe-2" />Elektriciteit</a></li>
                                            <li><a className="nav-link" href="#verwarming" role="tab"
                                                data-toggle="tab"><i
                                                    style={{ width: "30px", display: "inline-block" }}
                                                    className="icon-surface1-3 pe-2" />Verwarming</a></li>
                                            <li><a className="nav-link" href="#huishouden" role="tab"
                                                data-toggle="tab"><i
                                                    style={{ width: "30px", display: "inline-block" }}
                                                    className="icon-surface1-5 pe-2" />Huishouden</a></li>
                                            <li><a className="nav-link" href="#behang" role="tab"
                                                data-toggle="tab"><i
                                                    style={{ width: "30px", display: "inline-block" }}
                                                    className="icon-Varlk-18 pe-2" />Behang & decoratie</a>
                                            </li>
                                            <li><a className="nav-link" href="#auto" role="tab" data-toggle="tab"><i
                                                style={{ width: "30px", display: "inline-block" }}
                                                className="icon-surface1-9 pe-2" />Auto & fiets</a></li>
                                            <li><a className="nav-link" href="#keuken" role="tab"
                                                data-toggle="tab"><i
                                                    style={{ width: "30px", display: "inline-block" }}
                                                    className="icon-surface1-8 pe-2" />Keuken</a></li>
                                            <li><a className="nav-link" href="#dierenverzorging" role="tab"
                                                data-toggle="tab"><i
                                                    style={{ width: "30px", display: "inline-block" }}
                                                    className="icon-surface1-10 pe-2" />Dierenverzorging</a>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col sm={7} md={9} className="mega-height">
                                        <TabContent className="tab-content">
                                            <TabPane active={true} className="tab-pane active" id="tuin">
                                                <Row>
                                                    <Col sm={12} md={5}>
                                                        <ul style={{ lineHeight: "28px" }} className="list-unstyled">
                                                            <li>
                                                                <h4 className="fw-bold">Tuinconstructies &
                                                                    opberging</h4>
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
                                                        <ul style={{ lineHeight: "28px" }}
                                                            className="list-unstyled mt-5">
                                                            <li>
                                                                <h4 className="fw-bold">Tuindraad</h4>
                                                            </li>
                                                            <li><a href="#" className="text-dark">Terras &
                                                                bestrating</a></li>
                                                            <li><a href="#" className="text-dark">Grind</a></li>
                                                            <li><a href="#" className="text-dark">Terrasplanken</a>
                                                            </li>
                                                            <li><a href="#" className="text-dark">Pergola's</a></li>
                                                            <li><a href="#" className="text-dark">Tuindraad</a></li>
                                                            <li><a href="#" className="text-dark">Terrastegels &
                                                                klinkers</a></li>
                                                            <li><a href="#" className="text-dark">Grastegels &
                                                                grindtegels</a></li>
                                                        </ul>
                                                        <ul style={{ lineHeight: "28px" }}
                                                            className="list-unstyled mt-5">
                                                            <li>
                                                                <h4 className="fw-bold">Tuindraad</h4>
                                                            </li>
                                                            <li><a href="#" className="text-dark">Terras &
                                                                bestrating</a></li>
                                                            <li><a href="#" className="text-dark">Grind</a></li>
                                                            <li><a href="#" className="text-dark">Terrasplanken</a>
                                                            </li>
                                                            <li><a href="#" className="text-dark">Pergola's</a></li>
                                                            <li><a href="#" className="text-dark">Tuindraad</a></li>
                                                            <li><a href="#" className="text-dark">Terrastegels &
                                                                klinkers</a></li>
                                                            <li><a href="#" className="text-dark">Grastegels &
                                                                grindtegels</a></li>
                                                        </ul>
                                                    </Col>
                                                    <Col sm={12} md={5}>
                                                        <ul style={{ lineHeight: "28px" }} className="list-unstyled">
                                                            <li>
                                                                <h4 className="fw-bold">Tuingereedschap &
                                                                    machines</h4>
                                                            </li>
                                                            <li><a href="#" className="text-dark">Grasmaaiers</a>
                                                            </li>
                                                            <li><a href="#" className="text-dark">Bosmaaiers</a>
                                                            </li>
                                                            <li><a href="#" className="text-dark">Bladblazers &
                                                                bladzuigers</a></li>
                                                            <li><a href="#" className="text-dark">Kettingzagen</a>
                                                            </li>
                                                            <li><a href="#"
                                                                className="text-dark">Hogedrukreinigers</a></li>
                                                            <li><a href="#"
                                                                className="text-dark">Onkruidbranders</a></li>
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
                                                        <ul style={{ lineHeight: "28px" }}
                                                            className="list-unstyled mt-5">
                                                            <li>
                                                                <h4 className="fw-bold">Partytenten &
                                                                    zonnetenten</h4>
                                                            </li>
                                                            <li><a href="#" className="text-dark">Zwembaden</a></li>
                                                            <li><a href="#" className="text-dark">Windschermen</a>
                                                            </li>
                                                            <li><a href="#" className="text-dark">Tuindecoratie</a>
                                                            </li>
                                                            <li><a href="#"
                                                                className="text-dark">Buitenspeelgoed</a></li>
                                                            <li><a href="#" className="text-dark">Toon meer</a></li>
                                                            <li><a href="#" className="text-dark">Parasols &
                                                                zonwering</a></li>
                                                            <li><a href="#" className="text-dark">Zonwering</a></li>
                                                            <li><a href="#" className="text-dark">Parasols</a></li>
                                                        </ul>
                                                    </Col>
                                                    <Col sm={12} md={2}>

                                                    </Col>
                                                </Row>


                                            </TabPane>
                                            <TabPane className="tab-pane" id="gereedschap">
                                                <ul className="list-unstyled">
                                                    <li>Gereedschap alt kategorileri</li>
                                                </ul>
                                            </TabPane>
                                            <TabPane className="tab-pane" id="bouwmaterialen">
                                                <ul className="list-unstyled">
                                                    <li>Bouwmaterialen alt kategorileri</li>
                                                </ul>
                                            </TabPane>
                                            <TabPane className="tab-pane" id="hout">
                                                <ul className="list-unstyled">
                                                    <li>Hout alt kategorileri</li>
                                                </ul>
                                            </TabPane>
                                            <TabPane className="tab-pane" id="verf">
                                                <ul className="list-unstyled">
                                                    <li>Verf alt kategorileri</li>
                                                </ul>
                                            </TabPane>
                                            <TabPane className="tab-pane" id="sanitair">
                                                <ul className="list-unstyled">
                                                    <li>Sanitair alt kategorileri</li>
                                                </ul>
                                            </TabPane>
                                            <TabPane className="tab-pane" id="verlichting">
                                                <ul className="list-unstyled">
                                                    <li>Verlichting alt kategorileri</li>
                                                </ul>
                                            </TabPane>
                                            <TabPane className="tab-pane" id="ijzerwaren">
                                                <ul className="list-unstyled">
                                                    <li>Ijzerwaren alt kategorileri</li>
                                                </ul>
                                            </TabPane>
                                            <TabPane className="tab-pane" id="elektriciteit">
                                                <ul className="list-unstyled">
                                                    <li>Elektriciteit alt kategorileri</li>
                                                </ul>
                                            </TabPane>
                                            <TabPane className="tab-pane" id="verwarming">
                                                <ul className="list-unstyled">
                                                    <li>Verwarming alt kategorileri</li>
                                                </ul>
                                            </TabPane>
                                            <TabPane className="tab-pane" id="huishouden">
                                                <ul className="list-unstyled">
                                                    <li>Huishouden alt kategorileri</li>
                                                </ul>
                                            </TabPane>
                                            <TabPane className="tab-pane" id="behang">
                                                <ul className="list-unstyled">
                                                    <li>Behang alt kategorileri</li>
                                                </ul>
                                            </TabPane>
                                            <TabPane className="tab-pane" id="auto">
                                                <ul className="list-unstyled">
                                                    <li>Auto alt kategorileri</li>
                                                </ul>
                                            </TabPane>
                                            <TabPane className="tab-pane" id="keuken">
                                                <ul className="list-unstyled">
                                                    <li>Keuken alt kategorileri</li>
                                                </ul>
                                            </TabPane>
                                            <TabPane className="tab-pane" id="dierenverzorging">
                                                <ul className="list-unstyled">
                                                    <li>Dierenverzorging alt kategorileri</li>
                                                </ul>
                                            </TabPane>

                                        </TabContent>
                                    </Col>
                                </Row>
                            </Container>
                        </DropdownMenu>
                    </div>
                </NavDropdown.Item>
            </Nav>
        </NavbarCollapse>
    </>
}