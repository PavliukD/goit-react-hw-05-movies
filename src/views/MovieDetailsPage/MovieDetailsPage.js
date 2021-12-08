import { useParams, useNavigate, Link, Outlet} from "react-router-dom";
import { getMovieDetails } from "../../api/api"
import { useState, useEffect } from 'react'

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
     <div>
         <button type = "button" onClick={() => navigate(-1)}>Go back</button>
         <div>
             {movie.poster_path && <img src ={`${url}${movie.poster_path}`} alt={movie.title} />}
             <h2>{movie.title} ({movie.release_date})</h2>
             <p>User Score: {movie.popularity}</p>
             <h3>Overview</h3>
             <p>{movie.overview}</p>
             <h3>Genres</h3>
             <ul>
                 {movie.genres && movie.genres.map(genre => {
                     return(
                         <li key={genre.name}>{genre.name}</li>
                     )
                 })}
             </ul>
             <p>Additional information</p>
             <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
             </ul>
             <Outlet />
         </div>
     </div>
 )
}

export default MovieDetailsPage