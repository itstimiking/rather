import React,{useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllUsers,setUser} from '../redux/reducers/slices/users';        


const avatar = "/logo192.png";

function Auth() {

    const dispatch = useDispatch();
    const history = useHistory(); 

    const users = useSelector(state => state.users.users);
    const user = useSelector(state => state.users.user);

    const [userId, setUserId] = useState("");
    const [allUsers, setAllUsers] = useState({})

    useEffect(()=>{

        if(Object.keys(users).length < 1){
            dispatch(fetchAllUsers())
            
        }else{
            setAllUsers(users)
        }

    }, [users, dispatch])

    const handleChange = (e)=>{
        e.preventDefault();
        setUserId(e.target.value)

        const user = allUsers[e.target.value];
        dispatch(setUser(user))
    }

    const login = () => {
        if(userId !== ""){
            history.push(`/questions`)
        }
    }

    return (
        <div className="flex justify-center w-full">
            <div className="w-full lg:w-1/2 md:w-full min-h-0 border-2 rounded-xl overflow-hidden">

                <div className="dull-color text-center h-14 flex flex-col items-center justify-center px-4 py-20">
                    <h1 className="text-2xl font-black"> Welcome to the would you rather app </h1> 
                    <p>Please sign in to continue..</p>
                </div>

                <div className="flex p-4 bg-white items-center">

                    <div className="px-4 w-full h-full flex flex-col justify-between"> 

                        <img src={user?.id ? allUsers[userId].avatarURL : avatar} alt="avatar" className="rounded-full w-44 h-44 bg-gray-900 mx-auto my-4" />

                        <h2 className="font-bold text-xl my-4 text-center">
                            Select User
                        </h2>
                        <fieldset>
                            <select
                                className="border-2 h-12 w-full rounded-md px-4 select-user"
                                value={userId}
                                onChange={handleChange}
                            >
                                <option disabled value="">Select User Account</option>
                                <option value="sarahedo"> Sara Hedo </option>
                                <option value="tylermcginnis"> Tyler McGinnis </option>
                                <option value="johndoe"> John Doe </option>
                                
                            </select> 
                        </fieldset><br/>

                        { user?.id && <button 
                                className="w-full secondary-color text-white h-10 mt-2" 
                                onClick={login}
                            >   
                                View Questions
                            </button>    
                        }           

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
