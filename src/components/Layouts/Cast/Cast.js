import { useState, useEffect } from 'react'
import { getMovieCredits } from "../../API/API"

function Cast({id}){
    const [cast, setCast] = useState([])
    const url = 'https://image.tmdb.org/t/p/w500'
    useEffect(() => {
        getMovieCredits(id).then(response => {
            return response.json()
        }).then(data => {
            setCast(data.cast)})
    },[])

    return(
        <ul>
            {cast && cast.map(actor => {
                const imageURL =`${url}${actor.profile_path}`
                return(
                    <li>
                        {actor.profile_path && <img src = {imageURL} />}
                        <p>{actor.name}</p>
                        <p>Charaster: {actor.character}</p>
                    </li>
                )
            })}
        </ul>
    )

}

export default Cast