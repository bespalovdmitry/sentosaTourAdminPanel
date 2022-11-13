import {createSlice} from "@reduxjs/toolkit";

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
export type ApplicantsDataType = {
    additionFiles: []
    anotherPassportOrNameFiles: []
    birthDate: string
    citizenship: string
    earlyVisaFiles: []
    education: string
    familyStatus: string
    fliesFrom: string
    flightInDate: string
    flightInNumber: string
    flightOutDate: string
    flightOutNumber: string
    fullName: string
    hasAnotherPassport: string
    hasAnotherPassportData: string[]
    hasConvicted: string
    hasConvictedData: string
    hasDeported: string
    hasDeportedData: string
    hasLivedInNonResidenceCountry: string
    hasLivedInNonResidenceCountryData: { country: string, date: string }[]
    hasVisaBefore: string
    hasVisaBeforeData: string[]
    hasVisaReject: string
    hasVisaRejectData: string[]
    importantDataToCheck: {}
    inTicketsFiles: string[]
    mainApplicantIs: string
    male: string
    outTicketsFiles: string[]
    passportCopyFiles: string[]
    passportCountry: string
    passportData: string
    passportExpire: string
    passportIssuedBy: string
    passportNumber: string
    photoFiles: string[]
    position: string
    rejectFiles: []
    religion: string
    residenceAddress: string
    residenceCity: string
    residenceCountry: string
    residenceIndex: string
    yearIncome: string
}