import { configureStore } from '@reduxjs/toolkit'
import { moviesSlice } from '../movies/moviesSlice'



export default configureStore({
    reducer: {
        [moviesSlice.reducerPath]: moviesSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(moviesSlice.middleware)

})