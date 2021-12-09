import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMovieCredits } from "../../api/api"
import ActorCards from '../../components/ActorCards/ActorCards'

function Cast(){
    const [cast, setCast] = useState([])
    const {id} = useParams()
    useEffect(() => {
        getMovieCredits(id).then(response => {
            return response.json()
        }).then(data => {
            setCast(data.cast)})
    },[id])

    return(
        <>
        {cast && <ActorCards actorsList = {cast} />}
        </>
    )

}

export default Cast