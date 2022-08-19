import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAppDataState, IAppError} from 'interfaces';


export interface IAppIsLoading {
    isLoading: boolean;
}

const initialState: IAppDataState = {
    uiState: {    
        isLoading: false
    }
}


const cardGenDataSlice = createSlice({
    name: 'appData',
    initialState: initialState,
    reducers: {

        setIsLoading(state, action: PayloadAction<IAppIsLoading>) {
            state.uiState.isLoading = true;
        },

        clearError(state) {
            state.uiState.appError = undefined;
        },

        reportError(state, action: PayloadAction<IAppError>) {
            state.uiState.isLoading = false;
            state.uiState.appError = action.payload;
        }
    }
})

const {actions, reducer} = cardGenDataSlice;

export const {
    reportError,
    clearError,
    setIsLoading
} = actions;
export default reducer;

