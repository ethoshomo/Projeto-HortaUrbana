import React from 'react'
import { Link } from 'react-router-dom'

function NavBarItem({ route, icon, children}) {
    return (
        <li className="nav-item">
            <Link to={route} className="nav-link"><i className={"bi "+ icon +" icon-config"}></i> {children}</Link>
        </li>
    )
}

export default NavBarItem