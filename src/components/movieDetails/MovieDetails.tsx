import { Box, Divider, Stack, Typography } from "@mui/material";
import { useGetDetailsMovieQuery } from "../../movies/movieSlice";
import { SerializedError } from "@reduxjs/toolkit";
import './MovieDetails.scss'
import { IMG_BASE_URL } from "../../constants";

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

            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={0}
            >

                <Box className="left">
                    <Box
                        className="poster-img"
                        component="img"                        
                        alt={details?.title}
                        src={`${IMG_BASE_URL}${details?.posterPath}`}

                    />
                </Box>
                <Box className="right"><Typography id="modal-modal-title" variant="h6" fontSize={12}>
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={0}
                    >
                        <Box className="info-container">
                            <Typography fontSize={24}>{details?.title} ({details?.year})</Typography>
                            {details?.releaseDate}<br />
                            <b>genres: </b>{details?.genres.join(', ')}<br />
                            <b>vote: </b>{details?.voteAverage}<br /><br />
                            {details?.tagLine}
                        </Box>
                        <Box className="rate-container">
                            RIGHT
                        </Box>

                    </Stack>
                </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} className="overview-container">
                        <b>overview:</b>{details?.overview}<br />
                    </Typography></Box>

            </Stack>


        </>}
        {isError && <>error {(error as SerializedError)?.message}</>}
    </>)
}

export default MovieDetails;