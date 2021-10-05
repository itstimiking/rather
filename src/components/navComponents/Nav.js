import React from "react";
import {useSelector} from 'react-redux';

import NavAvatar from "./NavAvatar";
import NavLinks from "./NavLinks";

function Nav() {

    const user = useSelector(state => state.users.user);

    return (
        <nav 
            className="h-10 w-screen primary-color text-on-primary flex justify-center shadow-sm"
        >

            <div className="w-5/6 h-full flex justify-between">

                {user?.id ? <NavLinks /> : <div className="pb-2 h-full items-end flex font-bold">Would You Rather Game</div>}

                <NavAvatar />
                
            </div>
        </nav>
    );
}

export default Nav;
