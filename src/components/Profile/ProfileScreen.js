import React from 'react';
import Nav from '../Nav/Nav';
import classes from './ProfileScreen.module.css';
import { useSelector } from 'react-redux';
import { selectUser} from '../../features/userSlice'; 
import { logoutUser } from '../../firebase';
import PlansScreen from '../PlansScreen/PlansScreen';
import { useNavigate } from 'react-router-dom';

const ProfileScreen = () => {
  const navigate = useNavigate();
    const user = useSelector(selectUser);
    const logoutHandler = () => {
        logoutUser();
        navigate('/logout');
    }

  return (
    <div className={classes.profileScreen} >
        <Nav />
        <div className={classes.profileScreen__body}>
            <h1>Edit profile</h1>
            <div className={classes.profileScreen__info}>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt="User_image" />
                  <div className={classes.profileScreen__details}>
                    <h2>{user.email}</h2>
                    <div className={classes.profileScreen__plans}>
                        <h3>Plans</h3>
                        {<PlansScreen />}
                        <button className={classes.profileScreen__signOut} onClick={logoutHandler} >Sign Out</button>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen;