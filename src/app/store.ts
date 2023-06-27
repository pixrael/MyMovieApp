import { configureStore } from '@reduxjs/toolkit'
import { movieApi } from '../api/movieSlice'
import { authSlice } from '../api/authSlice'

export default configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
        [authSlice.reducerPath]: authSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(movieApi.middleware)
            .concat(authSlice.middleware)


})