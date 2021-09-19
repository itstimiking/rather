import React from 'react';



const avatar = "/logo192.png";

function Auth() {
    return (
        <div className="flex justify-center w-full">
            <div className="w-full lg:w-1/2 md:w-full min-h-0 border-2 rounded-xl overflow-hidden">

                <div className="dull-color h-14 flex flex-col items-center justify-center px-4">
                    <h1 className="text-2xl font-black"> Welcome to the would you rather app </h1> 
                    <p>Please sign in to continue..</p>
                </div>

                <div className="flex p-4 bg-white items-center">

                    <div className="px-4 w-full h-full flex flex-col justify-between"> 

                        <img src={avatar} alt="avatar" className="rounded-full w-44 h-44 bg-gray-900 mx-auto my-4" />

                        <h2 className="font-bold text-xl my-4 text-center">
                            SignIn
                        </h2>
                        <fieldset>
                            <select
                                className="border-2 h-12 w-full rounded-md px-4 select-user"
                            >
                                <option disabled>Select User Account</option>
                                <option value="timi">Timi Two</option>
                                <option value="timi">Timi three</option>
                                <option value="timi">Timi Four</option>
                                <option value="timi">Timi five</option>
                                
                            </select> 
                        </fieldset><br/>

                        <button className="w-full secondary-color text-white h-10 mt-2" >Sign In</button>               

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
