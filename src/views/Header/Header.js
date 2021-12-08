import {NavLink} from 'react-router-dom'

function Header(){
    return(
        <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
        </header>

    )
}

export default Header