import { useParams, useNavigate} from "react-router-dom";
import { NavLink } from "react-router-dom";
import { getMovieDetails } from "../../api/api"
import { useState, useEffect } from 'react'

function MovieCard(){
    const [movie, setMovie] = useState({})
    const url = 'https://image.tmdb.org/t/p/w500'
    const { id } = useParams()
    // const navigation = useNavigate()

    useEffect(() => {
        getMovieDetails(id).then(result => {return result.json()}).then(data => {
            setMovie(data)})
    },[])

 return(
     <div>
         <button >Go back</button>
         <div>
             <img src ={`${url}${movie.poster_path}`} />
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
         </div>
     </div>
 )
}

export default MovieCard

{/* <ul>
<li>
   <NavLink to={`/movies/${id}/cast`}>Cast</NavLink>
    
</li>
<li>
   <NavLink to={`/movies/${id}/reviews`}>Reviews</NavLink>
</li>
</ul> */}