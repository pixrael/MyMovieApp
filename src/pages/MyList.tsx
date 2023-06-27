import { useSelector } from "react-redux";
import { selectSessionId } from "../store/api/authApi";
import { useGetMyRatedMoviesQuery } from "../store/api/movieApi";
import MyListTable from "../components/myListTable/MyListTable";
import { CircularProgress, Typography } from "@mui/material";

export function MyList() {
    const sessionId = useSelector(selectSessionId);
    const {
        data: ratedMovies,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetMyRatedMoviesQuery({ page: 1, sortBy: 'created_at.asc', sessionId });

    return (<>
        {isSuccess && !!ratedMovies.results.length && <MyListTable rows={ratedMovies.results} />}
        {isSuccess && !ratedMovies.results.length && <Typography> No movies rated for this session </Typography>}
        {isLoading && <CircularProgress />}
        {isError && <>error: {(error as any).message}</>}
        {!sessionId && <Typography> Please, log as guest to see rated movies </Typography>}
    </>
    )
}