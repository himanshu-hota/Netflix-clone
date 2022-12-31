import React, { useState, useEffect } from 'react';
import classes from './Nav.module.css';
import { useNavigate } from 'react-router-dom';

const Nav = () => {

    const [show, setshow] = useState(false);
    const navigate = useNavigate();
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setshow(true);
        } else {
            setshow(false);
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', transitionNavbar);

        return () => {
            window.removeEventListener('scroll', transitionNavbar);
        }

    }, [])

    const mainClass = show ? `${classes.nav} , ${classes.nav__black}` : classes.nav;

    return (
        <nav className={mainClass}>
            <div className={classes.nav__contents}>
                <img className={classes.nav__logo} src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' onClick={() => {
                    navigate('/');
                }} alt='Netflix logo' />
                <img className={classes.nav__avatar} src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' onClick={() => {
                    navigate('/profile');
                }} alt='avatar' />
            </div>
        </nav>
    )
}

export default Nav;
