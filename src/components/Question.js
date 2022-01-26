import React,{ useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {saveQuestionAnswer} from '../redux/reducers/slices/questions';
import {fetchAllUsers, updateUser, startLoading} from '../redux/reducers/slices/users';

function Question() {

    const { question_id } = useParams();

    const dispatch = useDispatch();

    const questions = useSelector(state => state.questions.questions);
    const user = useSelector(state => state.users.user);
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state=>state.users.loading)

    const currentQuestion = questions[question_id];
    const [answeredOrNot, setAnsweredOrNot ] = useState("");

    const [optionOne, setOptionOne] = useState(0);
    const [optionTwo, setOptionTwo] = useState(0);

    const [option, setOption] = useState("");

    const calcPercentage = (opt, total) => {
        if((opt === 0) || total === 0){
            return `${0}`;
        }else{
            return `${Math.floor(opt / total * 100)}%`
        }
    }
 
    useEffect(()=>{

        if(Object.keys(questions).length > 0 ){
            setOptionOne(currentQuestion.optionOne.votes.length)
            setOptionTwo(currentQuestion.optionTwo.votes.length)
        }

        if(user.name && currentQuestion?.id){

            const arr = Object.keys(user.answers);

            if(arr.includes(currentQuestion.id)){
                setAnsweredOrNot("answered")
            }else{
                setAnsweredOrNot("unanswered")
            }
        }

    },[questions,currentQuestion, option,user,users, question_id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        dispatch(startLoading())
        dispatch(saveQuestionAnswer({
            authedUser: user.id,
            qid: currentQuestion.id,
            answer: option
        }))

        dispatch(updateUser(user.id))
        dispatch(fetchAllUsers());
    }

    if(!currentQuestion?.id){
        return (
            <div>
                <h1>404 Page</h1>
                <p>Question does not exist</p>
            </div>
        )
    }


    return (
        <div className="w-full lg:w-1/2 md:w-full min-h-0 border-2 rounded-xl overflow-hidden">

            <div className="primary-color text-on-primary h-14 flex items-center px-4 w-full">
                <h1> 
                    {answeredOrNot === "unanswered" && `${users[currentQuestion.author].name} asks:`} 
                    {answeredOrNot === "answered" && `Asked by ${users[currentQuestion.author].name}`}
                </h1> 
            </div>

            <div className="flex p-4 bg-white items-center relative flex-wrap">

            { loading && <div className={
                `
                    w-full h-full bg-red-300 flex absolute 
                    box-border animate-pulse place-self-center self-center
                    justify-center items-center left-0 opacity-25
                `
                }
                >
                    Loading...
                </div>
            }
            
                <div  className="w-full md:w-1/4 lg:w-1/2 flex justify-center">
                    {users[currentQuestion.author] && (
                        <img 
                            src={users[currentQuestion.author].avatarURL} 
                            alt="avatar" 
                            className="rounded-full w-44 h-44 bg-gray-900 mr-2 border" 
                        />
                    )}
                </div>
                {// Show question with iptions .......

                    answeredOrNot === "unanswered" && (
                        <div className="px-4 w-full md:w-3/4 lg:w-1/2 h-full flex flex-col justify-between border-l-2 items-center md:items-start"> 

                            <h2 className="font-black text-2xl">
                                Would you rather...
                            </h2><br/>

                            <form onSubmit={(e)=>handleSubmit(e,currentQuestion.id)}>
                                <fieldset>
                                    <input type="radio" name="vote" id="choice1" value="optionOne"
                                        onChange={()=> setOption("optionOne")}
                                    />
                                    <label htmlFor="choice1" className="pl-1">

                                        {currentQuestion.optionOne.text}{/** First answer */ "?"}

                                    </label>
                                </fieldset><br/>

                                <fieldset>
                                    <input type="radio" name="vote" id="choice2" 
                                        onChange={()=> setOption("optionTwo")}
                                    />
                                    <label htmlFor="choice2" className="pl-1">

                                        {currentQuestion.optionTwo.text}{/** First answer */ "?"}

                                    </label>
                                </fieldset><br/>

                                <input 
                                    type="submit"
                                    value="Submit"
                                    className="w-full secondary-color text-white h-10 mt-2" 
                                    
                                /> 

                            </form>            

                        </div>
                    )
                }

                { // When question is answered, show user selection and percentage
                    answeredOrNot === "answered" && (
                        <div className="px-4 w-full md:w-3/4 lg:w-1/2 h-full flex flex-col justify-between border-l-2"> 

                            <h2 className="font-black text-2xl">
                                Results:
                            </h2><br/>

                            <fieldset 
                                className={
                                    `rounded-lg border-2 flex flex-col relative p-5
                                    ${user.answers[question_id] === "optionOne" ? "border-green-400 bg-green-100" : "bg-gray-100 border-gray-200"}
                                    `
                                }
                            >

                                { /** Your vote */
                                    user.answers[question_id] === "optionOne" && (<p 
                                        className={
                                            `absolute self-end -right-5 -top-6 text-gray-600 leading-tight rounded-full 
                                            flex justify-center items-center w-12 h-12 text-sm font-black bg-yellow-300`
                                        }
                                    >
                                
                                        Your <br /> vote
                                    </p>)
                                }

                                <p className="text-xl mb-4 text-green-700">

                                    {currentQuestion.optionOne.text}{/** First answer */ "?"}

                                </p>

                                {/** show percentage */}
                                <div className="w-full h-10 bg-gray-300 rounded-sm overflow-hidden">
                                    <div 
                                        className={
                                            `w-2/3 h-full rounded-md flex justify-end items-center pr-2
                                            ${user.answers[question_id] === "optionOne" ? "bg-green-400 text-white" : "bg-gray-400"}`
                                        }
                                        style={{width: `${calcPercentage(optionOne, optionOne + optionTwo)}`}}
                                    >

                                        {`${calcPercentage(optionOne, optionOne + optionTwo)}`}

                                    </div>
                                </div>
                                <p className="text-center">
                                    {optionOne} out of {optionOne + optionTwo}
                                </p>
                            </fieldset><br/>

                            <fieldset
                                className={
                                    `border-r rounded-lg bg-gray-100 border-2 flex flex-col relative p-5
                                    ${user.answers[question_id] === "optionTwo" ? "border-green-400 bg-green-100" : "bg-gray-100 border-gray-200"}
                                    `
                                }
                            >

                                {/** Your vote */
                                    user.answers[question_id] === "optionTwo" && (<p 
                                        className={
                                            `absolute self-end -right-5 -top-6 text-gray-600 leading-tight rounded-full 
                                            flex justify-center items-center w-12 h-12 text-sm font-black bg-yellow-300`
                                        }
                                    >
                                
                                        Your <br /> vote
                                    </p>)
                                }

                                <p className="text-xl mb-4">

                                    {currentQuestion.optionTwo.text}{/** First answer */ "?"}

                                </p>

                                <div className="w-full h-10 bg-gray-300 rounded-sm overflow-hidden">

                                    <div 
                                        className={
                                            `h-full rounded-md flex justify-end items-center pr-2
                                            ${user.answers[question_id] === "optionTwo" ? "bg-green-400 text-white" : "bg-gray-400"}`
                                        }
                                        style={{width: calcPercentage(optionTwo, optionOne + optionTwo)}}
                                    >

                                        {calcPercentage(optionTwo, optionOne + optionTwo)}

                                    </div>
                                </div>

                                <p className="text-center">
                                    {optionTwo} out of {optionOne + optionTwo}
                                </p>
                            </fieldset><br/>              

                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Question
