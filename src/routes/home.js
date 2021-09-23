import React, {useState} from 'react';
import Question from '../components/Question';
import QuestionAbbr from '../components/QuestionAbbr';


function Home() {

    const [questionsToShow, setQuestionsToShow] = useState("Answered");

    return (
        <div className="flex justify-center w-full">

            <div className="md:w-4/6 w-5/6 min-h-0 border-2 rounded-md">

                <div className="h-12 w-full border-2 flex">
                    <button 
                        className={
                            `w-1/2 h-full border-r-2 ${questionsToShow == "Answered"? "bg-blue-400 text-white": ""}`
                        }
                        onClick={()=> questionsToShow !== "Answered" ? setQuestionsToShow("Answered") : ""}
                    >
                        Answered Questions
                    </button>
                    <button 
                        className={
                            `w-1/2 h-full border-r-2 ${questionsToShow == "Unanswered"? "bg-blue-400 text-white": ""}`
                        }
                        onClick={()=> questionsToShow !== "Unanswered" ? setQuestionsToShow("Unanswered") : ""}
                    >
                        Unanswered Questions
                    </button>
                </div>

                <div className="w-full min-h-0 p-10 flex flex-col space-y-5">

                    {
                        questionsToShow == "Answered" && (
                            <>
                                <QuestionAbbr />
                                <QuestionAbbr />
                                <QuestionAbbr />
                            </>
                        )
                    }

{
                        questionsToShow == "Unanswered" && (
                            <>
                                <QuestionAbbr />
                            </>
                        )
                    }
                </div>

            </div>

        </div>
    )
}

export default Home;
