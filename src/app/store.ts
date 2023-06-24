import { configureStore } from '@reduxjs/toolkit'
import { movieSlice } from '../movies/movieSlice'



export default configureStore({
    reducer: {
        [movieSlice.reducerPath]: movieSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(movieSlice.middleware)

})