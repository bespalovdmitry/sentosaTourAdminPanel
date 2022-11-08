import {useFormik} from "formik";
import {setError} from "../state/appSlice";
import {getAuth} from "firebase/auth";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import React, {FC} from "react";
import {useAppDispatch} from "../hooks/hooks";
import {userSlice} from "../state/userSlice";

export const LoginForm: FC<LoginFormPropsType> = ({signInWithEmailAndPassword, titleError}) => {
    const dispatch = useAppDispatch();
    const {setUser} = userSlice.actions;
    const auth = getAuth();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
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
            dispatch(setError({error: null}))
            try {
                await signInWithEmailAndPassword(auth, values.email, values.password);

                dispatch(setUser({email: values.email, password: values.password}));
                formik.resetForm();
            } catch (err) {
                dispatch(setError({error: titleError}))
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
}

//types
type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
type LoginFormPropsType = {
    signInWithEmailAndPassword: any
    titleError: null | string
}