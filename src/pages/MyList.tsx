import { useSelector } from "react-redux";
import { selectSessionId } from "../api/authSlice";
import { useGetMyRatedMoviesQuery } from "../api/movieSlice";
import MyListTable from "../components/myListTable/MyListTable";

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
        {isSuccess && <MyListTable rows={ratedMovies.results} />}
        {isLoading && <>is loading...</>}
        {isError && <>error: {(error as any).message}</>}
    </>
    )
}