import React from 'react';
import './HomeScreen.module.css';
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';
import RowList from '../RowList/RowList';


const Homescreen = () => {

  return (
    <div className='homescreen'>
      <Nav />
      <Banner />
      <RowList />

    </div>
  )
}



export default Homescreen;