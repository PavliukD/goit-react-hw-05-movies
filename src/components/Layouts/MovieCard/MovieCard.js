import { getMovieDetails } from "../../API/API"
import { useState, useEffect } from 'react'

function MovieCard({id}){
    const [movie, setMovie] = useState({})
    const url = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        getMovieDetails(id).then(result => {return result.json()}).then(data => {
            setMovie(data)})
    },[])

 return(
     <div>
         <button type = "button">Go back</button>
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
                         <li>{genre.name}</li>
                     )
                 })}
             </ul>
             <p>Additional information</p>
             <ul>
                 <li>Cast</li>
                 <li>Reviews</li>
             </ul>
         </div>
     </div>
 )
}

export default MovieCard