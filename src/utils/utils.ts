export const getYearFromDate = (date: string) => {
    //date format 2023-05-17 and returns 2023
    return date.split('-')[0];
}