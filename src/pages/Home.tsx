import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import SearchInput from "../components/searchInput/SearchInput";
import { useGetPopularMoviesQuery } from "../movies/movieSlice";
import PaginationOutlined from "../components/pagination/PaginationOutlined";
import PopularImageList from "../components/popularImageList/PopularImageList";

function Home() {
    const [page, setPage] = useState(1);

    const onPageChange = (page: number) => {
        setPage(page);
    }
    const {
        data: movies,
        isLoading,
        isSuccess,
        isError
    } = useGetPopularMoviesQuery('1')

    return (<>
        <Navbar />
        <SearchInput />
        <PaginationOutlined count={isSuccess ? movies.total_pages : 5} isDisabled={isLoading || isError} onPageChange={onPageChange} />
        <PopularImageList page={page} />
    </>)
}

export default Home;