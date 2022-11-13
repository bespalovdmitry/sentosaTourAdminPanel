import React, {useEffect} from 'react';
import {Navigate} from "react-router-dom";

import {collection, onSnapshot} from "firebase/firestore";
import Button from "@mui/material/Button";
import {formSlice} from "src/state/formSlice";
import {userSlice} from "src/state/userSlice";
import {useAuth} from "src/hooks/use-auth";
import {useAppDispatch, useAppSelector} from "src/hooks/hooks";
import {db} from "src/firebase/firebase";
import DetailPanelContent from "../adminPanel/table-admin-panel/TableAdminPanel"
import {ApplicantsDataType, InitialStateType, setApplicants} from "../../state/adminPanelSlice";
import BasicDetailPanels from "../adminPanel/table-admin-panel/TableAdminPanel";

export const AdminPanel = () => {
    // const isLoggedIn = useAppSelector(state => state.userSlice.isLoggedIn)
    const {isAuth} = useAuth();
    const {removeUser} = userSlice.actions;
    const dispatch = useAppDispatch()
    const applicants = useAppSelector(state => state.formReducer)
    const data = useAppSelector(state => state.adminPanelSlice)

    useEffect(() => {
        return onSnapshot(collection(db, "root_applicant"), doc => {
            doc.forEach(d => {
                dispatch(setApplicants(d.data()))
            })
        });
    }, [dispatch])

    const onLogOutHandler = () => {
        dispatch(removeUser())
    }

    if (!isAuth) {
        return <Navigate to='/login'/>
    }

    return (
        <div>
            <div>
                <Button onClick={onLogOutHandler}>log out</Button>
            </div>
            //тестовая разметка с данными
{/*            <div>
                {data.map((d, i) => {
                    return (
                        <div key={i}>
                            <div>------------------</div>
                            <div>email: {d.email}</div>
                            <div>title: {d.file}</div>
                            <div>fullPrice: {d.fullPrice}</div>
                            <div>numberOfApplicants: {d.numberOfApplicants}</div>
                            <div>service: {d.service}</div>
                            <div>tel: {d.tel}</div>
                            <div>uid: {d.uid}</div>
                            <div>visa_status: {d.visa_status}</div>
                            <div>visitPurpose: {d.visitPurpose}</div>
                        </div>
                    )
                })}
            </div>*/}
            <BasicDetailPanels />
        </div>
    );
};
