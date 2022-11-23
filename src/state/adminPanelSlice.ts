import {createSlice} from "@reduxjs/toolkit";
import {ApplicantsDataType} from "../models/applicantModel";

export const adminPanelSlice = createSlice({
    name: 'adminPanel',
    initialState: [{
        applicantsData: [],
        email: "",
        file: [],
        fullPrice: 0,
        numberOfApplicants: "",
        service: "",
        tel: "",
        uid: "",
        visa_status: "",
        visitPurpose: ""
    }] as InitialStateType,
    reducers: {
        setApplicants: (state, action) => {
            state.push(action.payload);
        },
    }
})

export default adminPanelSlice.reducer;
export const {setApplicants} = adminPanelSlice.actions;

//types
export type InitialStateType = [
    {
        applicantsData: ApplicantsDataType[]
        email: string
        file: []
        fullPrice: number
        numberOfApplicants: string
        service: string
        tel: string
        uid: string
        visa_status: string
        visitPurpose: string
    }
];