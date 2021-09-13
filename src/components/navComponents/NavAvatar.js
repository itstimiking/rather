import React from 'react';

function NavAvatar() {

    const fullname = "Timi Ambaye";
    const avatar = "/logo192.png"; 

    return (
        <div className="flex w-2/5 items-end justify-end p-2">
            <span>
                Hello {fullname}
            </span>

            <img 
                src={avatar} 
                alt="User avatar" 
                className="w-6 h-6 ml-2 mr-2 rounded-full bg-gray-500" 
            />

            <button 
                className="font-extrabold"
            >
                Logout
            </button>

        </div>
    )
}

export default NavAvatar
