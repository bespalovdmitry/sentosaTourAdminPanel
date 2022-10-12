import React from 'react';
import './App.css';
import ButtonAppBar from "./components/ButtonAppBar";
import VisaForm from "./components/VisaForm";
import {Route, Routes} from "react-router-dom";
import AdminPanel from "./components/adminPanel/AdminPanel";


function App() {
    return (
        <div>
            <ButtonAppBar/>
            <Routes>
                <Route path='/' element={<VisaForm />}/>
                <Route path='panel' element={<AdminPanel />} />
            </Routes>

        </div>
    );
}

export default App;
