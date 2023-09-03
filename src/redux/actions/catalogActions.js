import client from "../../api/client";

export const getCatalog = (page, pageSize, seasonId) => (dispatch) => {
    dispatch({
        type: GET_CATALOG_BEGIN,
    });
    return client({
        method: "GET",
        url: `/public/api/catalog`,
        params: { page: page, pageSize: pageSize, seasonId: seasonId },
    })
        .then((res) => {
            dispatch({
                type: GET_CATALOG_SUCCESS,
                payload: res,
            });
            return res;
        })
        .catch((error) => {
            dispatch({
                type: GET_CATALOG_FAIL,
                payload: { error },
            });
            return error;
        });
};


export const getCatalogById = (productId) => (dispatch) => {
    dispatch({
        type: GET_SINGLE_CATALOG_BEGIN,
    });
    return client({
        method: "GET",
        url: `/public/api/catalog/${productId}`
    })
        .then((res) => {
            dispatch({
                type: GET_SINGLE_CATALOG_SUCCESS,
                payload: res,
            });
            return res;
        })
        .catch((error) => {
            dispatch({
                type: GET_SINGLE_CATALOG_FAIL,
                payload: { error },
            });
            return error;
        });
};

export const getProductDetail = (productId) => (dispatch) => {
    dispatch({
        type: GET_PRODUCT_BEGIN,
    });
    return client({
        method: "GET",
        url: `/public/api/catalog/detail/${productId}`,
    })
        .then((res) => {
            dispatch({
                type: GET_PRODUCT_SUCCESS,
                payload: res,
            });
            return res;
        })
        .catch((error) => {
            dispatch({
                type: GET_PRODUCT_FAIL,
                payload: { error },
            });
            return error;
        });
};


export const searchCatalog = (text) => (dispatch) => {
    dispatch({
        type: GET_CATALOG_SEARCH_BEGIN,
    });
    return client({
        method: "GET",
        url: `/public/api/catalog/search/${text}`,
    })
        .then((res) => {
            dispatch({
                type: GET_CATALOG_SEARCH_SUCCESS,
                payload: res,
            });
            return res;
        }
        )
        .catch((error) => {
            dispatch({
                type: GET_CATALOG_SEARCH_FAIL,
                payload: { error },
            });
            return error;
        });
};
export const GET_CATALOG_BEGIN = "GET_CATALOG_BEGIN";
export const GET_CATALOG_SUCCESS = "GET_CATALOG_SUCCESS";
export const GET_CATALOG_FAIL = "GET_CATALOG_FAIL";

export const GET_PRODUCT_BEGIN = "GET_PRODUCT_BEGIN";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL";

export const GET_CATALOG_SEARCH_BEGIN = "GET_CATALOG_SEARCH_BEGIN";
export const GET_CATALOG_SEARCH_SUCCESS = "GET_CATALOG_SEARCH_SUCCESS";
export const GET_CATALOG_SEARCH_FAIL = "GET_CATALOG_SEARCH_FAIL";

export const GET_SINGLE_CATALOG_BEGIN = "GET_SINGLE_CATALOG_BEGIN";
export const GET_SINGLE_CATALOG_SUCCESS = "GET_SINGLE_CATALOG_SUCCESS";
export const GET_SINGLE_CATALOG_FAIL = "GET_SINGLE_CATALOG_FAIL";