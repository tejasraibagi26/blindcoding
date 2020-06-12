import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import $ from 'jquery';

function Header() {

    $(document).ready(function () {
        $('#nav-disable').bind("contextmenu", function (e) {
            e.preventDefault();
        });
    });


    return (
        <div>
            <Navbar id="nav-disable" expand="lg">
                <NavbarBrand className="nav-title">Blind Code</NavbarBrand>
            </Navbar>
        </div>
    );
}

export default Header;