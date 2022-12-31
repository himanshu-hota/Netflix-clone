import React, { useState, useEffect,useMemo, } from 'react';
import classes from './Row.module.css';
import axios from '../../axios';



const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const request = await axios.get(fetchUrl);
        setMovie(request.data.results);
        
        return request;  
      } catch (error) {
        throw new Error('Error occured!');
      }
      
    }

    fetchData();
    setIsLoading(false);
  }, [fetchUrl])


  const memoizedValue = useMemo(() => movies, [movies])
  const imageCLass = !isLargeRow ? `${classes.row__poster}` : `${classes.row__poster} ${classes.row__posterLarge}`;

  const spinner = <div class={classes['lds-ellipsis']}><div></div><div></div><div></div><div></div></div>;

  const content = <div className={classes.row__posters}>

  
    {

      memoizedValue.map(movie => (
        ((isLargeRow && movie?.poster_path) || (!isLargeRow && movie?.backdrop_path)) && movie.id &&
        ( <img src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} id={movie.id} key={movie.id} className={imageCLass} alt='Movie poster' />)
      ))
    }
  </div>;

  return (
    <div className={classes.row}>
      {isLoading && spinner}

      <h2>{title}</h2>

      {!isLoading && content}
    </div>)
}

export default Row;