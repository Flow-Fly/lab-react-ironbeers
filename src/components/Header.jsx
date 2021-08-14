import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <nav>
            <Link to='/'> <i className="fas fa-home" ></i> </Link>
        </nav>
    )
}

export default Header
