import React from 'react'
import {Navigate} from 'react-router-dom'

import Grid from '@mui/material/Grid';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {useAuth} from 'src/hooks/use-auth';
import {useAppSelector} from "src/hooks/hooks";
import {ErrorSnackbar} from "src/common/ErrorSnackBar/ErrorSnackBar";
import {LoginForm} from "../../components/LoginForm";

export const LoginPage = () => {
    console.log('LoginPage')

    const {isAuth} = useAuth();
    const error = useAppSelector(state => state.appSlice.error);

    if (isAuth) {
        return <Navigate to='/panel'/>
    }
    return (
        <Grid container justifyContent={'center'}>
            {error && <ErrorSnackbar/>}
            <Grid item justifyContent={'center'}>
                <Toolbar style={{alignItems: 'center', margin: '70px 0 10px 0'}}>
                    <Typography variant="h3" gutterBottom>
                        Login
                    </Typography>
                </Toolbar>
                <LoginForm />
            </Grid>
        </Grid>
    )
}
