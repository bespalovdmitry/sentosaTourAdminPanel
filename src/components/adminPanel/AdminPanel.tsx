import React, {useEffect} from 'react';
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "../../firebase/firebase";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {formSlice} from "../../state/formReducer";
import Login from "./Login/Login";


const AdminPanel = () => {
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
    return (
        <div>
            {applicants.email}
            <Login />
        </div>
    );
};

export default AdminPanel;