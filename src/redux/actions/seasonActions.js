import client from "../../api/client";
export const SET_SELECTED_SEASON = 'SET_SELECTED_SEASON';
export const GET_SEASON_BEGIN = "GET_SEASON_BEGIN";
export const GET_SEASON_SUCCESS = "GET_SEASON_SUCCESS";
export const GET_SEASON_FAIL = "GET_SEASON_FAIL";

export const setSelectedSeason = (seasonId) => {
    return {
        type: SET_SELECTED_SEASON,
        payload: seasonId,
    };
}

export const getSeasons = () => (dispatch) => {
    dispatch({
        type: GET_SEASON_BEGIN,
    });
    return client({
        method: "GET",
        url: `/public/api/season`
    }).then((res) => {
        dispatch({
            type: GET_SEASON_SUCCESS,
            payload: res,
        });
        return res;
    }).catch((error) => {
        dispatch({
            type: GET_SEASON_FAIL,
            payload: { error },
        });
        return error;
    });
};