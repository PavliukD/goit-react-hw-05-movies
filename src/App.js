import { Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';
import './App.css';
import Header from './views/Header/Header';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./views/HomePage/HomePage'))
const MoviesPage = lazy(() => import('./views/MoviesPage/MoviesPage'))
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage/MovieDetailsPage'))
const Cast = lazy(() => import('./views/Cast/Cast'))
const Reviews = lazy(() => import('./views/Reviews/Reviews'))

function App() {
  return(
    <div>
    <Header />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Suspense>
    </div>
  )
}

export default App;


