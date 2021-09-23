import React from 'react';


const fullname = "Timi Ambaye";
const avatar = "/logo192.png"; 

const choice1 = "Marry one woman for the rest of your life";
const choice2 = "Flex till you die with many women"


function QuestionAbbr() {
    return (
        <div className="w-full min-h-0 border-2 rounded-xl overflow-hidden">

            <div className="bg-gray-100 h-14 flex items-center px-4">
                <h1> {`${fullname} asks: `}</h1> 
            </div>

            <div className="flex p-4 bg-white items-center">

                <img src={avatar} alt="avatar" className="rounded-full w-44 h-44 bg-gray-900 mr-2" />

                <div className="px-4 w-full h-full flex flex-col justify-between border-l-2"> 

                    <h2 className="font-black text-2xl">
                        Would you rather...
                    </h2><br/>

            

                    <p>

                        {`... ${choice1} ...`}{/** Second answer */}

                    </p><br/>

                    <button className="w-full border-2 hover:bg-gray-200 h-10 mt-2" >View Full</button>               

                </div>
            </div>

        </div>
    )
}

export default QuestionAbbr
