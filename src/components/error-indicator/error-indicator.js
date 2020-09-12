import React from 'react';
import './error-indicator.css';
import icon from './death-star-icon.png';
const ErrorIndicator = () => {
    return(
        <div className="error-indicator">
            <img src={icon} alt="death-star" className="error-icon"/>
            <span className="boom">
                Boom!
            </span>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    )
};

export  default ErrorIndicator;