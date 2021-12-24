import {Collapse, Dropdown, Nav, Navbar} from 'bootstrap-4-react';
import {NavLink} from "react-router-dom";

function Header() {
    return (
            <Navbar expand="lg" dark bg="primary">
                <Navbar.Brand href="/">
                    OlympIstu
                </Navbar.Brand>
                <Navbar.Toggler target="#navbarSupportedContent" />
                <Collapse navbar id="navbarSupportedContent">
                    <Navbar.Nav ml="auto">

                        <Nav.Item dropdown>
                            <Nav.Link dropdownToggle>Профиль</Nav.Link>
                            <Dropdown.Menu>
                               
                                {/* <Dropdown.Item>
                                    <NavLink to="/profiles/settings">Настройки</NavLink>
                                </Dropdown.Item> */}
                                <Dropdown.Item>
                                    <NavLink to="/authorization">Выход</NavLink>
                                </Dropdown.Item>
                                

                            </Dropdown.Menu>
                        </Nav.Item>
                    </Navbar.Nav>
                </Collapse>
            </Navbar>
    );
};

export default Header;