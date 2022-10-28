import React from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";

export const Login = () => {
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
            } else if (values.password !== '1234') {
                errors.password = 'Invalid password'
            }
            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            formik.resetForm()
        },
    });
    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
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
type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
