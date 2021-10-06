import React from 'react';
import {useSelector} from 'react-redux';

import LeaderBoardComponent from '../components/LeaderBoardComponent';

function Board() {

    const users = useSelector(state => state.users.users);
    const sortUsers = Object.entries(users)

    sortUsers.sort((a,b)=>{
        const user1 = Object.keys(a[1].answers).length + a[1].questions.length
        const user2 = Object.keys(b[1].answers).length + b[1].questions.length
        return user2 - user1
    })

    return (
        <div className="flex items-center w-full flex-col space-y-5">
            { sortUsers.map(user=><LeaderBoardComponent user={user[1]}  key={user[0]} />) }
        </div>
    )
}

export default Board;
