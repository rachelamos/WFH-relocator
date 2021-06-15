import React from "react";
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                {/* <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '} */}
                WFH-Relocator
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Welcome! <a href="#login"></a>
                    </Navbar.Text>
                </Navbar.Collapse>
            
        </Navbar>
    )
}

export default Nav;