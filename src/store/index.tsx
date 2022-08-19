import {configureStore} from '@reduxjs/toolkit';
import appDataReducer from './appDataSlice';
import { action_reportError } from './appDataActions';

export const store = configureStore({
    reducer: {
        appData: appDataReducer
    }
})

export {
    action_reportError
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;