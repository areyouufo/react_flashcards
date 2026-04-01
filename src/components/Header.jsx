import { Link } from "react-router-dom"

import './Header.css';

export function Header() {
    return (
        <div className="header">
            <h1 className="title">
               <Link to="/">Флеш-карточки</Link>
            </h1>
            <nav className="main-menu">
                <ul>
                    <Link className="main-menu__link" to="/admin">Админ-панель!</Link>
                </ul>
            </nav>
        </div>
    )
}