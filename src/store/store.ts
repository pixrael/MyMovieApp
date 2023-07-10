import { configureStore } from '@reduxjs/toolkit'
import { movieApi } from './api/movieApi'
import { authApi } from './api/authApi'
import detailModalSlice from './slice/detailModalSlice'

export default configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        detailModal: detailModalSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(movieApi.middleware)
            .concat(authApi.middleware)
})