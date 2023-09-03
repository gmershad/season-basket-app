import {
    GET_CATALOG_BEGIN,
    GET_CATALOG_SUCCESS,
    GET_CATALOG_FAIL,
    GET_PRODUCT_BEGIN,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    GET_CATALOG_SEARCH_BEGIN,
    GET_CATALOG_SEARCH_SUCCESS,
    GET_CATALOG_SEARCH_FAIL,
    GET_SINGLE_CATALOG_BEGIN,
    GET_SINGLE_CATALOG_SUCCESS,
    GET_SINGLE_CATALOG_FAIL
} from "../actions/catalogActions";

const initialState = {
    catalog: null,
    singleCatalog: null,
    catalogDetail: null,
    loading: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CATALOG_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_CATALOG_SUCCESS:
            return {
                ...state,
                loading: false,
                catalog: action.payload.data,
            };
        case GET_CATALOG_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error.response.data,
            };
        case GET_PRODUCT_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                catalogDetail: action.payload.data,
            };
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error.response.data,
            };
        case GET_CATALOG_SEARCH_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_CATALOG_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                catalog: action.payload.data,
            };
        case GET_CATALOG_SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error.response.data,
            };
        case GET_SINGLE_CATALOG_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_SINGLE_CATALOG_SUCCESS:
            return {
                ...state,
                loading: false,
                singleCatalog: action.payload.data,
            };
        case GET_SINGLE_CATALOG_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error.response.data,
            };
        default:
            return state;
    }
};
