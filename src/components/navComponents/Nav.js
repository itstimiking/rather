import React from "react";
import {useSelector} from 'react-redux';

import NavAvatar from "./NavAvatar";
import NavLinks from "./NavLinks";

function Nav() {

    const user = useSelector(state => state.users.user);

    return (
        <nav 
            className="py-5 w-screen primary-color text-on-primary flex justify-center items-center shadow-sm"
        >

            <div className="w-5/6 h-full flex justify-between items-center">

                {user?.id ? <NavLinks /> : <div className="pb-2 h-full font-bold">Would You Rather Game</div>}

                <NavAvatar />
                
            </div>
        </nav>
    );
}

export default Nav;
