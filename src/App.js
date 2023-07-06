import './App.css';
// It is using for routing/naviagating in navbar
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from'./components/Header/Header';
import Home from './Pages/home/Home';
import MovieList from './components/movieList/movieList';
import Movie from './Pages/home/moviedetail/moviedetail';



function App() {
  return (
    <div className="App">
     {/* <h1>BROWNBOI</h1> */}
    {/* It will be in the pattern for working */}
    {/* Path is the path will be shown in url  */}
     <Router>
      <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="movie/:id" element={<Movie />}></Route>
        <Route path="movies/:type" element={<MovieList/>}></Route>
        <Route path="/*"element={<h1>Error Page</h1>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
