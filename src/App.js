// import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Layouts/Header/Header';
import HomePage from './components/Layouts/HomePage/HomePage';
import MovieCard from './components/Layouts/MovieCard/MovieCard';
import Cast from './components/Layouts/Cast/Cast';


function App() {
  return(
    <div>
      {/* <Header /> */}
      {/* <HomePage /> */}
      <MovieCard id = {268}/>
      {/* <Cast id = {268} /> */}
    </div>


  )
}

export default App;


