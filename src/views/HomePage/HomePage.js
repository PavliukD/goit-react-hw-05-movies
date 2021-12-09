import { getTrending } from "../../api/api"
import { useState, useEffect } from 'react'
import MoviesList from "../../components/MoviesList/MoviesList"

function HomePage(){
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getTrending().then(result => {return result.json()}).then(data => {
            setMovies(data.results)
        })
    }, [])

    return(
        <>
        {movies && <MoviesList moviesList={movies} /> }
        </>
    )
}

export default HomePage

