import { SET_SELECTED_SEASON } from '../actions/seasonActions';

const initialState = {
    selectedSeason: '',
};

export default function seasonReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_SEASON:
            return {
                ...state,
                selectedSeason: action.payload,
            };
        default:
            return state;
    }
}

