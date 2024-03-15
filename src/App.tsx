import {HashRouter} from "react-router-dom";
import {Navigate, Route, Routes} from "react-router";
import AboutMe from "./AboutMe/AboutMe";
import React from "react";
import HomePage from "./HomePage/HomePage";
import Contact from "./Contact/Contact";
import Scrapbook from "./Scrapbook/Scrapbook";
import ReadingList from "./ReadingList/ReadingList";
import ChallengeMe from "./ChallengeMe/ChallengeMe";

function App() {
    return(
        <HashRouter>
            <div>
                <Routes>
                    <Route path={"/"} element={<Navigate to="/HomePage"/>}/>
                    <Route path={"/HomePage"} element={<HomePage/>}/>
                    <Route path={"/AboutMe"} element={<AboutMe/>}/>
                    <Route path={"/Contact"} element={<Contact/>}/>
                    <Route path={"/Scrapbook"} element={<Scrapbook/>}/>
                    <Route path={"/ReadingList"} element={<ReadingList/>}/>
                    <Route path={"/ChallengeMe"} element={<ChallengeMe/>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}
export default App;