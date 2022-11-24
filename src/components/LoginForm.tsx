import React from 'react';
import {useFormik} from 'formik';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import {loginTC,} from '../state/appSlice';
import {useAppDispatch} from '../hooks/hooks';
import {useNavigate} from 'react-router-dom';

export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};

            if (!values.email) errors.email = 'Required';
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) errors.password = 'Required';

            return errors;
        },
        onSubmit: async values => {
            let res = await dispatch(loginTC(values))
            if (res) {
                formik.resetForm();
                navigate('/visa')
            }
        },
    });

    return <form onSubmit={formik.handleSubmit}>
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
                <Button type={'submit'} variant={'contained'} color={'primary'} sx={{marginTop: 2}}>
                    Continue
                </Button>
            </FormGroup>
        </FormControl>
    </form>
}

//types
type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}