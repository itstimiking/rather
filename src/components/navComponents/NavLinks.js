import React from 'react';
import {Link} from "react-router-dom";

function NavLinks() {
    return (
        <ul 
            className="list-none font-bold pb-2 h-full items-end" 
            role="navigation w-2/5"
        >
            <li>
                <Link to="/"> Home </Link>
            </li>

            <li>
                <Link to="/new"> New Question </Link>
            </li>

            <li>
                <Link to="/board"> Leader Board </Link>
            </li>
        </ul>
    )
}

export default NavLinks
