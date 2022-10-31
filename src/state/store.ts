import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import formReducer from './formReducer'
import loginSlice from 'src/state/loginSlice'

const rootReducer = combineReducers({
    formReducer,
    loginSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware:(getDefaultMiddleware) => getDefaultMiddleware(
            {
                serializableCheck: {
                    // Ignore these action types
                    ignoredActions: ['your/action/type'],
                    // Ignore these field paths in all actions
                    ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
                    // Ignore these paths in the state
                    ignoredPaths: ['items.dates'],
                }
    },
        )
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
