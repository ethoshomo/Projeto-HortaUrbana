import React from 'react'
import { Link } from 'react-router-dom'

function NavBarItem({ route, icon, children}) {
    return (
        <li className="nav-item">
            <Link to={route} className="nav-link container-fluid"><i className={"bi "+ icon +" icon-config"}/> {children}</Link>           
        </li>
    )
}

export default NavBarItem