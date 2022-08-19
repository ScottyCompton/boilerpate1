import { IAppError } from "interfaces";
import { setIsLoading } from "./appDataSlice";
// import { http } from 'helpers'


export const clearError = () => {
    return async (dispatch: any) => {
        try {
          dispatch(clearError())

        } catch (error) {
            console.log(error);
        }
    }   
}



export const action_reportError = (err: IAppError) => {    
    return async (dispatch: any) => {
        dispatch(setIsLoading({isLoading: false}));
        try {
          dispatch(reportError(err))

        } catch (error) {
            console.log(error);
        }
    }
}
