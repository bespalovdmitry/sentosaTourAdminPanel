import {AnyAction, combineReducers} from 'redux';
import {configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import formReducer from './formSlice'
import appSlice from "src/state/appSlice";
import adminPanelSlice from "./adminPanelSlice";

const rootReducer = combineReducers({
    formReducer,
    appSlice,
    adminPanelSlice
})

export const store  =
    configureStore({
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

export type RootActionsType = AnyAction

export type RootStateType = ReturnType<typeof store.getState>
export type RootDispatchType = ThunkDispatch<RootStateType, unknown, RootActionsType>
