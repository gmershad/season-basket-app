export const SET_SELECTED_SEASON = 'SET_SELECTED_SEASON';

export function setSelectedSeason(seasonId) {
    return {
        type: SET_SELECTED_SEASON,
        payload: seasonId,
    };
}
