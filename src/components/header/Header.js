import React from 'react';
import { Navbar, Nav, Container, DropdownButton, Dropdown } from "react-bootstrap";
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
                <Navbar.Collapse className='justify-content-between'>
                    {/* <Megamenu /> */}
                    <DropdownButton id="dropdown-basic-button" title="Mega menü gelecek">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                    <HeaderSearch />
                    <HeaderProfileDropdown />
                    <HeaderShoppingcart />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}