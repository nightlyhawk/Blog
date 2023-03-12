import logo from './KitkatDevs.png';
import { Link } from 'react-router-dom';
import './nav.css';


const Nav = () => {
    return(
    <>
     <nav>
        <ul id="mainnav">
            <img src={logo} alt="logo" />
            <li>
                George's Place
            </li>
            <ul id="seconav">
            <li>
            <Link to="/">Sign In?</Link>
            </li>
            <li>
            <Link to="/SignUp">Sign Up?</Link>
            </li>
            </ul>
        </ul>
    </nav> 
        <h1>Welcome! </h1>
        <h2>Sign in by entering your information below</h2> 
    </>
    );
}


export default Nav;