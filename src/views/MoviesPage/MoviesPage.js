import { useState, useEffect } from 'react'
import { getFilmByQuery } from '../../api/api'
import MoviesList from '../../components/MoviesList/MoviesList'

function MoviesPage(){

    const [movies, setMovies] = useState([])
    const [input, setInput] = useState('')
    const [query, setQuery] = useState('')

    useEffect(() => {
        if (!query){
            return
        }
        getFilmByQuery(query).then(response => {return response.json()})
        .then(data => setMovies(data.results))
    },[query])


    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setQuery(input)
    }

    return(
        <>
        <form onSubmit = {handleSubmit}>
            <input 
                onInput={handleInput}
                value = {input}
            ></input>
            <button type = "submit" ></button>
        </form>
        {movies && <MoviesList moviesList={movies} />}
        </>
    )
}

export default MoviesPage