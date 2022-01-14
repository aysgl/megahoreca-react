import { Button, FormControl, InputGroup, Nav } from "react-bootstrap";
import React from "react";

export default function HeaderSearch() {
    return (
        <InputGroup className="w-75 ms-2">
            <InputGroup.Text id="basic-addon1">
                <i className="icon-surface1-35" />
            </InputGroup.Text>
            <FormControl
                placeholder="Vindt het nu!"
                aria-label="Vindt het nu!"
                aria-describedby="basic-addon1"
            />
            <Button id="basic-addon1">ZOEKEN</Button>
        </InputGroup>
    )
}