import s from './ActorCards.module.css'

function ActorCards({actorsList}){
    const url = 'https://image.tmdb.org/t/p/w500'

    return(
        <ul>
            {actorsList.map(actor => {
                const imageURL =`${url}${actor.profile_path}`
                return(
                    <li key={actor.name}>
                        {actor.profile_path && <img src = {imageURL} alt = {actor.name} className={s.image}/>}
                        <p>{actor.name}</p>
                        <p>Charaster: {actor.character}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default ActorCards