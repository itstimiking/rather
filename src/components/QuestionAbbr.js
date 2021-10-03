import React,{useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {useSelector} from 'react-redux';


function QuestionAbbr({question}) {

    const users = useSelector(state => state.users.users);
    const [avatar, setAvatar] = useState("");

    const history = useHistory(); 

    useEffect(()=>{
        if(users[question.author]){
            setAvatar(users[question.author].avatarURL);
        }
    },[users, question.author])

    return (
        <div className="w-full min-h-0 border-2 rounded-xl overflow-hidden">

            <div className="bg-gray-100 h-14 flex items-center px-4">
                <h1> {`${question.author} asks: `}</h1> 
            </div>

            <div className="flex p-4 bg-white items-center">

                <img src={avatar} alt="avatar" className="rounded-full w-44 h-44 bg-gray-900 mr-2 border" />

                <div className="px-4 w-full h-full flex flex-col justify-between border-l-2"> 

                    <h2 className="font-black text-2xl">
                        Would you rather...
                    </h2><br/>

            

                    <p>

                        {question?.optionOne?.text && `... ${question.optionOne.text} ...`}{/** Second answer */}

                    </p><br/>

                    <button 
                        className="w-full border-2 hover:bg-gray-200 h-10 mt-2" 
                        onClick={()=> history.push(`/question/${question.id}`)}
                    >
                        View Full
                    </button>               

                </div>
            </div>

        </div>
    )
}

export default QuestionAbbr
