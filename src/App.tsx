import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import ButtonAppBar from 'src/components/ButtonAppBar';
import VisaForm from 'src/components/VisaForm';
import {AdminPanel} from 'src/components/adminPanel/AdminPanel';
import {LoginPage} from 'src/pages/LoginPage/LoginPage';
import {useAppSelector} from 'src/hooks/hooks';
import {UniversalSnackbar} from 'src/common/ErrorSnackBar/UniversalSnackbar';
import {AdminRoutes} from './components/AdminRoutes';
import {ManagRoutes} from './components/ManagRoutes';

function App() {
    const status = useAppSelector(state => state.appSlice.status);

    return (
        <div>
            <UniversalSnackbar/>
            <ButtonAppBar/>
            {status === 'loading'
                && <LinearProgress sx={{position: 'absolute', left: 0, right: 0, top: 64}}/>
            }
            <Routes>
                <Route element={<AdminRoutes/>}>
                    <Route path="/visa" element={<VisaForm/>}/>
                    <Route path="/panel" element={<AdminPanel/>}/>
                </Route>
                <Route element={<ManagRoutes/>}>
                    <Route path="/visa" element={<VisaForm/>}/>
                </Route>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/404" element={<h1>404: PAGE NOT FOUND</h1>}/>
                <Route path="*" element={<Navigate to="/404"/>}/>
            </Routes>
        </div>
    );
}

export default App;
