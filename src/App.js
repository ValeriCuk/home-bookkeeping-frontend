import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import IncomeExpenses from "./pages/IncomeExpenses";
import Register from "./pages/Register";
import './App.css';

function App() {
    return (
        <div>
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/income-expenses" element={<IncomeExpenses />} />
			<Route path={"/register"} element={<Register />}/>
		</Routes>
        </div>
    );
}

export default App;
