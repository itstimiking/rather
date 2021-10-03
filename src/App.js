import React from 'react'
import { Route, Switch} from "react-router";
import {useSelector} from 'react-redux'; 

import Nav from "./components/navComponents/Nav";
import Home from "./routes/home";
import New from "./routes/new";
import Board from "./routes/board";
import Auth from "./routes/auth";
import questionID from "./routes/questionID";


function App() {
    
    const user = useSelector(state => state.users.user);

    return (
        <>
            <Nav />

            <div className="w-5/6 min-h-0 mx-auto my-10">

                <Switch>
                    <Route exact path="/" component={Auth} />
                    <Route path="/questions" component={user?.id ? Home : Auth} />
                    <Route path="/question/:questionID" component={user?.id ? questionID: Auth} />
                    <Route path="/new" component={user?.id ? New : Auth} />
                    <Route path="/board" component={user?.id ? Board : Auth} />
                </Switch>
           
            </div>
        </>
    );
}

export default App;
