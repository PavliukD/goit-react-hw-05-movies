import { Route, Routes } from 'react-router';
import './App.css';
import Header from './views/Header/Header';
import HomePage from './views/HomePage/HomePage';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
import Cast from './views/Cast/Cast';
import Reviews from './views/Reviews/Reviews';
import MoviesPage from './views/MoviesPage/MoviesPage';



function App() {
  return(
    <div>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movies' element={<MoviesPage />} />
      <Route path="/movies/:id" element={<MovieDetailsPage />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Routes>
    </div>
  )
}

export default App;


