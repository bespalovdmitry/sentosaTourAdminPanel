import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";

import LinearProgress from '@mui/material/LinearProgress';
import ButtonAppBar from "src/components/ButtonAppBar";

import VisaForm from "src/components/VisaForm";
import {AdminPanel} from "src/components/adminPanel/AdminPanel";
import {LoginPage} from "src/pages/LoginPage/LoginPage";
import './App.css';
import {useAppSelector} from "src/hooks/hooks";
import {ErrorSnackbar} from "src/common/ErrorSnackBar/ErrorSnackBar";
import {privateRoutes} from "./routes";

function App() {
    console.log('App')
    const status = useAppSelector(state => state.appSlice.status);
    const error = useAppSelector(state => state.appSlice.error);

    return (
        <div>
            {/*{error && <ErrorSnackbar />}*/}
            <ButtonAppBar/>
            {/*{status === 'loading'*/}
            {/*    && <LinearProgress sx={{margin: 0, padding: 0}}/>*/}
            {/*}*/}
            <Routes>
                <Route path='/' element={<VisaForm/>}/>
                <Route path='/panel' element={<AdminPanel/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/404' element={<h1>404: PAGE NOT FOUND</h1>}/>
                <Route path='*' element={<Navigate to='/404'/>}/>
            </Routes>
        </div>
    );
}

export default App;
