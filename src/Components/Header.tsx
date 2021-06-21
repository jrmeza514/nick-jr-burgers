import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import { useState } from 'react';


interface Props {
}

const Header = (props: Props) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <Navbar color="danger" dark expand="md" sticky="top">
            <NavbarBrand href="/">
                Nick Jr's Burgers
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem color="dark">
                    <NavLink href="/menu">Menu</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        
    )
}
export default Header;