import React from "react";
import { Header } from "./Header";
import { Link, Outlet } from "react-router-dom";
import './FormCreate.css'

export function PageCreateSet() {
    return <div>
        <Header />

        <h2>Административная панель</h2>
        <ul className="admin-panel">
            <Link className="admin-panel__btn" to='/admin/createset'> Создать сет карточек!</Link>
            <Link className="admin-panel__btn" to='/admin/createcard'> Создать карточку!</Link>
        </ul>

        <Outlet />
    </div>;
}