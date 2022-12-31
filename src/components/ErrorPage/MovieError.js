import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ErrorPage.module.css';
// import {Outlet} from 'react-router-dom';
const MovieerrorPage = () => {
    return (
        <React.Fragment>
            <div className={classes.errorPage}>
                <h1>Requested Movie was released on Mars 🦘</h1>
                <Link to='/' className={classes.goToEarth}>Go to Earth 🌍</Link>
            </div>

        </React.Fragment>
    )
}

export default MovieerrorPage;