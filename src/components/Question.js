import React,{ useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {saveQuestionAnswer} from '../redux/reducers/slices/questions'

function Question() {

    const { questionID } = useParams();

    const dispatch = useDispatch();

    const questions = useSelector(state => state.questions.questions);
    const user = useSelector(state => state.users.user);
    const users = useSelector(state => state.users.users);

    const [currentQuestion, setCurrentQuestion] = useState({});
    const [answeredOrNot, setAnsweredOrNot ] = useState("");

    const [answeredTotal, setAnsweredTotal] = useState([]);

    const [option, setOption] = useState("")

    useEffect(()=>{

        if(Object.keys(questions).length > 0 ){
            const qst = questions[questionID];
            setCurrentQuestion(qst)
            setAnsweredTotal([
                qst.optionOne.votes.concat(qst.optionTwo.votes).length, /** Total answeres */
                qst.optionOne.votes.length, /**option one answers */
                qst.optionTwo.votes.length, /** option two answers */
            ])
        }

        if(user.name){

            const arr = Object.keys(user.answers);

            if(arr.includes(currentQuestion.id)){
                setAnsweredOrNot("answered")
            }else{
                setAnsweredOrNot("unanswered")
            }
        }

    },[questions, currentQuestion, option,user,users])

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(saveQuestionAnswer({
            authedUser: user.id,
            qid: currentQuestion.id,
            answer: option
        }))
    }


    return (
        <div className="w-full lg:w-1/2 md:w-full min-h-0 border-2 rounded-xl overflow-hidden">

            <div className="primary-color text-on-primary h-14 flex items-center px-4">
                <h1> 
                    {answeredOrNot === "unanswered" && `${users[currentQuestion.author].name} asks:`} 
                    {answeredOrNot === "answered" && `Asked by ${users[currentQuestion.author].name}`}
                </h1> 
            </div>

            <div className="flex p-4 bg-white items-center">

                {users[currentQuestion.author] && <img src={users[currentQuestion.author].avatarURL} alt="avatar" className="rounded-full w-44 h-44 bg-gray-900 mr-2 border" />}

                {// Show question with iptions .......

                    answeredOrNot === "unanswered" && (
                        <div className="px-4 w-full h-full flex flex-col justify-between border-l-2"> 

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
                                    value="Button"
                                    className="w-full secondary-color text-white h-10 mt-2" 
                                    
                                /> 

                            </form>            

                        </div>
                    )
                }

                { // When question is answered, show user selection and percentage
                    answeredOrNot === "answered" && (
                        <div className="px-4 w-full h-full flex flex-col justify-between border-l-2"> 

                            <h2 className="font-black text-2xl">
                                Results:
                            </h2><br/>

                            <fieldset 
                                className={
                                    `rounded-lg border-2 flex flex-col relative p-5
                                    ${user.answers[questionID] === "optionOne" ? "border-green-400 bg-green-100" : "bg-gray-100 border-gray-200"}
                                    `
                                }
                            >

                                { /** Your vote */
                                    user.answers[questionID] === "optionOne" && (<p 
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
                                            ${user.answers[questionID] === "optionOne" ? "bg-green-400 text-white" : "bg-gray-400"}`
                                        }
                                        style={{width: `${answeredTotal[1]/answeredTotal[0] * 100}%`}}
                                    >

                                        {`${answeredTotal[1]/answeredTotal[0] * 100}%`}

                                    </div>
                                </div>
                                <p className="text-center">
                                    {answeredTotal[1]} out of {answeredTotal[0]}
                                </p>
                            </fieldset><br/>

                            <fieldset
                                className={
                                    `border-r rounded-lg bg-gray-100 border-2 flex flex-col relative p-5
                                    ${user.answers[questionID] === "optionTwo" ? "border-green-400 bg-green-100" : "bg-gray-100 border-gray-200"}
                                    `
                                }
                            >

                                {/** Your vote */
                                    user.answers[questionID] === "optionTwo" && (<p 
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
                                            ${user.answers[questionID] === "optionTwo" ? "bg-green-400 text-white" : "bg-gray-400"}`
                                        }
                                        style={{width: `${answeredTotal[2]/answeredTotal[0] * 100}%`}}
                                    >

                                        {`${answeredTotal[2]/answeredTotal[0] * 100}%`}

                                    </div>
                                </div>

                                <p className="text-center">
                                    {answeredTotal[1]} out of {answeredTotal[0]}
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
