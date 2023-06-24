import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_TMBD_API } from '../constants';
import { SerializedError } from '@reduxjs/toolkit';

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const movieSlice = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({ baseUrl: URL_TMBD_API }),
  endpoints: builder => ({
    getPopularMovies: builder.query({
      query: (page: number) => `/movie/popular?api_key=${TMDB_API_KEY}&page=${page}`,
      transformErrorResponse: (error: any) => <SerializedError>(
        {
          message: error.data.status_message,
          code: error.data.status_code
        })
    }),
    searchMovie: builder.query({
      query: ({ query, page }: { query: string, page: number }) => `/search/movie?api_key=${TMDB_API_KEY}&query=${query}&page=${page}`,
      transformErrorResponse: (error: any) => <SerializedError>(
        {
          message: error.data.status_message,
          code: error.data.status_code
        })
    })
  })
})

export const { useGetPopularMoviesQuery, useSearchMovieQuery } = movieSlice