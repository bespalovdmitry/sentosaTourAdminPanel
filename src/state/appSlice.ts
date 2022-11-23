import {createSlice} from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        status: 'idle',
        error: null,
        user_access_level: null,
        email_user: null
    } as InitialStateType,
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload.status;
        },
        setError: (state, action) => {
            state.error = action.payload.error;
        }
    }
})

export const {setStatus, setError} = appSlice.actions;
export default appSlice.reducer;

//types
type InitialStateType = {
    status: 'loading' | 'idle'
    error: string | null
    user_access_level: 'admin' | 'manag' | 'agent' | null
    email_user: 'admin@admin.ru' | 'user@user.ru' | null
}

