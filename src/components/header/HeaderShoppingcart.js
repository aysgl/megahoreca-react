import React from "react";
import { Container, Dropdown } from "react-bootstrap";

export default function HeaderShoppingcart() {
    return <>
        <Dropdown align={"end"} className="ms-2">
            <Dropdown.Toggle variant="outline-primary">
                <i className="icon-surface1-36" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Header>MIJN WINKELMAND</Dropdown.Header>
                <Dropdown.Divider />
                <Container className="py-3 btn-group">
                    <Dropdown.Item as="button">GA NAAR MAND</Dropdown.Item>
                    <Dropdown.Item as="button">NU KOPEN</Dropdown.Item>
                </Container>
            </Dropdown.Menu>
        </Dropdown>
    </>

}