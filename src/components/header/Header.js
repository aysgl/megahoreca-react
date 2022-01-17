import React from 'react';
import { Navbar, Nav, Container, DropdownButton, Dropdown } from "react-bootstrap";
import HeaderProfileDropdown from "./HeaderProfileDropdown";
import HeaderShoppingcart from "./HeaderShoppingcart";
import HeaderSearch from "./HeaderSearch";
import logo from "../../images/logo.jpg"
import Megamenu from './Megamenu';

export default function Header() {
    return <>
        <Navbar bg="white" expand="lg" className="py-0 shadow" role="navigation" sticky="top" style={{ zIndex: "1046", height: "80px" }}>
            <Container className='h-100'>
                <Navbar.Brand href="#home" className="mr-auto">
                    <img
                        src={logo}
                        className="d-inline-block align-top"
                        style={{ width: '200px' }}
                        alt="Megahoreca"
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='h-100'>
                    <Megamenu />
                    <div className='w-75 d-flex'>
                        <HeaderSearch />
                        <HeaderProfileDropdown />
                        <HeaderShoppingcart />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}