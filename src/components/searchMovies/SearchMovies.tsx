import useModal from "../../hooks/useModal";
import { useSearchMovieQuery } from "../../movies/movieSlice";
import GalleryImageList from "../galleryImageList/GalleryImageList";
import { SerializedError } from "@reduxjs/toolkit";
import InfoModal from "../movieDetailsModal/MovieDetailsModal";
import { useState } from "react";
import MovieDetails from "../movieDetails/MovieDetails";

function SearchMovies({ query, page }: { query: string, page: number }) {
    const [showModal, open, close] = useModal();
    const [selectedMovieId, setSelectedMovieId] = useState('');
    const {
        data: movies,
        isLoading,
        isSuccess,
        isError,
        error
    } = useSearchMovieQuery({ query, page }) as {
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

export default SearchMovies;