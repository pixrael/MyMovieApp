import { Typography } from "@mui/material";
import { useGetDetailsMovieQuery } from "../../movies/movieSlice";
import { SerializedError } from "@reduxjs/toolkit";

function MovieDetails({ idMovie }: { idMovie: string }) {

    const {
        data: details,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetDetailsMovieQuery(idMovie);

    return (<>
        {isLoading && <>is Loading ...</>}
        {isSuccess && <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                <b>title:</b>{details?.title}<br />
                <b>year:</b>{details?.year}<br />
                <b>releaseDate:</b>{details?.releaseDate}<br />
                <b>genres:</b>{details?.genres}<br />
                <b>tagLine:</b>{details?.tagLine}<br />
                <b>overview:</b>{details?.overview}<br />
                <b>popularity:</b>{details?.popularity}<br />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                selected movie: {idMovie}
            </Typography>
        </>}
        {isError && <>error {(error as SerializedError)?.message}</>}
    </>)
}

export default MovieDetails;