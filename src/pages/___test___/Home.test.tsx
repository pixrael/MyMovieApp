import { render } from '@testing-library/react';
import Home from '../Home';
import { BrowserRouter } from 'react-router-dom';

import { useGetDetailsMovieQuery, useGetPopularMoviesQuery } from '../../api/movieApi';
import { scenario1, scenario2, scenario3, scenario4 } from './scenarios';
import { clickPage, findElemImgDisplayedMovies, findElemYearDisplayedMovies, getAllItemsDisplayedMovies, getElemImgDisplayedMovies, getElemTitleDisplayedMovies, getElemYearDisplayedMovies,  queryCircleProgressElement, getCircleProgressElement } from './Home.pom';

jest.mock('../../app/store', () => {
    return {
        dispatch: jest.fn()
    };
});

jest.mock('../../app/store', () => {
    return {
        dispatch: jest.fn()
    };
});

jest.mock('../../api/movieApi', () => {
    return {
        useGetPopularMoviesQuery: jest.fn(),
        useGetDetailsMovieQuery: jest.fn(),
    };
});

const MockHome = () => (
    <BrowserRouter>
        <Home />
    </BrowserRouter>
)

describe('Display images on loaded', () => {

    it('Should display the images on loaded ', async () => {

        (useGetPopularMoviesQuery as any).mockReturnValue(scenario1.useGetPopularMoviesQueryReturnValue);

        (useGetDetailsMovieQuery as any).mockReturnValue(scenario1.useGetDetailsMovieQueryReturnValue);

        render(<MockHome />);

        const allItems = getAllItemsDisplayedMovies();
        //should display 20 items cause the mock contains 20 items
        expect(allItems.length).toBe(20);

        //checking every item is displaying the poster, title, year
        const movieMock = scenario1.getMovieMock;
        movieMock.results.forEach((mockItem, i) => {
            const movieItemTitle = getElemTitleDisplayedMovies(mockItem.title);
            expect(movieItemTitle).toBeInTheDocument();

            const movieItemYear = getElemYearDisplayedMovies(mockItem.release_date);
            expect(movieItemYear).toBeInTheDocument();

            const movieItemPoster = getElemImgDisplayedMovies(mockItem.title);
            expect(movieItemPoster).toBeInTheDocument();
        });

        //clicking page 3
        (useGetPopularMoviesQuery as any).mockReturnValue(scenario2.useGetPopularMoviesQueryReturnValue);

        await clickPage(3);
        //checking some of the items are displaying the poster, title, year
        const movieMock2 = scenario2.getMovieMock;
        const movieItemTitle = await findElemImgDisplayedMovies(movieMock2.results[0].title);
        expect(movieItemTitle).toBeInTheDocument();

        const movieItemYear = await findElemYearDisplayedMovies(movieMock2.results[0].release_date);
        expect(movieItemYear).toBeInTheDocument();

        const movieItemPoster = await findElemImgDisplayedMovies(movieMock2.results[0].title);
        expect(movieItemPoster).toBeInTheDocument();
    });

});

describe('Progress on loading', () => {

    it('Should display the progress circle when loading ', () => {
        (useGetPopularMoviesQuery as any).mockReturnValue(scenario3.useGetPopularMoviesQueryReturnValue);

        render(<MockHome />);
        const progressCircle = getCircleProgressElement();
        expect(progressCircle).toBeInTheDocument();
    });

    it('Should not display the progress circle when it is not loading ', () => {

        (useGetPopularMoviesQuery as any).mockReturnValue(scenario4.useGetPopularMoviesQueryReturnValue);
        render(<MockHome />);
        const progressCircle = queryCircleProgressElement();
        expect(progressCircle).not.toBeInTheDocument();
    });

})




