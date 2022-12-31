import React from 'react';
import { useLoaderData } from 'react-router-dom';
import classes from './Movie.module.css';
import axios from '../../axios';
import Nav from '../Nav/Nav';

const Movie = () => {
  const movie = useLoaderData();
  
  const baseUrl = 'https://image.tmdb.org/t/p/original/';

  return (
    <React.Fragment>
    <Nav />
    <div className={classes.movieScreen}>
    <div className={classes.movie__container}>
        <div className={classes.movie__poster}>
          <img src={`${baseUrl}${movie.poster_path}`} alt="movie-poster" />
        </div>
        <div className={classes.movie__info}>
          <h1>{movie.title}</h1>
          <p><strong> Tagline :</strong> :{movie.tagline}</p>
          <p><strong> Duration :</strong> {movie.runtime}m ⌛</p>
          <p><strong> Language :</strong> {movie.spoken_languages.map(item => item.english_name ).join(',')} 🔊</p>
          <p><strong> Genres :</strong> {movie.genres.map(item => ' 🔗' + item.name ).join(',')}</p>
          <p><strong> Vote :</strong> {movie.vote_average}🔥</p>
          <p><strong> Release Date :</strong> {movie.release_date} 📅</p>
          <p><strong> Overview :</strong> {movie.overview}</p>
        </div>
    </div>
      
    </div>
    </React.Fragment>
  )
}

export const loader = async ({params}) => {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const fetchUrl = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`;
  const request = await axios.get(fetchUrl);
  return request.data;
}



export default Movie;

