
interface IApp {
    appname: string;
}



export interface IAppError {
    error: {
        status: number | string;
        message: string;
        description?: string
    }
}



export interface IPutDataConfiguration {
    method?: string;
    contentType?: string;
    body?:any;
}


export interface IProductProps {
    id: number | string;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[]

}


export interface IAppDataState {
    uiState: {
        isLoading: boolean;
        loadingMsg?: string;
        token?: string;
        loginFail?: true;
        appError?: IAppError;
    }
}


export interface IAppConfig {
    apiRoot: string;
}

export default IApp;

