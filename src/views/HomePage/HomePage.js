import { Link } from "react-router-dom"
import { getTrending } from "../../api/api"
import { useState, useEffect } from 'react'

function HomePage(){
    const [movies, setMovies] = useState([])




    useEffect(() => {
        getTrending().then(result => {return result.json()}).then(data => {
            setMovies(data.results)
        })
    }, [])

    return(
        <ul>
            {movies && movies.map(movie =>{
                return(
                    <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                )
            }) }
        </ul>
    )
}

export default HomePage