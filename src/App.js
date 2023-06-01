import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*'
                               element={<DialogsContainer/>} />
                        <Route path='/profile/:profileId?' element={<ProfileContainer/>} />
                        <Route path='/profile/*' element={<ProfileContainer/>} />
                        <Route path='/users/*'
                               element={<UsersContainer/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

