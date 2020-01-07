import React from 'react'
import { Link } from 'react-router-dom'
import {FaAlignRight} from 'react-icons/fa'
import logo from '../images/logo.svg'

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Beach Resort" />
                    </Link>
                    <button className="nav-btn" onClick={() => setIsOpen(!isOpen)}>
                        <FaAlignRight className="nav-icon"/>
                    </button>
                </div>
                <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/rooms">
                        Rooms
                    </Link>
                </ul>
            </div>
        </nav>
    )
}
