import React from 'react'
import { Route, Switch} from "react-router";
import {useSelector} from 'react-redux'; 

import Nav from "./components/navComponents/Nav";
import Home from "./routes/home";
import Add from "./routes/add";
import Leaderboard from "./routes/leaderboard";
import Auth from "./routes/auth";
import questionID from "./routes/questionID";


function App() {
    
    const user = useSelector(state => state.users.user);

    return (
        <>
            <Nav />

            <div className="w-5/6 min-h-0 mx-auto my-10">

                <Switch>
                    <Route exact path="/" component={user?.id ? Home : Auth} />
                    <Route path="/auth" component={Auth} />
                    <Route path="/questions/:question_id" component={user?.id ? questionID: Auth} />
                    <Route path="/add" component={user?.id ? Add : Auth} />
                    <Route path="/leaderboard" component={user?.id ? Leaderboard : Auth} />
                </Switch>
           
            </div>
        </>
    );
}

export default App;
