import { useState } from "react";
import SearchInput from "../components/searchInput/SearchInput";
import { useGetPopularMoviesQuery } from "../store/api/movieApi";
import PaginationOutlined from "../components/pagination/PaginationOutlined";
import PopularImageList from "../components/popularImageList/PopularImageList";
import SearchMovies from "../components/searchMovies/SearchMovies";
import { CircularProgress } from "@mui/material";

function Home() {
    const [page, setPage] = useState(1);
    const [searchKeyword, setSearchKeyword] = useState('');


    const onPageChange = (page: number) => {
        setPage(page);
    }

    const onSearch = (keyword: string) => {
        setSearchKeyword(keyword);
    }

    const {
        data: movies,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPopularMoviesQuery(1)

    return (<>
        <SearchInput onSearch={onSearch} />
        {!searchKeyword && <PopularImageList page={page} />}
        {searchKeyword && <SearchMovies query={searchKeyword} page={page} />}
        <PaginationOutlined count={isSuccess ? movies.total_pages : 5} isDisabled={isLoading || isError} onPageChange={onPageChange} />
        {isLoading && <CircularProgress data-testid='circular-progress' />}
        {isError && <>error: {(error as any).message}</>}
    </>)
}

export default Home;