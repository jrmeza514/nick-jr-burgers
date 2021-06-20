import { Component } from "react";
import './Header.css';

interface Props {
    
}

const Header = (props: Props) => {
    return (
        <header className='header'>
            <div className="logo"></div>
            <div className="devil"></div>
        </header>
    )
}
export default Header;