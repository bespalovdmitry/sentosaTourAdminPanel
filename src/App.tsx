import React from 'react';
import './App.css';
import ButtonAppBar from "./components/ButtonAppBar";
import VisaForm from "./components/VisaForm";
import {Route, Routes, Navigate} from "react-router-dom";
import AdminPanel from "./components/adminPanel/AdminPanel";


function App() {
    return (
        <div>
            <ButtonAppBar/>
            <Routes>
                <Route path='/' element={<VisaForm />}/>
                <Route path='panel' element={<AdminPanel />} />
                <Route path='/404' element={<h1>404: PAGE NOT FOUND</h1>} />
                <Route path='*' element={<Navigate to='/404' />} />
            </Routes>

        </div>
    );
}

export default App;
