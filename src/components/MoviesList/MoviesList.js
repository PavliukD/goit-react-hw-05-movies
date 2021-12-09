import { Link } from "react-router-dom"

function MoviesList({moviesList}){
    return(
        <ul>
            {moviesList.map(movie =>{
                return(
                    <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default MoviesList