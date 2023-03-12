import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./Page/Users"
import Medicines from "./Page/Medicines"
import Login from "./Page/Login"

export default function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Users />} />
            <Route exact path='/users' element={<Users />} />
            <Route exact path='/medicines' element={<Medicines />} />
            <Route exact path='/medicines' element={<Login />} />
        </Routes>
    )

}