import logo from './KitkatDevs.png';
import { Link } from 'react-router-dom';
import './nav2.css';


const Nav2 = () => {
    return(
    <>
     <nav>
        <ul id="mainnav">
            <img src={logo} alt="logo" />
            <ul id="seconav">
            <li>
            <Link to="/">Login</Link>
            </li>
            <li>
            <Link to="/SignUp">Sign Up?</Link>
            </li>
            </ul>
        </ul>
    </nav>
    </>
    );
}


export default Nav2;