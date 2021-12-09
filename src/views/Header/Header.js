import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header(){
    return(
        <header className={s.header}>
            <NavLink to="/" className={s.link}>Home</NavLink>
            <NavLink to="/movies" className={s.link}>Movies</NavLink>
        </header>

    )
}

export default Header