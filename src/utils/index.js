export const getCurrentSeason = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonthId = currentDate.getMonth();
    if (currentDay <= 15) {
        return currentMonthId;
    } else {
        return currentMonthId * 2;
    }
};