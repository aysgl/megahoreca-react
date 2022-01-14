import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import HeaderProfileDropdown from "./HeaderProfileDropdown";
import HeaderShoppingcart from "./HeaderShoppingcart";
import HeaderSearch from "./HeaderSearch";
import logo from "../../images/logo.jpg"
import Megamenu from './Megamenu';

export default function Header() {
    return <>
        <Navbar bg="white" expand="lg" className="pt-2 pb-0 border-bottom shadow" role="navigation" sticky="top">
            <Container>
                <Navbar.Brand href="#home" className="mr-auto">
                    <img
                        src={logo}
                        className="d-inline-block align-top"
                        style={{ width: '200px' }}
                        alt="Megahoreca"
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {/* <Megamenu /> */}
                    <p>Mega Menu gelecek</p>
                    <HeaderSearch />
                    <HeaderProfileDropdown />
                    <HeaderShoppingcart />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}