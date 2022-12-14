import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "src/hooks/hooks";
import {fetchDataTC} from '../../state/adminPanelSlice';
import {ApplicantDataType} from "../../models/applicantModel";
import TableForAdminPanel from "./table-admin-panel/TableForAdminPanel";
import moment from 'moment/moment';

export type Row = {
    id: number
    applicantsData:ApplicantDataType[],
    file:string[],
    fullPrice: number,
    numberOfApplicants:string,
    service: string,
    email: string,
    phone: string,
    visaStatus: string,
    visitPurpose:string,
}

export const AdminPanel = () => {
    const dispatch = useAppDispatch()
    const data = useAppSelector(state => state.adminPanelSlice)

    useEffect(() => {
        dispatch(fetchDataTC())
    }, [])

    let mappedData:Row[] = data.map((d, i) => {
        return {
            id: i,
            rawData: d.appDate,
            appDate: moment(d.appDate).format('YYYY/MM/DD, HH:mm'),
            applicantsData: d.applicantsData,
            file: d.file,
            fullPrice: d.fullPrice,
            numberOfApplicants: d.numberOfApplicants,
            service: d.service,
            email: d.email,
            phone: d.tel,
            visaStatus: d.visa_status,
            visitPurpose: d.visitPurpose,
            uid: d.uid,
        }
    })


    return (
        <div className={'p-8'}>
            <TableForAdminPanel rows={mappedData}/>
        </div>
    );
};
