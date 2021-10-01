import React, {useState, useEffect} from 'react';
import QuestionAbbr from '../components/QuestionAbbr';

import {useDispatch, useSelector} from 'react-redux';

import {fetchQuestions} from "../redux/reducers/slices/questions";
import {fetchAllUsers} from "../redux/reducers/slices/users";

function Home() {

    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions.questions);
    const usersState = useSelector(state => state.users);
    
    const [questionsToShow, setQuestionsToShow] = useState("answered");

    const [questionsList, setQuestionsList] = useState([]);

    useEffect(()=>{
        if(Object.keys(questions).length < 1){
            dispatch(fetchQuestions()) // Fetch all questions
            dispatch(fetchAllUsers()) // Fetch all users
        }
    },[dispatch,questions])

    useEffect(()=>{
        if(usersState.user.name){
            filterQuestions("answered")
        }
    },[questions,usersState])

    const filterQuestions = (query)=>{
        if(query === "answered"){
            const filter = Object.entries(questions).filter((question)=>{
                return Object.keys(usersState.user.answers).includes(question[0])
            })
            setQuestionsToShow("answered")
            setQuestionsList(filter)
        }else{
            const filter = Object.entries(questions).filter((question)=>{
                return !Object.keys(usersState.user.answers).includes(question[0])
            })
            setQuestionsToShow("unanswered")
            setQuestionsList(filter)
        }
    }
    


    return (
        <div className="flex justify-center w-full">

            <div className="md:w-4/6 w-5/6 min-h-0 border-2 rounded-md">

                <div className="h-12 w-full border-2 flex">
                    <button 
                        className={
                            `w-1/2 h-full border-r-2 ${questionsToShow === "answered"? "bg-blue-400 text-white": ""}`
                        }
                        onClick={()=> filterQuestions("answered")}
                    >
                        Answered Questions
                    </button>
                    <button 
                        className={
                            `w-1/2 h-full border-r-2 ${questionsToShow === "unanswered"? "bg-blue-400 text-white": ""}`
                        }
                        onClick={()=> filterQuestions("unanswered")}
                    >
                        Unanswered Questions
                    </button>
                </div>

                <div className={`w-full min-h-0 ${usersState.loading ? "py-60" : "p-10"} flex flex-col space-y-5`}>

                    {
                        (usersState.loading && Object.keys(questions).length < 1) && <svg className="place-self-center animate-spin h-10 w-10 mr-3 bg-white border-r-4 border-green-400 rounded-full" viewBox="0 0 24 24">/** ... */</svg>
                    }

                    {
                        questionsList.length > 0 && 
                        questionsList.map(question => <QuestionAbbr key={question[0]} question={question[1]} /> )
                        
                    }

                </div>

            </div>

        </div>
    )
}

export default Home;
