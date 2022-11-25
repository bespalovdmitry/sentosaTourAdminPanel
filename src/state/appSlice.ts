import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getAuth, signInWithEmailAndPassword, setPersistence, browserLocalPersistence, signOut} from 'firebase/auth';


export const fetchLogin = createAsyncThunk('app/fetch_login', async (email:string, {
    dispatch
}) => {
    await dispatch(setLevel({level: email.slice(0, 5)}));
    return true
})

export const loginTC = createAsyncThunk('app/login', async (params: { email: string, password: string }, {
    dispatch
}) => {
    const auth = getAuth();
    await (async () => {
        await setPersistence(auth, browserLocalPersistence);
    })();

   try {
        await signInWithEmailAndPassword(auth, params.email, params.password);
        dispatch(setLevel({level: params.email.slice(0,5)}));
        return true
    } catch (err) {
        dispatch(setError({error: 'Incorrect login or password'}))
        return false
    }
    finally {
        setTimeout(() => {
            dispatch(setError({error: null}))
        }, 2000)
    }
})

export const logoutTC = createAsyncThunk('app/logout', async (params, {
    dispatch
}) => {
    dispatch(setLevel({level: null}))
    const auth = getAuth();
    signOut(auth)
})

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        status: 'idle',
        error: null,
        user_access_level: null,
    } as InitialStateType,
    reducers: {
        setLevel: (state, action) => {
            state.user_access_level = action.payload.level
        },
        setStatus: (state, action) => {
            state.status = action.payload.status;
        },
        setError: (state, action) => {
            state.error = action.payload.error;
        }
    }
})

export const {setLevel, setStatus, setError} = appSlice.actions;
export default appSlice.reducer;

//types
type InitialStateType = {
    status: 'loading' | 'idle'
    error: string | null
    user_access_level: 'admin' | 'manag' | 'agent' | null
}

