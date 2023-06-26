import { configureStore } from '@reduxjs/toolkit'
import { movieSlice } from '../api/movieSlice'
import { authSlice } from '../api/authSlice'



export default configureStore({
    reducer: {
        [movieSlice.reducerPath]: movieSlice.reducer,
        [authSlice.reducerPath]: authSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
        .concat(movieSlice.middleware)
        .concat(authSlice.middleware)

})