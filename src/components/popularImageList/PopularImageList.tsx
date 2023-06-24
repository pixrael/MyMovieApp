import { useGetPopularMoviesQuery } from "../../movies/movieSlice";
import GalleryImageList from "../galleryImageList/GalleryImageList";
import { SerializedError } from "@reduxjs/toolkit";

function PopularImageList({ page }: { page: number }) {
    const {
        data: movies,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPopularMoviesQuery(page + '') as {
        data?: any;
        isLoading: boolean;
        isSuccess: boolean;
        isError: boolean;
        error?: SerializedError;
    };

    return (<>
        {isLoading && <>...is Loading</>}
        {isError && <>{`...There is an error ${error && error.message}`}</>}
        {isSuccess && <GalleryImageList imagesData={movies.results} />}
    </>)
}

export default PopularImageList;