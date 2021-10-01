import {useEffect} from 'react'
import { Route, Switch } from "react-router";
import Nav from "./components/navComponents/Nav";
import Home from "./routes/home";
import New from "./routes/new";
import Board from "./routes/board";
import Auth from "./routes/auth";
import questionID from "./routes/questionID";


function App() {

    return (
        <>
            <Nav />

            <div className="w-5/6 min-h-0 mx-auto my-10">

                <Switch>
                    <Route exact path="/" component={Auth} />
                    <Route path="/questions" component={Home} />
                    <Route path="/question/:questionID" component={questionID} />
                    <Route path="/new" component={New} />
                    <Route path="/board" component={Board} />
                </Switch>
           
            </div>
        </>
    );
}

export default App;
