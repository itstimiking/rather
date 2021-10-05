import React from 'react';
import {useSelector} from 'react-redux';


function LeaderBoardComponent({user}) {

    const users = useSelector(state => state.users.users);

    const answered = Object.keys(users[user.id].answers).length;
    const asked = users[user.id].questions.length

    return (
        <div className=" relative flex p-2 w-full lg:w-1/2 md:w-full min-h-0 border-2 rounded-xl overflow-hidden items-center">

            <img src={user.avatarURL} alt="avatar" className="rounded-full w-40 h-40 bg-gray-900 mr-2" />

            <div className="px-4 w-3/5 h-full flex justify-center flex-col space-y-5 border-r-2 border-l-2"> 

                <h2 className="font-bold text-xl">
                    {user.name}
                </h2>

                <p className="flex justify-between">
                    <span>Answered questions</span>
                    <span> {answered} </span>
                </p>   

                <p className="flex justify-between">
                    <span>Created questions</span>
                    <span> {asked} </span>
                </p>  

            </div>

            <div className="flex justify-center items-center w-2/5 h-full">

                <div className="w-2/3 h-full border-2 rounded-md">

                    <div className="dull-color flex justify-center items-center w-full h-10"> 
                        <p>Score</p>
                    </div>

                    <div className="flex justify-center items-center w-full h-20">
                        <span className="h-12 w-12 rounded-full primary-color text-on-primary flex items-center justify-center">
                            {answered + asked}
                        </span>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default LeaderBoardComponent
