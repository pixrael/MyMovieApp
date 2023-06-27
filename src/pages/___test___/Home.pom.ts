import { fireEvent, screen } from '@testing-library/react';

export const getAllItemsDisplayedMovies = () => {
    return screen.getAllByTestId(/item-(\d{1,2})/);
}


export const getElemTitleDisplayedMovies = (title: string) => {
    return screen.getByText(title);
}

export const getElemYearDisplayedMovies = (year: string) => {
    return screen.getByText(year);
}

export const findElemYearDisplayedMovies = (year: string) => {
    return screen.findByText(year);
}

export const getElemImgDisplayedMovies = (title: string) => {
    return screen.getByAltText(title);
}

export const findElemImgDisplayedMovies = (title: string) => {
    return screen.findByAltText(title);
}



export const getPaginationDisplayedMovies = () => {
    return screen.getByTestId(/pagination-popular/i);
}

export const clickPage = (page: number) => {

    const pageButton = screen.getByLabelText(`Go to page ${page}`);

    fireEvent.click(pageButton);
}

export const getInfoButtonDisplayedMovie = (title: string) => {
    return screen.getByLabelText(`info about ${title}`)
}

export const clickInfoButtonDisplayedMovie = (title: string) => {
    const infoButton = getInfoButtonDisplayedMovie(title);
    fireEvent.click(infoButton);
}

export const getCircleProgressElement = () => {
    return screen.getByTestId('circular-progress');
}

export const queryCircleProgressElement = () => {
    return screen.queryByTestId('circular-progress');
}