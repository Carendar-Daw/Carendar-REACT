import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./components/FontAwesomeIcons";
import "./components/Styles/Typography";
import Landing from './containers/Landing/Landing';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Landing} />
                {/*
                <Route path='/dashboard' exact component={} />
           
                */
                }
                <Route render={() => <h1>Not found</h1>} />
            </Switch>
        </BrowserRouter>

    );
}

export default App;
