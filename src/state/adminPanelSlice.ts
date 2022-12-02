import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ApplicantDataType} from '../models/applicantModel';
import {firebaseAPI} from '../firebase/firebase';
import {setError, setMessage, setStatus} from './appSlice';
import {RootStateType} from './store';


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

export const sendChangedApplicationTC = createAsyncThunk('adminPanel/sendChangedApplication', async (params: {
    ApplicantData: ApplicantDataType, applicationID: number, applicantDataID: number | undefined}, {dispatch, getState, rejectWithValue}) => {
    dispatch(setStatus({status: 'loading'}))

    const {applicantDataID, applicationID, ApplicantData} = params
    try {
        const state = getState() as RootStateType
        const application = state.adminPanelSlice[applicationID]
        const changedApplication = {
            ...application,
            applicantsData: application.applicantsData.map((el, ind) => ind === applicantDataID ? ApplicantData : el)
        }


        await firebaseAPI.sendApplicantObject(changedApplication)

        dispatch(setMessage({message: 'Данные успешно обновлены'}))

        return {changedApplication, applicationID}
    } catch {
        dispatch(setError({error: 'Ошибка при отправке'}))
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
            .addCase(sendChangedApplicationTC.fulfilled, (state, action) => {
                state[action.payload.applicationID] = action.payload.changedApplication
            })
    }
})

export default adminPanelSlice.reducer;

//types
export type InitialStateType = Array<ApplicationType>;

export type ApplicationType = {
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