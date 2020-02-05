import React from 'react';
import './App.css';
import MainPage from "./component/MainPageButton/MainPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoginPage from "./component/LoginPage/LoginPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/login" component={LoginPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
