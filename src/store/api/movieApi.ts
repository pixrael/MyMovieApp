import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_TMBD_API } from '../../constants';
import { SerializedError } from '@reduxjs/toolkit';
import { getYearFromDate } from '../../utils/utils';

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const movieApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({ baseUrl: URL_TMBD_API }),
  tagTypes: ['MyRatedMovies'],
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
    }),
    getDetailsMovie: builder.query({
      query: (idMovie: string) => `/movie/${idMovie}?api_key=${TMDB_API_KEY}`,
      transformResponse: (response: any) => {
        return {
          id: response.id,
          title: response.title,
          year: getYearFromDate(response.release_date),
          releaseDate: response.release_date,
          genres: response.genres.map((g: any) => g.name),
          tagLine: response.tagline,
          overview: response.overview,
          popularity: response.popularity,
          posterPath: response.poster_path,
          voteAverage: response.vote_average,
        }
      },
      transformErrorResponse: (error: any) => <SerializedError>(
        {
          message: error.data.status_message,
          code: error.data.status_code
        })
    }),
    rateMovie: builder.mutation({
      query: ({ idMovie, body, sessionId }: { idMovie: string, body: { value: string }, sessionId: string }) => ({
        url: `/movie/${idMovie}/rating?api_key=${TMDB_API_KEY}&guest_session_id=${sessionId}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['MyRatedMovies'],
      transformErrorResponse: (error: any) => <SerializedError>(
        {
          message: error.data.status_message,
          code: error.data.status_code
        })
    }),
    getMyRatedMovies: builder.query({
      query: ({ page, sortBy, sessionId }: { page: number, sortBy: 'created_at.asc' | 'created_at.desc', sessionId: string }) => `/guest_session/${sessionId}/rated/movies?api_key=${TMDB_API_KEY}&page=${page}&sort_by=${sortBy}`,
      providesTags: ['MyRatedMovies'],
      transformErrorResponse: (error: any) => <SerializedError>(
        {
          message: error.data.status_message,
          code: error.data.status_code
        })
    })
  })
})

export const { useGetPopularMoviesQuery, useSearchMovieQuery, useGetDetailsMovieQuery, useRateMovieMutation, useGetMyRatedMoviesQuery } = movieApi