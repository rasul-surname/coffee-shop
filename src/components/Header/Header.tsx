import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <h1>Наш суперкофе</h1>
            </div>
        </header>
    );
}

export default Header;