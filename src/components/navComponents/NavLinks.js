import React from 'react';
import {Link} from "react-router-dom";

function NavLinks() {
    return (
        <ul 
            className="list-none font-bold pb-2 h-full items-end flex" 
            role="navigation"
        >
            <li>
                <Link to="/"> Questions </Link>
            </li>

            <li>
                <Link to="/add"> New Question </Link>
            </li>

            <li>
                <Link to="/leaderboard"> Leader Board </Link>
            </li>
        </ul>
    )
}

export default NavLinks
