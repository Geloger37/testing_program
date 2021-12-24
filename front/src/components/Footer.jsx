import {Collapse, Dropdown, Nav, Navbar} from 'bootstrap-4-react';
import {NavLink} from "react-router-dom";

function Footer() {
    return (
            <Navbar expand="lg" dark bg="primary" fixed="bottom">
                <Navbar.Brand>
                    Техническая поддержка: support@cyber.istu.edu
                </Navbar.Brand>
            </Navbar>
    );
};

export default Footer;