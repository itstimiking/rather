import React from "react";
import {Link} from "react-router-dom";
import NavAvatar from "./NavAvatar";
import NavLinks from "./NavLinks";

function Nav() {

    return (
        <nav 
            className="h-10 w-screen primary-color text-on-primary flex justify-center shadow-sm"
        >

            <div className="w-5/6 h-full flex justify-between">

                <NavLinks />

                <NavAvatar />
                
            </div>
        </nav>
    );
}

export default Nav;
