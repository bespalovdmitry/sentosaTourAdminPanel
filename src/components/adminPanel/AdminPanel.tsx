import React, {useEffect} from 'react';
import {Navigate} from "react-router-dom";

import {collection, onSnapshot} from "firebase/firestore";
import Button from "@mui/material/Button";
import {formSlice} from "src/state/formSlice";
import {userSlice} from "src/state/userSlice";
import {useAuth} from "src/hooks/use-auth";
import {useAppDispatch, useAppSelector} from "src/hooks/hooks";
import {db} from "src/firebase/firebase";

export const AdminPanel = () => {
    console.log('AdminPanel')

    // const isLoggedIn = useAppSelector(state => state.userSlice.isLoggedIn)
    const {isAuth} = useAuth();
    const {removeUser} = userSlice.actions;

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
    }, [dispatch, setEmail])

    const onLogOutHandler = () => {
        dispatch(removeUser())
    }

    if(!isAuth) {
        return <Navigate to='/login' />
    }

    return (
        <div>
            {applicants.email}
            AdminPanel
            <Button onClick={onLogOutHandler}>log out</Button>
        </div>
    );
};
