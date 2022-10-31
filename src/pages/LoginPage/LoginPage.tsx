import React from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import {Navigate} from 'react-router-dom'
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import { setAdmin } from 'src/state/loginSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LoginPage = () => {
    const isLoggedIn = useAppSelector(state => state.loginSlice.isLoggedIn);
    const dispatch = useAppDispatch();

    const auth = getAuth();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (values.email !== 'admin@admin.ru') {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            }

            return errors;
        },
        onSubmit: async values => {
            // alert(JSON.stringify(values));
            try {
                await signInWithEmailAndPassword(auth, values.email, values.password)
                dispatch(setAdmin())
                formik.resetForm()
            } catch (err) {
                console.log(err)
            }
        },
    });

    if (isLoggedIn) {
        return <Navigate to='/panel'/>
    }

    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <Toolbar style={{alignItems: 'center', margin: '70px 0 10px 0'}}>
                <Typography variant="h3" gutterBottom>
                    Login
                </Typography>
            </Toolbar>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            {...formik.getFieldProps('email')}
                        />
                        {
                            formik.touched.email ??
                            formik.errors.email
                                ? <div style={{color: 'red'}}>{formik.errors.email}</div>
                                : null
                        }
                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            {...formik.getFieldProps('password')}
                        />
                        {
                            formik.touched.password ??
                            formik.errors.password
                                ? <div style={{color: 'red'}}>{formik.errors.password}</div>
                                : null
                        }
                        <FormControlLabel
                            label={'Remember me'}
                            control={
                                <Checkbox
                                    onChange={formik.handleChange}
                                    checked={formik.values.rememberMe}
                                    name="rememberMe"
                                />
                            }/>
                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Continue
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}

//types
// type LoginPageType = {
//     isLoggedIn: boolean
//     setIsLoggedIn: (isLoggedIn: boolean) => void
// }

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

