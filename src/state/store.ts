import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import formReducer from './formSlice'
import appSlice from "src/state/appSlice";
import userSlice from "src/state/userSlice";
import adminPanelSlice from "./adminPanelSlice";

const rootReducer = combineReducers({
    formReducer,
    userSlice,
    appSlice,
    adminPanelSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(
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
