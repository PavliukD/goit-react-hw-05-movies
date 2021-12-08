import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMovieCredits } from "../../api/api"

function Cast(){
    const [cast, setCast] = useState([])
    const url = 'https://image.tmdb.org/t/p/w500'
    const {id} = useParams()
    useEffect(() => {
        getMovieCredits(id).then(response => {
            return response.json()
        }).then(data => {
            setCast(data.cast)})
    },[id])

    return(
        <ul>
            {cast && cast.map(actor => {
                const imageURL =`${url}${actor.profile_path}`
                return(
                    <li>
                        {actor.profile_path && <img src = {imageURL} alt = {actor.name}/>}
                        <p>{actor.name}</p>
                        <p>Charaster: {actor.character}</p>
                    </li>
                )
            })}
        </ul>
    )

}

export default Cast