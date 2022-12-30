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
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
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
        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) &&
        (<img src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} key={movie.id} className={imageCLass} alt={movie.id} />)
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
// console.log('ere');
export const loader = async ( ) => {
  const request = await axios.get(URL);
  return request.data.results;
  
}

export default Row;