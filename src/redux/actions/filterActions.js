export const SET_SELECTED_FILTERS = 'SET_SELECTED_FILTERS';

export function setSelectedFilters(filterData) {
    return {
        type: SET_SELECTED_FILTERS,
        payload: filterData,
    };
}
