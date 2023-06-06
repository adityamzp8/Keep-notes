import React, { Fragment } from 'react';
import classes from './Header.module.css';

const Header = props => {
    return (
        <header className={classes.header}>
            <h1>Note Keeper</h1>
        </header>
    );
}

export default Header;