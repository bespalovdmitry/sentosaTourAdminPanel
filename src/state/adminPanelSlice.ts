import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ApplicantsDataType} from '../models/applicantModel';
import {firebaseAPI} from '../firebase/firebase';
import {setStatus} from './appSlice';


export const fetchDataTC = createAsyncThunk('adminPanel/fetchData', async (param, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(setStatus({status: 'loading'}))
    try {
        let res: InitialStateType = await firebaseAPI.getData()
        return res
    } catch {
        return rejectWithValue(null)
    } finally {
        dispatch(setStatus({status: 'idle'}))
    }
})

export const adminPanelSlice = createSlice({
    name: 'adminPanel',
    initialState: [{
        appDate: '',
        applicantsData: [],
        email: '',
        file: [],
        fullPrice: 0,
        numberOfApplicants: '',
        service: '',
        tel: '',
        uid: '',
        visa_status: '',
        visitPurpose: ''
    }] as InitialStateType,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchDataTC.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default adminPanelSlice.reducer;

//types
export type InitialStateType = Array<ApplicationType>;

type ApplicationType = {
    appDate: string
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