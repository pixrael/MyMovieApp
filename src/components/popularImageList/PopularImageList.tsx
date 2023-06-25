import { useGetPopularMoviesQuery } from "../../movies/movieSlice";
import GalleryImageList from "../galleryImageList/GalleryImageList";
import { SerializedError } from "@reduxjs/toolkit";
import useModal from "../../hooks/useModal";
import { useState } from "react";
import InfoModal from "../movieDetailsModal/MovieDetailsModal";
import MovieDetails from "../movieDetails/MovieDetails";

function PopularImageList({ page }: { page: number }) {
    const [showModal, open, close] = useModal();
    const [selectedMovieId, setSelectedMovieId] = useState('');

    const {
        data: movies,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPopularMoviesQuery(page) as {
        data?: any;
        isLoading: boolean;
        isSuccess: boolean;
        isError: boolean;
        error?: SerializedError;
    };

    return (<>
        {isLoading && <>...is Loading</>}
        {isError && <>{`...There is an error ${error && error.message}`}</>}
        {isSuccess && <GalleryImageList imagesData={movies.results} onSelectedMovie={(id: string) => { setSelectedMovieId(id); open() }} />}
        {showModal && <InfoModal show={showModal} open={open} close={close} >
            <MovieDetails idMovie={selectedMovieId} />
        </InfoModal >}
    </>)
}

export default PopularImageList;