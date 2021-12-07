import {NavLink} from 'react-router-dom'

function Header(){
    return(
        <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        </div>
    )
}

export default Header