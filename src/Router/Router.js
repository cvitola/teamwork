import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "../components/Login/Login";
import {Register} from "../components/Register/Register";
import {DashBoard} from "../components/DashBoard/DashBoard"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path='/login' element={<Login />} />
                <Route exact={true} path='/register' element={<Register />} />
                <Route exact={true} path='/dashboard' element={<DashBoard />} />
                <Route path='*' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;