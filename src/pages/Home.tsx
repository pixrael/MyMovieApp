import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import SearchInput from "../components/searchInput/SearchInput";
import { useGetPopularMoviesQuery } from "../movies/movieSlice";
import PaginationOutlined from "../components/pagination/PaginationOutlined";
import PopularImageList from "../components/popularImageList/PopularImageList";
import SearchMovies from "../components/searchMovies/SearchMovies";

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
        isError
    } = useGetPopularMoviesQuery(1)

    return (<>
        <Navbar />
        <SearchInput onSearch={onSearch} />
        <PaginationOutlined count={isSuccess ? movies.total_pages : 5} isDisabled={isLoading || isError} onPageChange={onPageChange} />
        {!searchKeyword && <PopularImageList page={page} />}
        {searchKeyword && <SearchMovies query={searchKeyword} page={page} />}
    </>)
}

export default Home;