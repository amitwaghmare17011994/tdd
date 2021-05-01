import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LayoutContainer from "./components/LayoutContainer";
import AgeCalculator from "./pages/AgeCalculator";
import BMICalculator from "./pages/BMICalculator";
import HomePage from "./pages/HomePage";

const StartPage = () => <LayoutContainer>
    Select App
    </LayoutContainer>


export default function Routes() {
    return (
        <Router>
            <HomePage />
            <Switch>
                <Route path="/" exact>
                    <StartPage />
                </Route>
                <Route path="/bmi">
                    <BMICalculator />
                </Route>
                <Route path="/age">
                    <AgeCalculator />
                </Route>

            </Switch>
        </Router>)
}