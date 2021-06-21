import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { useState } from 'react';


interface Props {

}

const Header = (props: Props) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <Navbar color="dark" dark expand="md" sticky="top">
            <NavbarBrand href="/">
                <div className="logo"></div>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar fill >
                <NavItem color="dark">
                    <NavLink href="/menu" active >Menu</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        
    )
}
export default Header;