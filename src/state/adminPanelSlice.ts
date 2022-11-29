import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ApplicantDataType} from '../models/applicantModel';
import {firebaseAPI} from '../firebase/firebase';
import {setError, setMessage, setStatus} from './appSlice';


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

export const delApplicationTC = createAsyncThunk('adminPanel/delApplication', async (params: { id: number, email: string, date: string }, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(setStatus({status: 'loading'}))
    try {
        await firebaseAPI.delData(params.email, params.date)
        dispatch(setMessage({message: 'Заявка успешно удалена'}))
        return params.id
    } catch {
        dispatch(setError({error: 'Ошибка при удалении'}))
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
        builder
            .addCase(fetchDataTC.fulfilled, (state, action) => {
                return action.payload
            })
            .addCase(delApplicationTC.fulfilled, (state, action) => {
                let index = action.payload
                state.splice(index, 1);
            })
    }
})

export default adminPanelSlice.reducer;

//types
export type InitialStateType = Array<ApplicationType>;

type ApplicationType = {
    appDate: string
    applicantsData: ApplicantDataType[]
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