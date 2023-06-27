import './App.css';
import { Route, Routes } from 'react-router-dom';

import { MyList } from './pages/MyList';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mylist' element={<MyList />} />
      </Routes>
    </>
  );
}

export default App;
