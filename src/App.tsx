import './App.css';
import { Route, Routes } from 'react-router-dom';

import { MyList } from './pages/MyList';
import Home from './pages/Home';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/my-list' element={<MyList />} />
    </Routes>
  );
}

export default App;
