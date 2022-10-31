import React, {useEffect} from 'react';
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "src/firebase/firebase";
import {useAppDispatch, useAppSelector} from "src/hooks/hooks";
import {formSlice} from "src/state/formReducer";
import {Navigate} from "react-router-dom";
import Button from "@mui/material/Button";

export const AdminPanel = () => {
    const isLoggedIn = useAppSelector(state => state.loginSlice.isLoggedIn)


    const {setEmail} = formSlice.actions
    const applicants = useAppSelector(state => state.formReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        return  onSnapshot(collection(db, "visaApplications"), doc => {
            doc.forEach(d => {
                // console.log(d.data().applications.email)
                dispatch(setEmail(d.data().applications))
            })
        });
    }, [])

    if(!isLoggedIn) {
        return <Navigate to='/login' />
    }

    return (
        <div>
            {applicants.email}
            AdminPanel
            <Button>log out</Button>
        </div>
    );
};
