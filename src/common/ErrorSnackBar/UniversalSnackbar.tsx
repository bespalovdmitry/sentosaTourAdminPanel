import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {setError, setMessage} from "../../state/appSlice";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function UniversalSnackbar() {
    const dispatch = useAppDispatch();

    const handleClose = async () => {
        // reset error after X seconds
        message && dispatch(setMessage({error: null}))
        error && dispatch(setError({message:null}))
    }


    const error = useAppSelector(state => state.appSlice.error);
    const message = useAppSelector(state => state.appSlice.message)

    const severity = message ? 'success' : 'error'
    const displayMessage = message ? message : error


    const isOpen: boolean = !!error || !!message


    return (
        <>
            {displayMessage && <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{width: '100%'}}>
                    {displayMessage}
                </Alert>
            </Snackbar>}
        </>
    );
}
