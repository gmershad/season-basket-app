import {
    SET_SELECTED_SEASON,
    GET_SEASON_BEGIN,
    GET_SEASON_SUCCESS,
    GET_SEASON_FAIL
} from '../actions/seasonActions';

const initialState = {
    selectedSeason: '',
    seasons: null
};

export default function seasonReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_SEASON:
            return {
                ...state,
                selectedSeason: action.payload,
            };
        case GET_SEASON_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_SEASON_SUCCESS:
            return {
                ...state,
                loading: false,
                seasons: action.payload.data,
            };
        case GET_SEASON_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error.response.data,
            };
        default:
            return state;
    }
}

