
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home/Home';
import InfiniteScroll from './Components/InfiniteScroll.js/InfiniteScroll';

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/infinite-scroll" Component={InfiniteScroll} />
    </Routes>
  );
}

export default App;
