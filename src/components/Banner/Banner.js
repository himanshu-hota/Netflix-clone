import React,{useState,useEffect} from 'react';
import classes from './Banner.module.css';
import axios from '../../axios';
import requests from '../../Request';


const Banner = () => {

    const [movie, setMovie] = useState([])

    const truncate = (str,n) => {
        return str?.length > n? str.substring(str,n) + '...': str;
    }

    useEffect(() => {
        const fetchData = async () => {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
        }
        fetchData();

    }, [])
    
    
    return (
        <header className={classes.banner} style={{ backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}} >
            <div className={classes.banner__content}>
                <h1 className={classes.banner__title}>
                   {movie?.name || movie?.title || movie?.original_name}
                </h1>
                <div className={classes.banner__buttons}>
                    <button className={classes.banner__button}>Play</button>
                    <button className={classes.banner__button}>My list</button>
                </div>
                <h1 className={classes.banner__description}>{truncate(movie?.overview,100) }</h1>
      
            </div>
            <div className={classes.banner__fadeBottom} />
        </header>
    )
}

export default Banner;