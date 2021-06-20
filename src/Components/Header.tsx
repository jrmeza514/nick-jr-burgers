import './Header.css';
import {Link} from 'react-router-dom';

interface Props {
    
}

const Header = (props: Props) => {
    return (
        <header className='header'>
            <div className="logo"></div>
            <div className="devil"></div>

            <Link to="/menu">See Our Menu</Link>
        </header>
    )
}
export default Header;