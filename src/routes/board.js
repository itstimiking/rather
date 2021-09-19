import React from 'react';
import LeaderBoardComponent from '../components/LeaderBoardComponent';

function Board() {
    return (
        <div className="flex items-center w-full flex-col space-y-5">
            <LeaderBoardComponent />
            <LeaderBoardComponent />
            <LeaderBoardComponent />
        </div>
    )
}

export default Board;
