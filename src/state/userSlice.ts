import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'login',
    initialState: {
        email: null,
        password: null
    } as InitialStateType,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        removeUser: (state) => {
            state.email = null;
            state.password = null;
        }
    }
})

export default userSlice.reducer;

//types
type InitialStateType = {
    email: string | null
    password: string | null
}

