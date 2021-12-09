import { useParams, useNavigate, Link, Outlet} from "react-router-dom";
import { getMovieDetails } from "../../api/api"
import { useState, useEffect } from 'react'
import s from './MovieDetailsPage.module.css'

function MovieDetailsPage(){
    const [movie, setMovie] = useState({})
    const url = 'https://image.tmdb.org/t/p/w500'
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getMovieDetails(id).then(result => {return result.json()}).then(data => {
            setMovie(data)})
            // eslint-disable-next-line
    },[])

 return(
     <div className={s.movieCard}>
         <button type = "button" onClick={() => navigate(-1)} className={s.button}>Go back</button>
         <div>
            <div className={s.movieInfo}>
                {movie.poster_path && <img src ={`${url}${movie.poster_path}`} alt={movie.title} className={s.image}/>}
                <div className={s.movieDetails}>
                    <h2>{movie.title} ({movie.release_date})</h2>
                    <p>User Score: {movie.popularity}</p>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    <ul className={s.genresList}>
                        {movie.genres && movie.genres.map(genre => {
                            return(
                                <li key={genre.name} className={s.genresList__item}>{genre.name}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className={s.additionalInformation}>
                <h3>Additional information</h3>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            </div>
             <Outlet />
         </div>
     </div>
 )
}

export default MovieDetailsPage