
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home/Home';
import InfiniteScroll from './Components/InfiniteScroll.js/InfiniteScroll';
import AutoCompleteSearchResults from './Components/AutoCompleteSearchResults';
import Timer from './Components/Timer';

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/infinite-scroll" Component={InfiniteScroll} />
      <Route path="/auto-complete-search-results" Component={AutoCompleteSearchResults} />
      <Route path="/timer" Component={Timer} />
    </Routes>
  );
}

export default App;
