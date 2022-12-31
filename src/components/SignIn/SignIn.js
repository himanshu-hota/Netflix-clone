import React,{useRef,useState} from 'react';
import classes from './SignIn.module.css';
import { createUser , loginUser } from '../../firebase';
import { useFormik } from 'formik';
import { signInSchema } from '../../schemas';



const initialFormState = {
  email:'',
  password:''
}

const SignIn = () => {

  const [newUser, setNewUser] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  

  const submitForm = (val,action) => {
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    loginUser(enteredEmail, enteredPassword);
    action.resetForm();
    
  }
  
  const {values,errors, touched , handleBlur,handleChange,handleSubmit} = useFormik({initialValues:initialFormState,validationSchema:signInSchema, onSubmit:submitForm });
  

  const register = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    createUser(enteredEmail,enteredPassword);
  } 


 
  return (
    <div className={classes.signInScreen}>
          <form className={classes.signInForm} onSubmit={handleSubmit} >
            <h1>Sign In</h1>
            <input type="email" placeholder='Enter your Email' value={values.email} onChange={handleChange} onBlur={handleBlur} name='email' ref={emailRef} />
        {errors.email && touched.email ? <p className={classes.validator}>{errors.email}</p> : null}
        <input type="password" placeholder='Enter your password' value={values.password} onChange={handleChange} onBlur={handleBlur} name='password' ref={passwordRef} />
        {errors.password && touched.password ? <p className={classes.validator}>{errors.password}</p> : null}
            {!newUser && <button type='submit' >Sign in</button>}
            {newUser && <button type='submit' onClick={register}>Sign Up</button>}
            {!newUser && <h4>New to Netflix? <span onClick={() => setNewUser(true)}>Sign Up Now</span></h4>}
        {newUser && <h4>Alread a user? <span onClick={() => setNewUser(false)}>Sign In Now</span></h4>}
        </form>
    </div>
  )
}

export default SignIn;