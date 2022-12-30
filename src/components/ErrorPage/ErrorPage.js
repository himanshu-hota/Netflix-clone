import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ErrorPage.module.css';
// import {Outlet} from 'react-router-dom';
const ErrorPage = () => {
  return (
    <React.Fragment>
    <div className={classes.errorPage}>
        <h1 className={classes.title}>404</h1>
        <p>Page not Found</p>
        <Link to='/'>🏠</Link>
    </div>

    </React.Fragment>
  )
}

export default ErrorPage;