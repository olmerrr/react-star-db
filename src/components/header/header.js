import React from "react";
import './header.css';
const menu = ['People','Planets','Starships'];
const headerMenu = menu.map((el) => {
    return <li>{el}</li>
})
const Header = () => {
    return (
        <div className="header d-flex">
            <a href="#">
                <h3> Star DB</h3>
            </a>
            <ul className="d-flex">
             {headerMenu}
            </ul>
        </div>
    )
}

export default Header;