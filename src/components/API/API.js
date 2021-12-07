const baseURL = 'https://api.themoviedb.org/3'
const apiKey = '7ff0708a76e007f3bc8ad3755e5e302a'


async function getTrending(){
    const response = await fetch(`${baseURL}/trending/movie/day?api_key=${apiKey}`)
    return response
}

async function getFilmByQuery(query){
    const response = await fetch(`${baseURL}/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`)
    return response
}

async function getMovieDetails(movieID){
    const response = await fetch(`${baseURL}/movie/${movieID}?api_key=${apiKey}&language=en-US`)
    return response

}

async function getMovieCredits(movieID){
    const response = await fetch(`${baseURL}/movie/${movieID}/credits?api_key=${apiKey}&language=en-US`)
    const url = `${baseURL}/movie/${movieID}/credits?api_key=${apiKey}&language=en-US`
    return response
}

async function getMovieReviews(movieID){
    const response = await fetch(`${baseURL}/movie/${movieID}/reviews?api_key=${apiKey}&language=en-US&page=1`)
    return response
}

export {getTrending, getFilmByQuery, getMovieDetails, getMovieCredits, getMovieReviews}