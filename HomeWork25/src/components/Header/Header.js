import React from "react";

export const Header = ({children}) => {
    
    return (
        <header className="header">
            <div className="header__logo">
                <div className="header__circle"></div>
                <p className="header__text">Reqres users</p>
            </div>
            <nav className="header__navigation">
                {children}
            </nav>
        </header>
    );
};