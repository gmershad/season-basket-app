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

export const GET_CATALOG_BEGIN = "GET_CATALOG_BEGIN";
export const GET_CATALOG_SUCCESS = "GET_CATALOG_SUCCESS";
export const GET_CATALOG_FAIL = "GET_CATALOG_FAIL";