import React from 'react'

const fullname = "Timi Ambaye";
const avatar = "/logo192.png"; 


function LeaderBoardComponent() {
    return (
        <div className=" relative flex p-2 w-full lg:w-1/2 md:w-full min-h-0 border-2 rounded-xl overflow-hidden items-center">

            <img src={avatar} alt="avatar" className="rounded-full w-40 h-40 bg-gray-900 mr-2" />

            <div className="px-4 w-3/5 h-full flex justify-center flex-col space-y-5 border-r-2 border-l-2"> 

                <h2 className="font-bold text-xl">
                    {fullname}
                </h2>

                <p className="flex justify-between">
                    <span>Answered questions</span>
                    <span> {7} </span>
                </p>   

                <p className="flex justify-between">
                    <span>Created questions</span>
                    <span> {3} </span>
                </p>  

            </div>

            <div className="flex justify-center items-center w-2/5 h-full">

                <div className="w-2/3 h-full border-2 rounded-md">

                    <div className="dull-color flex justify-center items-center w-full h-10"> 
                        <p>Score</p>
                    </div>

                    <div className="flex justify-center items-center w-full h-20">
                        <span className="h-12 w-12 rounded-full primary-color text-on-primary flex items-center justify-center">
                            {10}
                        </span>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default LeaderBoardComponent
