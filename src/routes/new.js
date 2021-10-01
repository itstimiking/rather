import React from 'react';

function New() {
    return (
        <div className="flex justify-center w-full">
            <div className="w-full lg:w-1/2 md:w-full min-h-0 border-2 rounded-xl overflow-hidden">

                <div className="dull-color h-14 flex items-center justify-center px-4">
                    <h1 className="text-2xl font-black"> Create new Question </h1> 
                </div>

                <div className="flex p-4 bg-white items-center">

                    <div className="px-4 w-full h-full flex flex-col justify-between"> 

                        <p>Complete the question</p>

                        <h2 className="font-bold text-xl my-4">
                            Would you rather...
                        </h2><br/>

                        <fieldset>
                            <input 
                                type="text" name="question1" 
                                placeholder="Enter first question" 
                                className="border-2 h-12 w-full rounded-md px-4"
                            />
                        </fieldset>
                        <p className="font-bold text-center w-full text-xl my-2">OR</p>
                        <fieldset>
                            <input 
                                type="text" name="question2"
                                placeholder="Enter Second question" 
                                className="border-2 h-12 w-full rounded-md px-4"
                            /> </fieldset><br/>

                        <button className="w-full secondary-color text-white h-10 mt-2" >Submit</button>               

                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;
