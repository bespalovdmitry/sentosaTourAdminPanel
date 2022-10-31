import React from 'react';
import './App.css';
import ButtonAppBar from "src/components/ButtonAppBar";
import VisaForm from "src/components/VisaForm";
import {Route, Routes, Navigate} from "react-router-dom";
import { AdminPanel } from "src/components/adminPanel/AdminPanel";
import { LoginPage } from "src/pages/LoginPage/LoginPage";


function App() {
    return (
        <div>
            <ButtonAppBar/>
            <Routes>
                <Route path='/' element={<VisaForm />}/>
                <Route path='/panel' element={<AdminPanel />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/404' element={<h1>404: PAGE NOT FOUND</h1>} />
                <Route path='*' element={<Navigate to='/404' />} />
            </Routes>

        </div>
    );
}

export default App;
