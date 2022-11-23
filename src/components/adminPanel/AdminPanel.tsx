import React, {useEffect} from 'react';
import {Navigate} from "react-router-dom";
import {collection, onSnapshot} from "firebase/firestore";
import Button from "@mui/material/Button";
import {userSlice} from "src/state/userSlice";
import {useAuth} from "src/hooks/use-auth";
import {useAppDispatch, useAppSelector} from "src/hooks/hooks";
import {db} from "src/firebase/firebase";
import {setApplicants} from "../../state/adminPanelSlice";
import {ApplicantsDataType} from "../../models/applicantModel";
import TableForAdminPanel from "./table-admin-panel/TableForAdminPanel";

export type Row = {
    id: number
    applicantsData:ApplicantsDataType[],
    file:any[],
    fullPrice: number,
    numberOfApplicants:string,
    service: string,
    email: string,
    phone: string,
    visaStatus: string,
    visitPurpose:string,
}

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

    console.log(data)


    let mappedData:Row[] = data.map((d, i) => {
        return {
            id: i,
            applicantsData: d.applicantsData,
            file: d.file,
            fullPrice: d.fullPrice,
            numberOfApplicants: d.numberOfApplicants,
            service: d.service,
            email: d.email,
            phone: d.tel,
            visaStatus: d.visa_status,
            visitPurpose: d.visitPurpose,
            uid: d.uid
        }
    })

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
            <TableForAdminPanel rows={mappedData}/>
        </div>
    );
};
