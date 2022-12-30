
import axios from './axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;



const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${ API_KEY }&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${ API_KEY }&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${ API_KEY }&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${ API_KEY }&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${ API_KEY }&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${ API_KEY }&with_genres=99`
}

export const requestData = [
    {
        title:'Trending Now', 
        fetchUrl: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    {
        title: 'Top Rated',
        fetchUrl: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    {
        title: 'Action Movies',
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    {
        title: 'Comedy Movies',
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    {
        title: 'Horror Movies',
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    {
        title: 'Romance Movies',
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    {
        title: 'Documentaries',
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=99`
    }

]

export const getData = async (fetchUrl) => {
    
    const request = await axios.get(fetchUrl);
    const moviesList = await request.data.results;
    
    return moviesList;
}

export default requests;

