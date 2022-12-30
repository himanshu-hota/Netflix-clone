import React,{useRef,useState} from 'react';
import classes from './SignIn.module.css';
import { createUser , loginUser } from '../../firebase';


const SignIn = () => {

  const [newUser, setNewUser] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  

  const register = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    createUser(enteredEmail,enteredPassword);
  } 



  const signIn = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    loginUser(enteredEmail, enteredPassword);
    
  } 

  return (
    <div className={classes.signInScreen}>
          <form className={classes.signInForm}>
            <h1>Sign In</h1>
            <input type="email" placeholder='Enter your Email' ref={emailRef} />
            <input type="password" placeholder='Enter your password' ref={passwordRef} />
            {!newUser && <button type='submit' onClick={signIn}>Sign in</button>}
            {newUser && <button type='submit' onClick={register}>Sign Up</button>}
            {!newUser && <h4>New to Netflix? <span onClick={() => setNewUser(true)}>Sign Up Now</span></h4>}
        {newUser && <h4>Alread a user? <span onClick={() => setNewUser(false)}>Sign In Now</span></h4>}
        </form>
    </div>
  )
}

export default SignIn;