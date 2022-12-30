import React,{useEffect} from 'react';
import Homescreen from './components/Homescreen/Homescreen';

import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import RootLayout from './Pages/RootLayout';
import ErrorPage from './components/ErrorPage/ErrorPage';
import SignUp from './components/SIgnUp/SIgnUp';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux/es/exports';
import { login,logout } from './features/userSlice'; 
import Logout from './components/Logout/Logout';
import ProfileScreen from './components/Profile/ProfileScreen';
import { ProtectedRoute } from './components/ProtectedLayout/ProtectedLayout';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />} >
    <Route index element={<SignUp />}  />
    <Route path='homepage' element={<ProtectedRoute> <Homescreen /> </ProtectedRoute>} />
    <Route path='profile' element={<ProtectedRoute> <ProfileScreen /> </ProtectedRoute>} />
    <Route path='logout' element={<ProtectedRoute> <Logout /> </ProtectedRoute>} />
    <Route path='*' element={<ProtectedRoute> <ProfileScreen /> </ProtectedRoute>} />
   
  </Route>
));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          uid:user.uid,
          email:user.email,
        }));
        // const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(logout());
      }
    });

  
    return () => {
      unsubscribe();
    }
  
    
  }, [dispatch])
  

  return (
      <React.Fragment>
       <RouterProvider router={router} />
      </React.Fragment>
    )

}

export default App;
