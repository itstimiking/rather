import React from 'react';

const question = !true;

const fullname = "Timi Ambaye";
const avatar = "/logo192.png"; 

const choice1 = "Marry one woman for the rest of your life";
const choice2 = "Flex till you die with many women"

function Question() {
    return (
        <div className="w-full lg:w-1/2 md:w-full min-h-0 border-2 rounded-xl overflow-hidden">

            <div className="primary-color text-on-primary h-14 flex items-center px-4">
                <h1> {question ? `${fullname} asks:` :  `Asked by ${fullname}`}</h1> 
            </div>

            <div className="flex p-4 bg-white items-center">

                <img src={avatar} alt="avatar" className="rounded-full w-44 h-44 bg-gray-900 mr-2" />

                {// Show question with iptions .......

                    question && (
                        <div className="px-4 w-full h-full flex flex-col justify-between border-l-2"> 

                            <h2 className="font-black text-2xl">
                                Would you rather...
                            </h2><br/>

                            <fieldset>
                                <input type="radio" name="answer" id="choice1" value={choice1} />
                                <label for="choice1" className="pl-1">

                                    {choice1}{/** First answer */}

                                </label>
                            </fieldset><br/>

                            <fieldset>
                                <input type="radio" name="answer" id="choice2" value={choice2} />
                                <label for="choice2" className="pl-1">

                                    {choice2 }{/** Second answer */}

                                </label>
                            </fieldset><br/>

                            <button className="w-full secondary-color text-white h-10 mt-2" >Submit</button>               

                        </div>
                    )
                }

                { // When question is answered, show user selection and percentage
                    !question && (
                        <div className="px-4 w-full h-full flex flex-col justify-between border-l-2"> 

                            <h2 className="font-black text-2xl">
                                Results:
                            </h2><br/>

                            <fieldset className="border-r rounded-lg bg-green-100 border-2 border-green-400 flex flex-col relative p-5">

                                <p className="absolute self-end -right-5 -top-6 text-gray-600 leading-tight rounded-full flex justify-center items-center w-12 h-12 text-sm font-black bg-yellow-300">
                                    Your <br /> vote
                                </p>

                                <p className="text-xl mb-4 text-green-700">

                                    {choice1}{/** First answer */ "?"}

                                </p>

                                <div className="w-full h-10 bg-gray-300 rounded-sm overflow-hidden">
                                    <div className="w-2/3 h-full bg-green-400 rounded-md"></div>
                                </div>
                            </fieldset><br/>

                            <fieldset className="border-r rounded-lg bg-gray-100 border-2 border-gray-200 flex flex-col relative p-5">

                                <p className="text-xl mb-4">

                                    {choice2}{/** First answer */ "?"}

                                </p>

                                <div className="w-full h-10 bg-gray-300 rounded-sm">

                                </div>
                            </fieldset><br/>
                            <button className="w-full secondary-color text-white h-10 mt-2" >Submit</button>               

                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Question
