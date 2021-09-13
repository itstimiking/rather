import { Route, Switch } from "react-router";
import Nav from "./components/navComponents/Nav";
import Home from "./routes/home";

function App() {
    return (
        <>
            <Nav />
            
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
           
        </>
    );
}

export default App;
