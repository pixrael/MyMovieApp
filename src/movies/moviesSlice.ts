import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const moviesSlice = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: builder => ({
    getMovies: builder.query({  
      query: () => '/movie/11?api_key=abcd'
    })
  })
})

export const { useGetMoviesQuery } = moviesSlice