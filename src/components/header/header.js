import React from "react";
import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <a href="#">
                <h3> Star DB</h3>
            </a>
            <ul className="d-flex">
                <li>People</li>
                <li>Planets</li>
                <li>Starships</li>
            </ul>
        </div>
    )
}

export default Header;