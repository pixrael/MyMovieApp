import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_TMBD_API } from '../constants';
import { SerializedError } from '@reduxjs/toolkit';

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const authSlice = createApi({
  reducerPath: 'guestSession',
  baseQuery: fetchBaseQuery({ baseUrl: URL_TMBD_API }),
  endpoints: builder => ({
    getSessionId: builder.query({
      query: () => `/authentication/guest_session/new?api_key=${TMDB_API_KEY}`,
      transformResponse: (response: any) => ({
        success: response.success,
        guestSessionId: response.guest_session_id,
        expiresAt: response.expires_at
      }),
      transformErrorResponse: (error: any) => <SerializedError>(
        {
          message: error.data.status_message,
          code: error.data.status_code
        })
    })
  })
})

export const selectSessionId = (state: any) => {
  
  const sessionQuery = authSlice.endpoints.getSessionId.select({})(state) as any;

  if (sessionQuery.isLoading || sessionQuery.isFetching) {
    // Query is still loading
    return null;
  }

  if (sessionQuery.error) {
    // Handle error case
    return null;
  }

  return sessionQuery.data?.guestSessionId || null;
};

export const { useGetSessionIdQuery } = authSlice;

