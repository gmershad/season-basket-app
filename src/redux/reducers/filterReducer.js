export const SET_SELECTED_FILTERS = 'SET_SELECTED_FILTERS';

const initialState = {
    selectedFilters: null,
};

export default function filterReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_FILTERS:
            return {
                ...state,
                selectedFilters: action.payload,
            };
        default:
            return state;
    }
}

