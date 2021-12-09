import {NavLink} from 'react-router-dom'
// import s from './Header.module.css'

function Header(){
    return(
        <header className="header">
            <NavLink to="/" className="link">Home</NavLink>
            <NavLink to="/movies" className="link">Movies</NavLink>
        </header>

    )
}

export default Header