import React from 'react';
import {useSelector} from 'react-redux';

import LeaderBoardComponent from '../components/LeaderBoardComponent';

function Board() {

    const users = useSelector(state => state.users.users);

    return (
        <div className="flex items-center w-full flex-col space-y-5">
            { Object.keys(users).map(id=><LeaderBoardComponent user={users[id]}  key={id} />) }
        </div>
    )
}

export default Board;
