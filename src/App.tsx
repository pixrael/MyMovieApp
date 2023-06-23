import { useEffect } from 'react';
import './App.css';
import { useGetMoviesQuery } from './movies/moviesSlice';
import { Route, Routes } from 'react-router-dom';

import { MyList } from './pages/MyList';
import Home from './pages/Home';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const TMDB_BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

function App() {

  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetMoviesQuery({})


  useEffect(() => {
    console.log('-- !!!', posts,
      isLoading,
      isSuccess,
      isError,
      error);
  },
    [posts,
      isLoading,
      isSuccess,
      isError,
      error]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/my-list' element={<MyList />} />
    </Routes>
  );
}

export default App;
