export const SET_SELECTED_FILTERS = 'SET_SELECTED_FILTERS';
export const SET_SEARCHED_ITEMS = 'SET_SEARCHED_ITEMS';

const initialState = {
    selectedFilters: null,
    searchedItems: null,
};

export default function filterReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_FILTERS:
            return {
                ...state,
                selectedFilters: action.payload,
            };
        case SET_SEARCHED_ITEMS:
            return {
                ...state,
                searchedItems: action.payload,
            };
        default:
            return state;
    }
}


