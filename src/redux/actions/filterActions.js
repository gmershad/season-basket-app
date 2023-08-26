export const SET_SELECTED_FILTERS = 'SET_SELECTED_FILTERS';
export const SET_SEARCHED_ITEMS = 'SET_SEARCHED_ITEMS';

export function setSelectedFilters(filterData) {
    return {
        type: SET_SELECTED_FILTERS,
        payload: filterData,
    };
}

export function setSearchedItem(searchedData) {
    return {
        type: SET_SEARCHED_ITEMS,
        payload: searchedData,
    };
}
