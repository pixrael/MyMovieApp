import GalleryImageList from "../components/galleryImageList/GalleryImageList";
import Navbar from "../components/navbar/Navbar";
import SearchInput from "../components/searchInput/SearchInput";

function Home() {
    return (<>
        <Navbar />
        <SearchInput />
        <GalleryImageList />
    </>)
}

export default Home;