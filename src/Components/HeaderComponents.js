import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import $ from 'jquery';

function Header() {

    return (
        <div>
            <Navbar id="nav-disable" expand="lg">
                <NavbarBrand className="nav-title">Blind Code</NavbarBrand>
            </Navbar>
        </div>
    );
}

export default Header;