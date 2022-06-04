import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';


const NavBar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className="header">
            <Link to="/"><h1>HelpsUA</h1></Link>
            <div className="header_list">
                <ul className={click ? "nav-menu active" : "nav-menu" }>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="hamburger" onClick={handleClick}>
                {click? (<FaTimes size={20} style={{color: "#fff"}} />) :  <FaBars size={20} style={{color: "#fff"}}/> }
            </div>
        </div>
    )
}

export default NavBar;