import { Button, Dropdown, Form } from "react-bootstrap";
import React from "react";

export default function HeaderProfileDropdown() {
    return (
        <Dropdown align={"end"} className="ms-2">
            <Dropdown.Toggle variant="outline-primary">
                <i className="icon-surface1-30" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Form className="px-4 py-3">
                    <Form.Group>
                        <Form.Label>Email adress</Form.Label>
                        <Form.Control type="email" id="emailField"
                            placeholder="email@example.com" />
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Label>Passwoord</Form.Label>
                        <Form.Control type="password"
                            id="passwordField" placeholder="password" />
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Check type="checkbox" label="Herinner mij" id="rememberMeCheckbox" />
                    </Form.Group>
                    <Button type="submit" className="mt-3" variant="primary">Inloggen</Button>
                </Form>
                <Dropdown.Divider />
                <Dropdown.Item><a>Ben je nieuw hier? Schrijf je in!</a></Dropdown.Item>
                <Dropdown.Item><a>Wachtwoord vergeten?</a></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}