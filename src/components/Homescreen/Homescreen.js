import React, { useEffect, useCallback } from 'react';
import './HomeScreen.module.css';
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';
import RowList from '../RowList/RowList';
import {useNavigate} from "react-router-dom";


const Homescreen =  () => {
  const navigate = useNavigate();
 
 
  const getData = useCallback((e) => {
    const id = e.target.id;
    const url = `/movie/${id}`
    if(e.target.id){
      return navigate(url);
    }
  },[navigate] );

  useEffect(() => {

    window.addEventListener('click', getData);

    return () => {
      window.removeEventListener('click', getData);
    }

  }, [getData])

  return (
    <div className='homescreen'>
      <Nav />
      <Banner />
      <RowList />

    </div>
  )
}



export default Homescreen;