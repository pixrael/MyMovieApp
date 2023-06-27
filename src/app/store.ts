import { configureStore } from '@reduxjs/toolkit'
import { movieApi } from '../api/movieApi'
import { authApi } from '../api/authApi'

export default configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(movieApi.middleware)
            .concat(authApi.middleware)


})