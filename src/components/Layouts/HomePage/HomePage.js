import { getTrending } from "../../API/API"
import { useState, useEffect } from 'react'

function HomePage(){
    const [movies, setMovies] = useState([])


    useEffect(() => {
        getTrending().then(result => {return result.json()}).then(data => {
            setMovies(data.results)
        })
    })

    return(
        <ul>
            {movies && movies.map(movie =>{
                return(
                    <li key={movie.id}>{movie.title}</li>
                )
            }) }
        </ul>
    )
}

export default HomePage