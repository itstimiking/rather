import { Route, Switch } from "react-router";
import Nav from "./components/navComponents/Nav";
import Home from "./routes/home";
import New from "./routes/new";
import Board from "./routes/board";
import Auth from "./routes/auth";

function App() {
    return (
        <>
            <Nav />

            <div className="w-5/6 min-h-0 mx-auto my-10">

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/new" component={New} />
                    <Route path="/board" component={Board} />
                    <Route path="/auth" component={Auth} />
                </Switch>
           
            </div>
        </>
    );
}

export default App;
