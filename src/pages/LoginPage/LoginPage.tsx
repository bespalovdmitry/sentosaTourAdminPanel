import React from 'react'
import Grid from '@mui/material/Grid';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {LoginForm} from "../../components/LoginForm";

export const LoginPage = () => {
    return (
        <Grid container justifyContent={'center'}>
            <Grid item justifyContent={'center'}>
                <Toolbar style={{margin: '70px 0 10px 0', justifyContent:'center'}}>
                    <Typography variant="h4" gutterBottom>
                        Sign in
                    </Typography>
                </Toolbar>
                <LoginForm />
            </Grid>
        </Grid>
    )
}
