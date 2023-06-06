import React, { Fragment } from 'react';
import classes from './Footer.module.css';

const Footer = props => {
    const year = new Date().getFullYear();
    return (
        <footer className = {classes.footer}>
            <p>Copyright &copy; {year}. All Rights Reserved </p>
        </footer>
    );
}

export default Footer;