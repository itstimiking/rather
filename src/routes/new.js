import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {createQuestion} from "../redux/reducers/slices/questions";

function New() {

    const dispatch = useDispatch();

    const user = useSelector(state => state.users.user);
    const loading = useSelector(state => state.users.loading);

    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");

    const handleChange = (e) => {
        e.preventDefault();

        if(e.target.id === "optionOne"){
            setOptionOne(e.target.value)
        }

        if(e.target.id === "optionTwo"){
            setOptionTwo(e.target.value)
        }
    }

    const submitQuestion = () => {
        if(user?.id && (optionOne !== "") && (optionTwo !== "")){
            dispatch(createQuestion({
                optionOneText: optionOne, 
                optionTwoText: optionTwo, 
                author: user.id
            }))

            setOptionOne("")
            setOptionTwo("")
        }
    }

    return (
        <div className="flex justify-center w-full">
            <div className="w-full lg:w-1/2 md:w-full min-h-0 border-2 rounded-xl overflow-hidden">

                <div className="dull-color h-14 flex items-center justify-center px-4">
                    <h1 className="text-2xl font-black"> Create new Question </h1> 
                </div>

                <div className="flex p-4 bg-white items-center">

                    <div className="px-4 w-full h-full flex flex-col justify-between relative"> 

                        { loading &&<div className="w-60 h-60 border-t-2 border-green-700 flex absolute box-border animate-spin place-self-center self-center rounded-full">

                        </div>}

                        {loading && <p className="bg-green-200 border-2 border-green-600 p-2">Question added successfully</p>}

                        <p>Complete the question</p>

                        <h2 className="font-bold text-xl my-4">
                            Would you rather...
                        </h2><br/>

                        <fieldset>
                            <input 
                                type="text" name="optionOne" 
                                id="optionOne"
                                placeholder="Enter first question" 
                                className="border-2 h-12 w-full rounded-md px-4"
                                value={optionOne}
                                onChange={handleChange}
                            />
                        </fieldset>
                        <p className="font-bold text-center w-full text-xl my-2">OR</p>
                        <fieldset>
                            <input 
                                type="text" name="optionTwo"
                                id="optionTwo"
                                placeholder="Enter Second question" 
                                className="border-2 h-12 w-full rounded-md px-4"
                                value={optionTwo}
                                onChange={handleChange}
                            /> </fieldset><br/>

                        <button 
                            className="w-full secondary-color text-white h-10 mt-2" 
                            onClick={submitQuestion}
                        >
                            Submit
                        </button>               

                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;
