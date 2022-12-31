import React, { useState } from 'react';
import SignIn from '../SignIn/SignIn';
import classes from './SignUp.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { Navigate } from "react-router-dom";


const SignUp = () => {

    const [signedIn, setSignedIn] = useState(false);

    const user = useSelector(selectUser);

    if (user) {
        return <Navigate to="/homepage" />;
    }

    return (
        <React.Fragment>
            <div className={classes.signUpScreen}>
                <div className={classes.signUpScreen__background}>
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" className={classes.signUpScreen__logo} alt="Netflix logo" />
                    {!signedIn &&
                        <button className={classes.signUpScreen__button} onClick={() => setSignedIn(true)} >Sign in</button>}

                    <div className={classes.signUpScreen__gradient} /
                    >
                    <div className={classes.signUpScreen__body}>
                        {signedIn && <SignIn />}
                        {!signedIn &&
                            (<>
                                <h1>Unlimited films, TV programmes and more</h1>
                                <h2>Watch anywhere , Cancel any time</h2>
                                <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                                <div className={classes.signUpScreen__input}>
                                    <button className={classes.signUpScreen__getStarted} onClick={() => setSignedIn(true)}>Get Started</button>

                                </div>
                            </>)
                        }
                    </div>


                </div>
            </div>

        </React.Fragment>
    )
}

export default SignUp;