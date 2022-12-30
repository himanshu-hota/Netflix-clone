import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const redir = () => {
        navigate('/');
    }
  return (
    <div>
        <h1>Logout Success ful</h1>
        <button onClick={redir}>Login again</button>
    </div>
  )
}

export default Logout;