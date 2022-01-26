import React from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../redux/reducers/slices/users'; 

function NavAvatar() {
    const avatar = "/logo192.png"; 

    const dispatch = useDispatch();
    const history = useHistory(); 

    const user = useSelector(state => state.users.user);

    const logout =()=>{
        dispatch(setUser({}))
        history.push("/")
    }

    return (
        <div className="flex w-2/5 items-center justify-end p-2">
            
            {
                user?.name ? 
                <span className="hidden md:flex">Hello {user.name} </span>
                : <span className="md:flex"> Hello stranger</span>
            }
            

            {user?.avatarURL 
                ? <img 
                    src={user.avatarURL} 
                    alt="User avatar" 
                    className="w-6 h-6 ml-2 mr-2 rounded-full bg-gray-500" 
                />
                : <img 
                    src={avatar} 
                    alt="User avatar" 
                    className="w-6 h-6 ml-2 mr-2 rounded-full bg-gray-500" 
                />
            }

            {
                user?.name 
                    ? <button 
                        className="font-extrabold"
                        onClick={logout}
                    >
                        Logout
                    </button>
                    : <button 
                        className="font-extrabold"
                        onClick={()=>history.push("/")}
                    >
                        Login
                    </button>

            }

        </div>
    )
}

export default NavAvatar
