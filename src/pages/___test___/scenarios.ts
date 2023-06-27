import { getMovieMock1, getMovieMock2 } from "./mocks";

export const scenario1 = {
    description: 'loading 20 images per page',
    getMovieMock: getMovieMock1,
    useGetPopularMoviesQueryReturnValue: {
        data: getMovieMock1,
        isLoading: false,
        isSuccess: true,
        isError: false,
        error: undefined
    },
    useGetDetailsMovieQueryReturnValue: {
        data: undefined,
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: undefined
    }
}

export const scenario2 = {
    description: 'loading 20 images per page in the page 3',
    getMovieMock: getMovieMock2,
    useGetPopularMoviesQueryReturnValue: {
        data: getMovieMock2,
        isLoading: false,
        isSuccess: true,
        isError: false,
        error: undefined
    },
    useGetDetailsMovieQueryReturnValue: null
}

export const scenario3 = {
    description: 'in the middle of loading',
    getMovieMock: undefined,
    useGetPopularMoviesQueryReturnValue: {
        data: undefined,
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: undefined
    },
    useGetDetailsMovieQueryReturnValue: null
}

export const scenario4 = {
    description: 'when it is not loading images',
    getMovieMock: undefined,
    useGetPopularMoviesQueryReturnValue: {
        data: undefined,
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: undefined
    },
    useGetDetailsMovieQueryReturnValue: null
}